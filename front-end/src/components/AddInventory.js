import React, { Component } from "react";
import InventoryService from "../services/InventoryService";

class AddInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      image: "",
      name: "",
      date: "",
      price: null,
      description: "",
      quantity: null,
    };

    this.idHandler = this.idHandler.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.dateHandler = this.dateHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.quantityHandler = this.quantityHandler.bind(this);
  } //constructor

  idHandler = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  imageHandler = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  dateHandler = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  priceHandler = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  descriptionHandler = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  quantityHandler = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  saveInventory = (e) => {
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
    InventoryService.createInventory(inventory)
      .then((res) => {
        this.props.history.push("/inventory");
      })
      .catch((err) => {
        console.log("record not saved.");
      });
  }; //closing save method

  cancel() {
    this.props.history.push("/inventory");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card">
              <h3 className="text-center">Add Inventory</h3>
              <div className="card-body">
                <form className="adding-form">
                  <div className="form-group">
                    <label>Inventory ID: </label>
                    <input
                      placeholder="Id"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      onChange={this.idHandler}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Image: </label>
                    <input
                      placeholder="Image"
                      name="image"
                      className="form-control"
                      value={this.state.image}
                      onChange={this.imageHandler}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.nameHandler}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Date: </label>
                    <input
                      placeholder="Date"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.dateHandler}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Price: </label>
                    <input
                      placeholder="Price"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.priceHandler}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Description: </label>
                    <input
                      placeholder="Description"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.descriptionHandler}
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Quantity: </label>
                    <input
                      placeholder="Quantity"
                      name="quantity"
                      className="form-control"
                      value={this.state.quantity}
                      onChange={this.quantityHandler}
                      type="text"
                    />
                  </div>
                  <div className="button-container">
                    <button
                      className="btn btn-success"
                      onClick={this.saveInventory}
                    >
                      {" "}
                      Save{" "}
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

export default AddInventory;
