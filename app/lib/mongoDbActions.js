import { MongoClient} from "mongodb"

let mongoUri = "mongodb://localhost:27017/Northwind";

let client = null; 

export async function createAndReturnCollection(dbName, collectionName) { 
    client = MongoClient.connect(mongoUri); 
    let db= (await client).db(dbName); 
    let coll = db.collection(collectionName); 

    return coll; 
}
export async function closeConnection() { 
    (await client).close();
}
const db="Northwind"; 
const collection="Products";
export async function getAllProducts() { 
    let products=[];
    try { 
        let coll = await createAndReturnCollection(db, collection); 
        products = await coll.find({}).project({_id:0}).toArray(); 
    } catch (e) { 
        throw e;
    }
    await closeConnection(); 
    return products;
}
export async function getProductsById(id) { 
    let products={};
    try { 
        let coll = await createAndReturnCollection(db, collection); 
        let items = await coll.find({productId:id}).project({_id:0}).toArray(); 
        products = items[0];
    } catch (e) { 
        throw e;
    }
    await closeConnection(); 
    return products;
}

export async function updateProduct(item) { 
    let result=null;
    try { 
        let coll = await createAndReturnCollection(db, collection); 
         result = await coll.replaceOne(
            {productId:item.productId},
            item); 
        
    } catch (e) { 
        throw e;
    }
    await closeConnection(); 
    return result;
}
export async function createProduct(item) { 
    let result=null;
    try { 
        let coll = await createAndReturnCollection(db, collection); 
        //Workaround for generating the nextProductId
        if(item.productId==0) { 
            let maxIdItem = await coll.find({})
            .sort({productId:-1})
            .project({productId:1}).toArray(); 
            item.productId = maxIdItem[0].productId + 1; 
        }
        
         result = await coll.insertOne(item); 
        
    } catch (e) { 
        throw e;
    }
    await closeConnection(); 
    return result;
}