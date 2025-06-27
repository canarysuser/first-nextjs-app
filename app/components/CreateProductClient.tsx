'use client'
import React, { useActionState, useEffect, useState } from 'react'
import "daisyui"
import { Product } from '../lib/definitions'
import { useRouter } from 'next/navigation';



const initialState: Product = new Product(0, '');
function CreateProductClient() {
  const router = useRouter()
  const [state, setState] = useState<Product>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let body = JSON.stringify(state);
    console.log(body);
    let response = await fetch("/api/products/create", {
      method: "POST",
      body: body, 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let result = await response.json();
    console.log(result)
    router.push("/products")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="productId"
          defaultValue={state.productId} />

        {/* <label>Id</label>
        <input type="text" className='input input-success' name="productId"
          value={state.productId}
          onChange={handleChange}
        /> */}
        <label htmlFor='productName'>Name</label>
        <input type="text" className='input input-success' name="productName"
          value={state.productName}
          onChange={handleChange} />
        <br />
        <label>Price</label>
        <input type="text" className='input input-success' name="unitPrice"
          value={state.unitPrice}
          onChange={handleChange} />
        <br />
        <label htmlFor='unitsInStock'>Stock</label>
        <input type="text" className='input input-success' name="unitsInStock"
          value={state.unitsInStock}
          onChange={handleChange} />
        <br />
        <button type="submit" className='btn btn-warning' >Save</button>
      </form>
    </div>
  )
}

export default CreateProductClient