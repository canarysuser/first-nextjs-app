import CreateProductClient from '@/app/components/CreateProductClient';
import { Product } from '@/app/lib/definitions'
import React from 'react'

function CreateProductPage() {
    let item = new Product(0, '');
  return (
    <div>
        <CreateProductClient />
    </div>
  )
}

export default CreateProductPage