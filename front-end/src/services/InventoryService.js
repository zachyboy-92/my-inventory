import axios from "axios";

const INVENTORY_API_BASE_URL = "http://localhost:8081/api";
class InventoryService {
  getInventories() {
    return axios.get(INVENTORY_API_BASE_URL + "/allinventory");
  }

  createInventory(inventory) {
    return axios.post(INVENTORY_API_BASE_URL + "/addinventory", inventory);
  }

  getInventoryById(id) {
    // console.log(id);
    return axios.get(INVENTORY_API_BASE_URL + "/inventory/" + id);
  }

  getInventoryByName(name) {
    // console.log(id);
    return axios.get(INVENTORY_API_BASE_URL + "/inventory/n/" + name);
  }

  updateInventory(inventory, id) {
    return axios.put(INVENTORY_API_BASE_URL + "/inventory/" + id, inventory);
  }

  deleteInventory(id) {
    return axios.delete(INVENTORY_API_BASE_URL + "/inventory/" + id);
  }
}

export default new InventoryService();
