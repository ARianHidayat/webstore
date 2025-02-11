import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {useFetchingProduct} from "@/fetcher/fetchProduct"
import Card from "@/components/card";
import Loading from "@/components/loading";
import Pagination from "@/components/paginationButton";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1)
  const {products,isLoading,totalProducts,limit} = useFetchingProduct({pageNumber})

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
      <Pagination 
        pageNumber={pageNumber}
        totalProducts={totalProducts}
        limit={limit}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
