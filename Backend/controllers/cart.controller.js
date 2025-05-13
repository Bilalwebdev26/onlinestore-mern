import { Cart } from "../Model/cart.model.js";
import Product from "../Model/product.model.js";
import { apiError } from "../utils/apiError.class.js";
import { apiResponse } from "../utils/apiRes.class.js";

//helper function to get a cart by user id or guest id
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne(guestId);
  } else {
    return null;
  }
};

export const createCart = async (req, res) => {
  const { productId, quantity, sizes, color, guestId, user ,images} = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new apiError(404, "Product not found");
    }
    //Determine user is loggedIn or guest
    let cart = await getCart(user, guestId);
    console.log("Cart : ",cart)
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
          image: product.images[0].url,
          price:product.price,
          color,
          sizes,
          quantity
        });
      }
      //Calculate total price
      cart.totalPrice = cart.products.reduce((acc,item)=>{
        return acc+item.price*item.quantity
      },0)
      await cart.save()
      return res.status(200).json(new apiResponse(200,"Cart Updated SuccessFully",cart))
    }else{
        //create new cart for the guest or user
        const newCart = await Cart.create({
            user:user?user:undefined,
            guestId:guestId?guestId:"guest_"+new Date().getTime(),
            products:[
                {
                    productId,
                    name:product.name,
                    price:product.price,
                    sizes,
                    color,
                    quantity,
                    image:product.images[0].url
                },
            ],
            totalPrice:product.price*quantity
        })
        return res.status(201).json(new apiResponse(201,"New Cart Created",newCart))
    }
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
};
