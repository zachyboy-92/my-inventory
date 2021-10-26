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
            <div className="card view-container">
              <h3 className="text-center">View Inventory Details</h3>
              <div id="view-body" className="card-body">
                <img id="view-image" src={this.state.inventory.image} />
                <div id="data-info">
                  <h4>Name: {this.state.inventory.name}</h4>
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
