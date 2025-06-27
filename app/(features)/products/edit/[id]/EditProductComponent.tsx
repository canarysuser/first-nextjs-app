import { updateProductAction } from '@/app/action'
import { Product } from '@/app/lib/definitions'
import React from 'react'

function EditProductComponent(props:{item:Product}) {
  return (
    <div>
        <form action={updateProductAction}>
            <input type="hidden" name="productId" defaultValue={props.item.productId}/>

            {/* <label>Id</label>
            <input type="text" className='input input-success' name="productId"
                defaultValue={props.item.productId}/>
            <br/> */}
            <label>Name</label>
            <input type="text" className='input input-success' name="productName"
            defaultValue={props.item.productName}/>
            <br/>
            <label>Price</label>
            <input type="text" className='input input-success' name="unitPrice"
            defaultValue={props.item.unitPrice}/>
            <br/>
            <label htmlFor='unitsInStock'>Stock</label>
            <input type="text" className='input input-success' name="unitsInStock"
            defaultValue={props.item.unitsInStock}/>
            <br/>
            <button type="submit" className='btn btn-warning' >Back To List</button>
        </form>
    </div>
  )
}

export default EditProductComponent