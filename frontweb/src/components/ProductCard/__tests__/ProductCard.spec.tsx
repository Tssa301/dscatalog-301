import { render, screen } from "@testing-library/react";
import { Product } from "types/product";
import ProductCard from "..";

test('should render ProductCard', () => {

    const product : Product= {
        name: "Computer",
        price: 2345.67,
        imgUrl: "https://www.pexels.com/photo/macbook-pro-turned-off-205421/"
    } as Product;

    render(
        <ProductCard product={product}/>
    );
    
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByText("2,345.67")).toBeInTheDocument();
});