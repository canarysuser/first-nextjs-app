import { Product } from "./definitions";

const productList = [
    new Product(101, 'Product 1'),
    new Product(102, 'Product 2'),
    new Product(103, 'Product 3'),
    new Product(104, 'Product 4'),
    new Product(105, 'Product 5')
];


export class ProductService { 
    async getAllProduct() { 
        return productList; 
    }
    getProductById(id) { 
        var item = productList.find(c=>c.productId===parseInt(id));
        console.log(item)
        return item; 
    }
    updateProduct(item) { 
        var index = productList.findIndex(c=>c.productId===item.productId)
        console.log('Index', index)
        if(index>-1) 
            productList.splice(index, 1, item)
    }
    createProduct(item) { 
        
            productList.push(item)
    }
}