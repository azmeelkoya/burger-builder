import React, { Component } from 'react';

import axios from '../../../axios-orders';
import Button from '../../../compenents/UI/Button/Button';
import Spinner from '../../../compenents/UI/Spinner/Spinner';
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();

        this.setState({loading: true});
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name : 'Mel gibson',
                address : {
                    street : 'street 23',
                    zipcode : '54532',
                    country : 'America'
                },
                email : 'mel@gmail.com'
            },
            deliveryMethod : 'fast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render () {
        let form= (
            <form>
                <input className={classes.Input} type='text' name='name' placeholder='Your Name' />
                <input className={classes.Input} type='text' name='emeil' placeholder='Email' />
                <input className={classes.Input} type='text' name='street' placeholder='Street Address' />
                <input className={classes.Input} type='text' name='postalCode' placeholder='Postal Code' />
                <Button 
                    btnType='Success'
                    clicked={this.orderHandler}> Order </Button>
           </form>
        );
        if(this.state.loading) {
            form= <Spinner />;
        }
        return (
            <div className={classes.ContactData}> 
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;