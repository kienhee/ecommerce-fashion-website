import "./layout-item.scss";
import { Link } from "react-router-dom";
export default function LayoutItem(props) {
  return (
    <div className="layout ">
      <div className="layout__container container">
        {props.data?.map((product) => (
          <Link to={`/detail/${product.id}`} key={product.id}>
            <div className="layout__item">
              <div className="layout__img">
                <img src={product.image[0]} alt="" />
              </div>
              <h3 className="layout__name">{product.name}</h3>
              <p className="layout__price">
                $ &nbsp;
                {product.price}.00
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
LayoutItem.propTypes = {};
