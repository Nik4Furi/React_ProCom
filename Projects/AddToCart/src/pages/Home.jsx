import React, { useEffect, useState } from 'react'
import CartCard from '../components/CartCard';
import { FetchProducts, STATUS } from '../Store/ProductSlice'
import { add } from '../Store/CartSlice'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const { data: product, status } = useSelector(state => state.product);

  useEffect(() => { dispatch(FetchProducts()); }, [])

  if(status == STATUS.LOADING) return <h2> Loading....</h2>
  if(status == STATUS.ERROR) return <h2> Something went wrong</h2>

  //Function to handle on click event
  const handleAdd = (product) => { dispatch(add(product)); }

  return (
    <>
      <div className="container-fluid pt-3 mt-5">
        <h2 className='text-center'> We are creating a cart, here we can add items, remove items and other functionalites we add on that, help of react-redux</h2>

        <div className="container my-3">
          <h4 className="text-danger text-center"> Our Products</h4>

          <div className="row">
            {
              product.length != 0
                ? product.map((item) => {
                  return <CartCard key={item.id} Title={item.title} Description={item.description} Img={item.image} Price={item.price} Action={'Add To Cart'} handleAction={() => handleAdd(item)} />
                })
                : <><h4 className="text-danger text-center">No items is exist in products shell</h4></>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
