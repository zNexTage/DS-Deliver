package com.devSuperior.DsDeliver.Services;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devSuperior.DsDeliver.Dto.ProductDTO;
import com.devSuperior.DsDeliver.Entities.Product;
import com.devSuperior.DsDeliver.Repositories.ProductRepository; 

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository; 
	 
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product> list = repository.findAllByOrderByNameAsc();
		
		Stream<ProductDTO> strProductDto = list.stream().map(prod -> new ProductDTO(prod));
		
		return strProductDto.collect(Collectors.toList());
	}
}
