import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([])

  const fetchDataProducts = async () => {
    try {
      const fetching = await fetch("https://fakestoreapi.in/api/products")
      const response = await fetching.json()
      console.log(response.products)
      setProducts(response.products)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(()=>{
    fetchDataProducts()
  },[])
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#578FCA"}} data-bs-theme="light">
        <div className="container-fluid px-5">
            <a className="navbar-brand text-black fw-bold fs-2">Toko Shop</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary " type="button">Search</button>
            </form>
        </div>
    </nav>
    <div className="container-fluid row gap-3 align d-flex justify-content-center" style={{backgroundColor: "gray"}}>
      <p>halo tuan</p>
      {
        products.map(item => (
        <div key={item.id} className="card d-flex flex-row p-3" style={{width: "30rem"}}>
          <img src={item.image} alt={item.image} className="img-thumbnail shadow" style={{width: "200px"}} />
          <div className="card-body">
            <h5 className="card-title overflow-hidden" style={{height: "50px"}} >{item.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="fw-bold">${item.price}</p>
            <div className="d-flex flex-row gap-2 justify-content-end">
              <a href="#" className="btn btn-primary ">click</a>
              <a href="#" className="btn btn-success ">tekan</a>
            </div>
          </div>
        </div>
        ))
      }
    </div>
    </>
  );
}
