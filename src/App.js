import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './compenents/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {

  getThis = () => console.log(this)
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/Checkout' component={Checkout} />
            <Route path='/Orders' component={Orders} />
          </Switch>
        </Layout>
      </div>

    );
  }   
}

export default App;
