import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard';
import { remove } from '../Store/CartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  // Removing the cart items on handle click 
  const handleRemove = (id)=>{
    dispatch(remove(id));
  }
  return (
    <>
      <section id="Cart my-5">
        <div className="container my-5">
          <h3>Here see all your cart items.</h3>

          <div className="container my-2">
            <h4 className="text-center text-danger">Cart Items </h4>

            <div className="row">
              {cart.length == 0
              ? <><h4 className="text-center">Your cart is empty</h4></>
              : cart.map((item)=>{
                return <CartCard key={item.id} Title={item.title} Description={item.description} Img={item.image} Price={item.price} Action={'Remove To Cart'} handleAction={()=> handleRemove(item.id)} />
              })

              }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
