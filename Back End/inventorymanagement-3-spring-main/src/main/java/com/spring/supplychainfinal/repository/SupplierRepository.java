package com.spring.supplychainfinal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.supplychainfinal.entity.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long>{

}
