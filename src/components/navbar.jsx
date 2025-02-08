import "bootstrap/dist/css/bootstrap.min.css"
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top" style={{backgroundColor: "#578FCA"}} data-bs-theme="light">
        <div className="container-fluid px-5 d-flex flex-column flex-md-row">
            <a className="navbar-brand text-black fw-bold fs-2">Toko Shop</a>
            <form className="d-flex flex-column flex-sm-row align-items-center" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <div className="d-flex flex-row mt-2 mt-sm-0">
              <button className="btn btn-primary " type="button">Search</button>
              <button className="btn btn-success mx-2 " type="button">Admin</button>
              </div>
            </form>
        </div>
    </nav>
    )
}