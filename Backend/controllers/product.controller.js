import Product from "../Model/product.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      color,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimension,
      weight,
      sku,
    } = req.body;
    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      color,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimension,
      weight,
      sku,
      user: req.user?._id, //refrence to the admin user who create it
    });
    const createProduct = await product.save();
    return res
      .status(201)
      .json(new apiResponse(201, "New Product Created", createProduct));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      color,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimension,
      weight,
      sku,
    } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new apiError(401, "No Product Found");
    }
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.discountPrice = discountPrice || product.discountPrice;
    product.countInStock = countInStock || product.countInStock;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.sizes = sizes || product.sizes;
    product.color = color || product.color;
    product.collections = collections || product.collections;
    product.material = material || product.material;
    product.gender = gender || product.gender;
    product.images = images || product.images;
    product.isFeatured =
      product.isFeatured !== undefined ? isFeatured : product.isFeatured;
    product.isPublished =
      product.isPublished !== undefined ? isPublished : product.isPublished;
    product.tags = tags || product.tags;
    product.dimension = dimension || product.dimension;
    product.weight = weight || product.weight;
    product.sku = sku || product.sku;

    const updateProduct = await product.save();

    return res
      .status(200)
      .json(
        new apiResponse(200, "Product updated successfully", updateProduct)
      );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      throw new apiError(404, "Product Not Found");
    }
    return res
      .status(200)
      .json(new apiResponse(200, "Product deleted SuccessFully"));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const showAllProduct = async (req, res) => {
  try {
    const {
      collections,
      sizes,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;
    let query = {};
    //filter logic
    if (collections && collections.toLocaleLowerCase() !== "all") {
      query.collections = collections;
    }
    if (category && category.toLocaleLowerCase() !== "all") {
      query.category = category;
    }
    if (material) {
      query.material = { $in: material.split(",") };
    }
    if (brand) {
      query.brand = { $in: brand.split(",") };
    }
    if (sizes) {
      query.sizes = { $in: sizes.split(",") };
    }
    if (color) {
      query.color = { $in: [color] };
    }
    if (gender) {
      query.gender = gender;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDsc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { ratting: -1 };
          break;
        default:
          break;
      }
    }
    console.log("Query : ",query)
    let product = await Product.find(query)
      .sort(sort)
      //.limit(Number(limit) || 0);
    console.log("Products : ",product)
    return res
      .status(200)
      .json(
        new apiResponse(200, "Products Selecting acording to query", product)
      );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const showProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new apiError(404, "No Product Found");
    }
    return res.status(200).json(new apiResponse(200, "Product Found", product));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const similarProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw new apiError(404, "Product not found");
    }
    const similarProd = await Product.aggregate([
      {
        $match: {
          $and: [
            {
              $or: [{ category: product.category }, { gender: product.gender }],
            },
            {
              _id: { $ne: product._id },
            },
          ],
        },
      },
      { $limit: 4 },
    ]);
    return res
      .status(200)
      .json(new apiResponse(200, "Got Similar Product", similarProd));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const bestSellerProduct = async (req, res) => {
  try {
    const product = await Product.find({
      ratting: { $gte: 4 },
    })
      .sort({
        ratting: -1,
      })
      .limit(1);
    if (!product.length) {
      throw new apiError(404, "No Best Seller Product Found");
    }
    return res
      .status(200)
      .json(new apiResponse(200, "Best Seller Product Found", product));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const newArival = async (req, res) => {
  try {
    const products = await Product.find().sort({createdAt:-1}).limit(10);
    if(!products.length){
      throw new apiError(404,"No Product List")
    }
    return res.status(200).json(new apiResponse(200,"New Arrived Products",products))
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
};
