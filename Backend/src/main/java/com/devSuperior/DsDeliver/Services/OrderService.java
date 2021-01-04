package com.devSuperior.DsDeliver.Services;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devSuperior.DsDeliver.Dto.OrderDTO;
import com.devSuperior.DsDeliver.Entities.Order;
import com.devSuperior.DsDeliver.Repositories.OrderRepository; 

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository; 
	 
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts();
		
		Stream<OrderDTO> strOrderDto = list.stream().map(ord -> new OrderDTO(ord));
		
		return strOrderDto.collect(Collectors.toList());
	}
}
