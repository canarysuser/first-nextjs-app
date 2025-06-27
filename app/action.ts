'use server'

import { redirect } from "next/navigation";
import { Product } from "./lib/definitions";
import { ProductService } from "./lib/productService";
import {z} from "zod";
import { updateProduct } from "./lib/mongoDbActions";

const schema = z.object({
    productId: z.number({ required_error:'Required' }),
    productName: z.string({required_error: 'Required Name'})
})

export async function createUser(previousState: any, formData: FormData) {


    const product = schema.safeParse({
        productId: parseInt(formData.get("productId")?.toString() || '0'),
        productName: formData.get("productName")?.toString() || ''
    });
    if(!product.success) {
        return { errors: product.error.flatten().fieldErrors}
     }
    console.log('Server', product);
    var service = new ProductService();
    service.createProduct(product);

    redirect("/products")
    return previousState;
}


export async function updateProductAction(formData: FormData) {

    const product: Product = {
        productId: parseInt(formData.get("productId")?.toString() || '0'),
        productName: formData.get("productName")?.toString() || '',
        unitPrice: parseFloat(formData.get("unitPrice")?.toString() || '0'),
        unitsInStock: parseFloat(formData.get("unitsInStock")?.toString() || '0'),
        discontinued: false
    }
    let results = await updateProduct(product);
    redirect("/products")
}
export async function createProductAction(formData: FormData) {

    const product: Product = {
        productId: parseInt(formData.get("productId")?.toString() || '0'),
        productName: formData.get("productId")?.toString() || '',
        unitPrice: parseFloat(formData.get("unitPrice")?.toString() || '0'),
        unitsInStock: parseFloat(formData.get("unitsInStock")?.toString() || '0'),
        discontinued: false
    }
    let results = await updateProduct(product);
    redirect("/products")
}