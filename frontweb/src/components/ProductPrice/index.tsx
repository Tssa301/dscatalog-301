import './styles.css';

type Props = {
  price: number;
};

const ProductPrice = ({ price }: Props) => {
  return (
    <div className="product-price-container">
      <span>$</span>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductPrice;
