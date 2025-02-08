import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {useFetchingProduct} from "@/fetcher/fetchProduct"
import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  const {products} = useFetchingProduct()
  return (
    <div className="w-100">
    <Navbar/>
    <div className="container-fluid row gap-3 align d-flex justify-content-center" style={{backgroundColor: "gray",paddingTop: "100px"}}>
      {
        products.map(item => (
          <Card 
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          
        />
        ))
      }
    </div>
    </div>
  );
}
