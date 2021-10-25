import React, { Component } from "react";
import InventoryService from "../services/InventoryService";

var response = 0;
class ViewInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      inventory: {},
    };
  } //constructor

  componentDidMount() {
    InventoryService.getInventoryById(this.state.id)
      .then((res) => {
        this.setState({ inventory: res.data });
        response = res.data.id;
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  cancel() {
    this.props.history.push("/inventory");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">View Inventory Details</h3>
              <div className="card-body">
                {/* <form>
                  <div className="form-group">
                    <label>Inventory ID: </label>
                    <input
                      placeholder={this.state.inventory.id}
                      readOnly={true}
                      name="id"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Image: </label>
                    <input
                      placeholder={this.state.inventory.image}
                      readOnly={true}
                      name="image"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Name: </label>
                    <input
                      placeholder={this.state.inventory.name}
                      readOnly={true}
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Date: </label>
                    <input
                      placeholder={this.state.inventory.date}
                      readOnly={true}
                      name="date"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Price: </label>
                    <input
                      placeholder={this.state.inventory.price}
                      readOnly={true}
                      name="price"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Description: </label>
                    <input
                      placeholder={this.state.inventory.description}
                      readOnly={true}
                      name="description"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Inventory Quantity: </label>
                    <input
                      placeholder={this.state.inventory.quantity}
                      readOnly={true}
                      name="quantity"
                      className="form-control"
                    />
                  </div>
                  <div className="view-button__container">
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                    >
                      Cancel
                    </button>
                  </div>
                </form> */}
                <img src={this.state.inventory.image} />
                <div>
                  <h3>Name: {this.state.inventory.name}</h3>
                  <p>Date: {this.state.inventory.date}</p>
                  <p>Price: ${this.state.inventory.price}</p>
                  <p>Description: {this.state.inventory.description}</p>
                  <p>Quantity: {this.state.inventory.quantity}</p>
                </div>
                <div className="view-button__container">
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewInventory;
