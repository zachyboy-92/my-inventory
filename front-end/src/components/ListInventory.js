import React, { Component } from "react";
import InventoryService from "../services/InventoryService";

class ListInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
    };
    this.addInventory = this.addInventory.bind(this);
    this.editInventory = this.editInventory.bind(this);
    this.deleteInventory = this.deleteInventory.bind(this);
    this.viewInventory = this.viewInventory.bind(this);
  }

  componentDidMount() {
    InventoryService.getInventories().then((res) => {
      this.setState({ inventories: res.data });
    });
  }

  addInventory() {
    this.props.history.push("/add-inventory");
  }

  editInventory(id) {
    this.props.history.push(`/update-inventory/${id}`);
  }

  deleteInventory(id) {
    this.props.history.push(`/delete-inventory/${id}`);
  }

  viewInventory(id) {
    this.props.history.push(`/view-inventory/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Inventory List</h2>
        <div>
          <button className="btn add-btn" onClick={this.addInventory}>
            Add Inventory
          </button>
        </div>
        <div>
          <p></p>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="table-row">
                <th>Inventory Id</th>
                <th>Inventory Image</th>
                <th>Inventory Name</th>
                <th>Inventory Date</th>
                <th>Inventory Price</th>
                <th>Inventory Description</th>
                <th>Inventory Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="list-body">
              {this.state.inventories.map((inventory) => (
                <tr id="list-body__row" key={inventory.id}>
                  <td className="list-items">{inventory.id}</td>
                  <td className="list-items" id="list-image">
                    <img src={inventory.image} />
                  </td>
                  <td className="list-items">{inventory.name}</td>
                  <td className="list-items">{inventory.date}</td>
                  <td className="list-items">{inventory.price}</td>
                  <td className="list-items">{inventory.description}</td>
                  <td className="list-items">{inventory.quantity}</td>
                  <td>
                    <button
                      onClick={() => this.editInventory(inventory.id)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteInventory(inventory.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewInventory(inventory.id)}
                      className="btn btn-view"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListInventory;
