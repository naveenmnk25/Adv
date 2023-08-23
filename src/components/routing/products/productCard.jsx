import { useSelector } from "react-redux";
import "./primary.css";
function PrimaryCard() {

    const products = useSelector((state) => state.allProducts.product);
    const renderList = products.map((product) => {
        const { id, title, category, image, price } = product;
        return (<>
            <div className="col" key={id}>
                <div className="card divCardStyle" >
                    <img src={image} className="card-img-top img-thumbnail imageStyle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h3 className="card-title">{category}</h3>
                        <p className="card-text">$ {price}</p>
                    </div>
                </div>
            </div>
        </>)
    })

    return (<>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {renderList}
        </div>
    </>)
}


export default PrimaryCard;