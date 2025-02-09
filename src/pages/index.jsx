import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {useFetchingProduct} from "@/fetcher/fetchProduct"
import Card from "@/components/card";
import Loading from "@/components/loading";

export default function Home() {
  const {products,isLoading} = useFetchingProduct()
  return (
    <div className="w-100 container-fluid">
      <div className="row gap-3 align d-flex justify-content-center pt-3 h-100" >
        { isLoading ? <Loading/> :
          products.map(item => (
            <Card 
            key={item.id}
            image={item.thumbnail}
            title={item.title}
            description={item.description}
            price={item.price}
            
          />
          ))
        }
      </div>
      <div className="d-flex flex-row justify-content-center pt-5 gap-2">
        <button type="button" className="btn btn-light">Prev</button>
        <button type="button" className="btn btn-light">1</button>
        <button type="button" className="btn btn-light">2</button>
        <button type="button" className="btn btn-light">3</button>
        <button type="button" className="btn btn-light">4</button>
        <button type="button" className="btn btn-light">Next</button>
      </div>
    </div>
  );
}
