package com.example.inventoryproject.repository;

import com.example.inventoryproject.model.InventoryModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<InventoryModel,Integer> {
    List<InventoryModel> findByName(String name);
}
