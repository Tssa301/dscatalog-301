package com.tssa301.dscatalog.tests;

import java.time.Instant;

import com.tssa301.dscatalog.dto.ProductDTO;
import com.tssa301.dscatalog.entities.Category;
import com.tssa301.dscatalog.entities.Product;

public class Factory {
	
	public static Product creatProduct() {
		Product product = new Product(1L, "Phone", "Good phone", 800.0, "https:img.com/img.png", Instant.parse("2020-10-20T03:00:00Z"));
		product.getCategories().add(new Category(2L, "Eletronics"));
		return product;
	}
	
	public static ProductDTO creatproductDTO() {
		Product product = creatProduct();
		return new ProductDTO(product, product.getCategories());
	}
}
