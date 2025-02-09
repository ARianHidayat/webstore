import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {useFetchingProduct} from "@/fetcher/fetchProduct"
import Card from "@/components/card";
import Loading from "@/components/loading";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1)
  const {products,isLoading,totalProducts,limit} = useFetchingProduct({pageNumber})
  const paginationItems = Math.ceil(totalProducts / limit)
  console.log(Array.from(Array(paginationItems), (_,index) => index + 1))
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
      {/*this is for dummy for making pagination feature*/}
      {/* <p>total product : {totalProducts}</p>
      <p>total pages : {paginationItems}</p> */}
      <div className="d-flex flex-row justify-content-center pt-5 gap-2">
      <button type="button" className="btn btn-light">Prev</button>
        {
          Array.from(Array(paginationItems), (_,index) => index + 1).map(item => 
            <button key={item} type="button" className="btn btn-light" onClick={()=>{setPageNumber(item)}} >{item}</button>
          )
        }
        <button type="button" className="btn btn-light">Next</button>
      </div>
    </div>
  );
}
