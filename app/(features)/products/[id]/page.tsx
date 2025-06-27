import { redirect, useParams } from 'next/navigation'
import React from 'react'
import "daisyui"
import { ProductService } from '@/app/lib/productService'
import { Product } from '@/app/lib/definitions'
import { getProductsById } from '@/app/lib/mongoDbActions'


async function DetailsPage({params }: {params: Promise<{id:number}>}) {
    const {id} = await params
    //console.log(id)
    // var service = new ProductService(); 
    // var item = service.getProductById(id); 
   // console.log(item)
    let item =new Product(0, '');
    item = await getProductsById(parseInt(id.toString())) as Product;
    console.log(item)

    //Server Actions 
    async function detailsAction(formData: FormData) {
        'use server'
        redirect("/products")
    }

  return (
    <div className='card w-96 bg-base-100 card-xs shadow-sm m-auto mt-5'>
        <h2 className='card-title bg-blue-500 text-center text-4xl text-white p-4'>Details {id}</h2>
        <div className='card-body text-xl'>
        <form action={detailsAction}>
            <label>Id</label>
            <input type="text" className='input input-success' name="productId"
                defaultValue={item.productId}/>
            <br/>
            <label>Name</label>
            <input type="text" className='input input-success' name="productName"
            defaultValue={item.productName}/>
            <br/>
            <label>Price</label>
            <input type="text" className='input input-success' name="unitPrice"
            defaultValue={item.unitPrice}/>
            <br/>
            <label htmlFor='unitsInStock'>Stock</label>
            <input type="text" className='input input-success' name="unitsInStock"
            defaultValue={item.unitsInStock}/>
            <br/>
            <button type="submit" className='btn btn-warning' >Back To List</button>
        </form>
        </div>
    </div>
  )
}

export default DetailsPage