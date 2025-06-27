import { Product } from '@/app/lib/definitions';
import { getProductsById } from '@/app/lib/mongoDbActions';
import React from 'react'
import EditProductComponent from './EditProductComponent';

async function EditPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    let item = new Product(0, '');
    item = await getProductsById(parseInt(id.toString())) as Product;
    console.log(item);

    return (
        <div className='card w-96 bg-base-100 card-xs shadow-sm m-auto mt-5'>
            <h2 className='card-title bg-blue-500 text-center text-4xl text-white p-4'>Edit Product</h2>
            <div className='card-body text-xl'>
                <EditProductComponent item={item}/>
            </div>
        </div>
    )
}

export default EditPage