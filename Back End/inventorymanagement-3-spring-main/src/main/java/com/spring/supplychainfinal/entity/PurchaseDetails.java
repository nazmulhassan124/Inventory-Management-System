package com.spring.supplychainfinal.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class PurchaseDetails {

	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long p_details_id;
	

	private long purchase_id;
	
	
	//product table
	private long product_id;
	private String product_name;
	private long retail_rate;
	private long distributor_rate;
	private long quantity;
	private long total;

	
	
	public long getP_details_id() {
		return p_details_id;
	}

	public void setP_details_id(long p_details_id) {
		this.p_details_id = p_details_id;
	}

	public long getPurchase_id() {
		return purchase_id;
	}

	public void setPurchase_id(long purchase_id) {
		this.purchase_id = purchase_id;
	}

	

	public long getProduct_id() {
		return product_id;
	}

	public void setProduct_id(long product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public long getRetail_rate() {
		return retail_rate;
	}

	public void setRetail_rate(long retail_rate) {
		this.retail_rate = retail_rate;
	}

	public long getDistributor_rate() {
		return distributor_rate;
	}

	public void setDistributor_rate(long distributor_rate) {
		this.distributor_rate = distributor_rate;
	}

	

	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}


}
