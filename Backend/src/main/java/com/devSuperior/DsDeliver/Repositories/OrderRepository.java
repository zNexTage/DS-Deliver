package com.devSuperior.DsDeliver.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devSuperior.DsDeliver.Entities.Order;

/*
 * JpaRepository fornece uma maneira de realizar ações no banco de dados. 
 * Passando a entidade e o tipo do id como paramêtro, o Jpa disponibiliza
 * as ações de inserir, consultar, atualizar e etc.
 * 
 * */

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	//JPQL
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC ")
	List<Order> findOrdersWithProducts();
}
