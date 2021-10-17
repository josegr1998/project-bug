import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  ProductsPage,
  SingleProductPage,
  AboutPage,
  CartPage,
  ErrorPage,
  CheckoutPage,
  PrivateRoute,
} from "./pages/index";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route
            exact
            path='/products/:id'
            children={<SingleProductPage />}
          ></Route>
          <Route exact path='/checkout'>
            <CheckoutPage />
          </Route>
          <Route exact path='/*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
