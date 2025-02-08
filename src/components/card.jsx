import "bootstrap/dist/css/bootstrap.min.css"
export default function Card (props){
    return(
        <>
         <div key={props.id} className="card d-flex flex-row p-3" style={{width: "30rem"}}>
          <img src={props.image} alt={"dummy"} className="img-thumbnail shadow" style={{width: "200px"}} />
          <div className="card-body">
            <h5 className="card-title overflow-hidden" style={{height: "50px"}} >{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="fw-bold">${props.price}</p>
            <div className="d-flex flex-row gap-2 justify-content-end">
              <a href="#" className="btn btn-primary ">click</a>
              <a href="#" className="btn btn-success ">tekan</a>
            </div>
          </div>
        </div>
        </>
    )
}
