import "bootstrap/dist/css/bootstrap.min.css"
export default function Card (props){
    return(
        <>
         <div key={props.id} className="card d-flex flex-column flex-md-row  align-items-center p-3 shadow" style={{width: "30rem"}}>
          <img src={props.image} alt={"dummy"} className="img-thumbnail shadow" style={{width: "200px"}} />
          <div className="card-body">
            <h5 className="card-title overflow-hidden" style={{height: "50px"}} >{props.title}</h5>
            <p className="card-text overflow-hidden" style={{height: "70px"}}>{props.description}</p>
            <p className="fw-bold">${props.price}</p>
            <div className="d-flex flex-row gap-2 justify-content-end">
              <a href="#" className="btn btn-primary ">click</a>
              <a href="#" className="btn btn-success ">Detail</a>
            </div>
          </div>
        </div>
        </>
    )
}
