
import "./card.css"

function Card(props) {
  return (





    <>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 p-5">
            

            {props.card.map(item =>{

                const {title, desc, id, image} = item
                 return  (<div className="col" key={item.id}>
                   <div className="card bg-dark text-white p-2">
                       <h2 className="card-title text-start">{title}</h2>
                       <img src={image} alt="" className="card-img" />
                       <div className="overlay">
                           <p className="card-img-desc">{desc}</p>
                       </div>
                   </div>
                   </div>) 
                   
                   
            })}
            


        </div>






    </>
  )
}

export default Card;