import React from 'react'
import "daisyui";
import {ProductService} from "../../lib/productService";
import Link from 'next/link';
import { getAllProducts } from '@/app/lib/mongoDbActions';

async function PPage() {
    // const service = new ProductService();
    // const list = await service.getAllProduct();
    // console.log(list)
    const list = await getAllProducts(); 

  return (
    <div className='card border-2 shadow m-auto mx-5'>
        <div className='card-title'>
            <h2 className='text-3xl'>Product List</h2>
            <Link href="/products/create" className='btn btn-info btn-xl ml-8'>
                Add New
            </Link>
        </div>
        <table className="table table-zebra">
            <thead><tr><th>Id</th><th>Name</th><th>Ops</th></tr></thead>
            <tbody>
                {
                    list.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.productId}</td>
                            <td>{value.productName}</td>
                            <td>
                               <Link className='btn btn-success btn-sm'
                                   href={`products/${value.productId}`} >
                                    View
                                </Link>
                                <Link className='btn btn-error btn-sm'
                                   href={`products/edit/${value.productId}`} >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default PPage