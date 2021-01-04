package com.devSuperior.DsDeliver.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devSuperior.DsDeliver.Entities.Order;

/*
 * JpaRepository fornece uma maneira de realizar ações no banco de dados. 
 * Passando a entidade e o tipo do id como paramêtro, o Jpa disponibiliza
 * as ações de inserir, consultar, atualizar e etc.
 * 
 * */

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}
