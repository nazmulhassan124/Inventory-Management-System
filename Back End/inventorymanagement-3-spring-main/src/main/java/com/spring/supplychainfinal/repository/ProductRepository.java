package com.spring.supplychainfinal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.spring.supplychainfinal.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	
	
	

    @Query(value = "SELECT * FROM product t WHERE  t.product_brand = :brandname ", nativeQuery = true)
     List<Product> brandlist(@Param("brandname") String brandlist);
    
	

}
