import './styles.css';

import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {

  return (
      <div className="base-card product-card">
          <div className="card-top-container">
                <img src={ProductImg} alt="Product name"/>
          </div>
          <div className="card-bottom-container">
                <h6>Product name</h6>
                <ProductPrice/>
          </div>
      </div>

  );

}

export default ProductCard;
