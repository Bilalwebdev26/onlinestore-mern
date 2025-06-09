import { Cart } from "../Model/cart.model.js";
import Product from "../Model/product.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

//helper function to get a cart by user id or guest id
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  } else {
    return null;
  }
};

export const createCart = async (req, res) => {
  const { productId, quantity, sizes, color, guestId, user, images } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new apiError(404, "Product not found");
    }
    //Determine user is loggedIn or guest
    let cart = await getCart(user, guestId);
    //if cart exist update it
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.sizes === sizes &&
          p.color === color
      );
      if (productIndex > -1) {
        //if the product already exists update the quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          images: product.images[0].url,
          price: product.price,
          color,
          sizes,
          quantity,
        });
      }
      //Calculate total price
      cart.totalPrice = cart.products.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      await cart.save();
      return res
        .status(200)
        .json(new apiResponse(200, "Cart Updated SuccessFully", cart));
    } else {
      //create new cart for the guest or user
      const newCart = await Cart.create({
        user: user ? user : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            price: product.price,
            sizes,
            color,
            quantity,
            images: product.images[0].url,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res
        .status(201)
        .json(new apiResponse(201, "New Cart Created", newCart));
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateQunatity = async (req, res) => {
  const { quantity, productId, user, sizes, color, guestId } = req.body;
  try {
    let cart = await getCart(user, guestId);
    if (!cart) {
      throw new apiError(404, "Cart Not Found");
    }
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.sizes === sizes &&
        p.color === color
    );
    if (productIndex > -1) {
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        //remove product from cart if quantity is 0
        cart.products.splice(productIndex, 1);
      }
      cart.totalPrice = cart.products.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      await cart.save();
      return res.status(201).json(new apiResponse(201, "Cart Updated", cart));
    } else {
      throw new apiError(404, "Product not found in cart");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId, user, guestId, color, sizes } = req.body;
  console.log("productID : ", productId);
  console.log("user : ", user);
  try {
    let cart = await getCart(user, guestId);
    if (!cart) {
      throw new apiError(404, "Cart not found");
    }
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.sizes === sizes &&
        p.color === color
    );
    console.log("Product Index : ", productIndex);
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);
      cart.totalPrice = cart.products.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    } else {
      throw new apiError(404, "Product Not Found In cart");
    }
    await cart.save();
    return res
      .status(201)
      .json(new apiResponse(201, "Product Deleted From Cart", cart));
  } catch (error) {
    console.log("Error from delete cart : ", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllCart = async (req, res) => {
  const { user, guestId } = req.query;
  try {
    let cart = await getCart(user, guestId);
    if (!cart) {
      throw new apiError(404, "Cart Not Found");
    }
    return res.status(200).json(new apiResponse(200, "Show all cart ", cart));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const mergeCart = async (req, res) => {
  const { guestId } = req.body;
  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user?._id });
    if (guestCart) {
      if (guestCart.products.length === 0) {
        throw new apiError(404, "Guest Cart is Empty");
      }
      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.sizes === guestItem.sizes &&
              item.color === guestItem.color
          );
          if (productIndex > -1) {
            //if the item exist in the user cart update the quantity
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            //if not exist in user cart
            userCart.products.push(guestItem);
          }
        });
        userCart.totalPrice = userCart.products.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
        await userCart.save();
        //remove the guest cart after merging
        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.log("Error occur while delete guestUser : ", error);
        }
        return res
          .status(200)
          .json(new apiResponse(200, "Merge Successfully", userCart));
      } else {
        //if usercart has no existing cart assign the guest cart to user
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        await guestCart.save();
        return res
          .status(200)
          .json(new apiResponse(200, "Cart Merge", guestCart));
      }
    } else {
      if (userCart) {
        //guest cart has already merged
        return res
          .status(200)
          .json(new apiResponse(200, "Already merged", userCart));
      } else {
        return res.status(404, "Guest Cart Empty");
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
