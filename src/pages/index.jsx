import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import {useFetchingProduct} from "@/fetcher/fetchProduct"
import Card from "@/components/card";

export default function Home() {
  const {products} = useFetchingProduct()
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#578FCA"}} data-bs-theme="light">
        <div className="container-fluid px-5">
            <a className="navbar-brand text-black fw-bold fs-2">Toko Shop</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary " type="button">Search</button>
            <button className="btn btn-success mx-2 " type="button">Admin</button>
            </form>
        </div>
    </nav>
    <div className="container-fluid row gap-3 align d-flex justify-content-center pt-5" style={{backgroundColor: "gray"}}>
      {
        products.map(item => (
          <Card 
          key={item.id}
          image={item.image}
          title={item.title}
          decription={item.decription}
          price={item.price}
          
        />
        ))
      }
    </div>
    </>
  );
}
