import React, { Component } from "react";

import Aux from '../../hoc/Aux';
import Burger from '../../compenents/Burger/Burger';
import BuildControls, {controls} from '../../compenents/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad : 0,
            cheese : 0,
            meat : 0,
            bacon : 0
        }
    } 

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;