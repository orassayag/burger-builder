import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../api/api';
import * as actions from '../../store/actions/index';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import Burger from '../../components/Burger/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

export class BurgerBuilder extends Component {
    /*     constructor(props) {
            super(props);
        } */

    state = {
        purchasing: false
    };

    updatePurchaseState = (ingrediencies) => {
        const sum = Object.keys(ingrediencies)
            .map(igKey => {
                return ingrediencies[igKey];
            }).reduce((elSum, el) => {
                return elSum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({ purchasing: true });
        }
        else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.replace('/checkout');
    }

    componentDidMount() {
        this.props.onInitIngrediencies();
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = null;
        if (this.props.error) {
            burger = (<p>Ingrediencies can't be loaded!</p>);
        }
        else {
            burger = (<Spinner init={true} />);
        }

        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger ingrediencies={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price={this.props.price}
                        isAuthenticated={this.props.isAuthenticated}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler} />
                </Auxiliary>
            );

            orderSummary = (
                <OrderSummary
                    price={this.props.price}
                    ingrediencies={this.props.ings}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />
            );
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingrediencies,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingredientName) => {
            return dispatch(actions.addIngredient(ingredientName));
        },
        onIngredientRemoved: (ingredientName) => {
            return dispatch(actions.removeIngredient(ingredientName));
        },
        onInitIngrediencies: () => {
            return dispatch(actions.initIngrediencies());
        },
        onInitPurchase: () => {
            return dispatch(actions.purchaseInit());
        },
        onSetAuthRedirectPath: (path) => {
            return dispatch(actions.setAuthRedirectPath(path));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, api));