package com.devSuperior.DsDeliver.Services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devSuperior.DsDeliver.Dto.OrderDTO;
import com.devSuperior.DsDeliver.Dto.ProductDTO;
import com.devSuperior.DsDeliver.Entities.Order;
import com.devSuperior.DsDeliver.Entities.OrderStatus;
import com.devSuperior.DsDeliver.Entities.Product;
import com.devSuperior.DsDeliver.Repositories.OrderRepository;
import com.devSuperior.DsDeliver.Repositories.ProductRepository; 

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository; 
	
	@Autowired
	private ProductRepository prodRepository; 
	 
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts();
		
		Stream<OrderDTO> strOrderDto = list.stream().map(ord -> new OrderDTO(ord));
		
		return strOrderDto.collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO orderDto){ 
		Order order = new Order(0, orderDto.getAddress(), orderDto.getLatitude(), orderDto.getLongitude(), 
				Instant.now(), OrderStatus.PENDING);
		
		//Faz o relacionamento entre a ordem e os produtos		
		for(ProductDTO prodDto : orderDto.getProducts()) {
			Product prod = prodRepository.getOne(prodDto.getId()); //Obj monitorado pelo JPA
			order.getProducts().add(prod);
		}
		
		order = repository.save(order);
		
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id){ 
		Order order = repository.getOne(id);
		
		order.setStatus(OrderStatus.DELIVERED);
		
		order = repository.save(order);
		
		return new OrderDTO(order);
	}
}
