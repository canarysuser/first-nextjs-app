export class Product { 
    productId: number;
    productName: string;
    unitPrice: number;
    unitsInStock:number;
    discontinued: boolean;

   constructor( pId:number, pname:string) { 
    this.productId=pId;
    this.productName=pname;
    this.unitPrice=0;
    this.unitsInStock=0;
    this.discontinued=false;
   }
}

export interface User { 
    userId: number;
    userName: string;
    password: string
}
