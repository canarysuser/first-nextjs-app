import Image from "next/image";
import Greeting from "./components/Greeting";
import {closeConnection, createAndReturnCollection, getAllProducts} from "@/app/lib/mongoDbActions"

import log4js from '@/app/log4js.config'

const logger = log4js.getLogger();
export default async function Home() {
  // let coll = await createAndReturnCollection("Northwind", "Products");
  // let products = await coll.find({}).project({_id:0}).toArray(); 
  // console.log(products); 
  // await closeConnection();
  //console.log(await getAllProducts())
  logger.info('Inside Home component');
  return (
    <div>
      <h1 className="text-4xl">Welcome to App Router NextJs</h1>
      <Greeting />
    </div>
  );
}
