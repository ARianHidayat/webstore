import "bootstrap/dist/css/bootstrap.min.css"

export default function dummy(){
    return(
        <>
        <nav className="navbar" style={{backgroundColor: "#578FCA"}} data-bs-theme="light">
        <div className="container-fluid px-5">
            <a className="navbar-brand text-white">Navbar</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary " type="button">Search</button>
            </form>
        </div>
        </nav>
        <p>This is Dummy page</p>
        </>
    )
}