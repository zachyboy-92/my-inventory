import React, { Component } from "react";
import InventoryService from "../services/InventoryService";

class DeleteInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      image: "",
      name: "",
      date: "",
      price: null,
      description: "",
      quantity: null,
    };

    this.deleteInventory = this.deleteInventory.bind(this);
  }

  componentDidMount() {
    InventoryService.getInventoryById(this.state.id).then((res) => {
      let inventory = res.data;
      this.setState({
        image: inventory.image,
        name: inventory.name,
        date: inventory.date,
        price: inventory.price,
        description: inventory.description,
        quantity: inventory.quantity,
      });
    });
  }

  deleteInventory = (e) => {
    e.preventDefault();
    let inventory = {
      id: this.state.id,
      image: this.state.image,
      name: this.state.name,
      date: this.state.date,
      price: this.state.price,
      description: this.state.description,
      quantity: this.state.quantity,
    };

    console.log(inventory);
    InventoryService.deleteInventory(this.state.id).then((res) => {
      this.props.history.push("/inventory");
    });
  };

  cancel() {
    this.props.history.push("/inventory");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Delete Inventory</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Inventory ID: </label>
                    <input
                      placeholder="Id"
                      readOnly="true"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      onChange={this.idHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Image: </label>
                    <input
                      placeholder="Image"
                      readOnly="true"
                      name="image"
                      className="form-control"
                      value={this.state.image}
                      onChange={this.imageHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Name: </label>
                    <input
                      placeholder="Name"
                      readOnly="true"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.nameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Date: </label>
                    <input
                      placeholder="Date"
                      readOnly="true"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.dateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Price: </label>
                    <input
                      placeholder="Price"
                      readOnly="true"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.priceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Description: </label>
                    <input
                      placeholder="Description"
                      readOnly="true"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.descriptionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Quantity: </label>
                    <input
                      placeholder="Quantity"
                      readOnly="true"
                      name="quantity"
                      className="form-control"
                      value={this.state.quantity}
                      onChange={this.quantityHandler}
                    />
                  </div>
                  <div className="button-container">
                    <button
                      className="btn btn-success"
                      onClick={this.deleteInventory}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                    >
                      {" "}
                      Cancel{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteInventory;
