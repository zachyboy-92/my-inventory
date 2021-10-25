import ListInventory from "./components/ListInventory";
import AddInventory from "./components/AddInventory";
import UpdateInventory from "./components/UpdateInventory";
import DeleteInventory from "./components/DeleteInventory";
import ViewInventory from "./components/ViewInventory";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListInventory}></Route>
            <Route path="/inventory" component={ListInventory}></Route>
            <Route path="/add-inventory" component={AddInventory}></Route>
            <Route
              path="/update-inventory/:id"
              component={UpdateInventory}
            ></Route>
            <Route
              path="/delete-inventory/:id"
              component={DeleteInventory}
            ></Route>
            <Route path="/view-inventory/:id" component={ViewInventory}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
