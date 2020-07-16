import React, { Component } from "react";

import Aux from '../../hoc/Auxiliary';
import Burger from '../../compenents/Burger/Burger';
import BuildControls from '../../compenents/Burger/BuildControls/BuildControls';
import Modal from '../../compenents/UI/Modal/Modal';
import OrderSummary from '../../compenents/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad : 0,
            cheese : 0,
            meat : 0,
            bacon : 0
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false
    } 

    updatePurchasable (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce( (sum, el) => {
                return sum + el;
            } ,0);
            this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
        this.updatePurchasable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] > 0) {
            const updatedCount = this.state.ingredients[type] - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
            this.updatePurchasable(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continued the purchase');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalCanceled={this.purchaseCancelHandler} >
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;