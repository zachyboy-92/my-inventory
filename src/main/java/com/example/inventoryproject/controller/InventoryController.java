package com.example.inventoryproject.controller;


import com.example.inventoryproject.model.InventoryModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.inventoryproject.repository.InventoryRepository;
import com.example.inventoryproject.exception.ResourceNotFoundException;

import java.util.List;


//@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class InventoryController {
    @Autowired
    private InventoryRepository inventoryRepo;
    
    //get all inventories
    @GetMapping("/allinventory")
    public List<InventoryModel> getAllInventories()
    {

        return inventoryRepo.findAll();
    }


    @PostMapping("/addinventory")
    public InventoryModel newInventory(@RequestBody InventoryModel i)
    {

        return inventoryRepo.save(i);
    }


    @GetMapping("/inventory/{id}")
    public ResponseEntity<InventoryModel> getInventoryById(@PathVariable int id)
    {
        InventoryModel i= inventoryRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Inventory not found: " + id));
        return ResponseEntity.ok(i);
    }

    @GetMapping("/inventory/n/y{name}")
    public List<InventoryModel> getInventoryByName(@PathVariable String name)
    {
        List <InventoryModel> inventories=inventoryRepo.findByName(name);
        if(inventories.isEmpty())
        {
            System.out.println(new ResourceNotFoundException("Inventory(i) with the name "+ name +" not found"));
        }

        return inventoryRepo.findByName(name);
    }



    @PutMapping("/inventory/{id}")
    public ResponseEntity<InventoryModel> updateInventory(@PathVariable int id, @RequestBody InventoryModel inventory)
    {
        InventoryModel i= inventoryRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Inventory not found"));
        i.setImage(inventory.getImage());
        i.setName(inventory.getName());
        i.setDate(inventory.getDate());
        i.setPrice(inventory.getPrice());
        i.setDescription(inventory.getDescription());
        i.setQuantity(inventory.getQuantity());
        InventoryModel updatedInventory=inventoryRepo.save(i);
        return ResponseEntity.ok(updatedInventory);
    }



    @DeleteMapping("/inventory/{id}")
    public String deleteInventory(@PathVariable int id)
    {
        inventoryRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("inventory not found"));
        inventoryRepo.deleteById(id);
        return "The inventory item with id: "+ id +" is removed from the database.";
    }
}
