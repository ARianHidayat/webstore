import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {useFetchingProduct} from "@/fetcher/fetchProduct"
import Card from "@/components/card";
import Loading from "@/components/loading";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1)
  const {products,isLoading,totalProducts,limit} = useFetchingProduct({pageNumber})
  const totalPages = Math.ceil(totalProducts / limit)
  const visiblePages = 5

  let startPage = Math.max(1, pageNumber - Math.floor(visiblePages/2))
  let endPage = Math.min(totalPages, startPage + visiblePages - 1)

  if(endPage - startPage + 1 < visiblePages){
    startPage = Math.max(1, endPage - visiblePages + 1)
  }

  const handlePageChange = (page) => {
    if(page >= 1 ** page <= totalPages){
      setPageNumber(page)
    }
  }


  // console.log(Array.from(Array(totalPages), (_,index) => index + 1))
  return (
    <div className="container-fluid">
      <div className="row gap-3 align d-flex justify-content-center pt-3 vw-100" >
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
      <div className="d-flex flex-row justify-content-center pt-5 mb-3 gap-2" style={{height: "90px"}}>
        <button type="button" className="btn btn-light"
        onClick={()=>{handlePageChange(1)}}
        disabled={pageNumber === 1}
        >first</button>
        <button type="button" className="btn btn-light"
        onClick={()=>{setPageNumber(pageNumber - 1)}}
        disabled={pageNumber === 1}
        >Prev</button>
        {
          Array.from(Array(endPage - startPage + 1), (_,index) => startPage + index).map(item => 
            <button key={item} type="button" 
            className={`btn btn-light ${item === pageNumber ? "active" : ""}`}  
            onClick={()=>{handlePageChange(item)}} 
            >{item}</button>
          )
        }
        <button type="button" className="btn btn-light"
        onClick={()=>{setPageNumber(pageNumber + 1)}}
        disabled={pageNumber === totalPages}
        >Next</button>
        <button type="button" className="btn btn-light"
        onClick={()=>{handlePageChange(totalPages)}}
        disabled={pageNumber === totalPages}
        >last</button>
      </div>
      <div>
        <button type="button" 
        className="btn btn-success position-fixed bottom-0 end-0 m-4 mb-5"
        onClick={()=>{window.scrollTo({top: 0})}}
        >back to top</button>
      </div>
    </div>
  );
}
