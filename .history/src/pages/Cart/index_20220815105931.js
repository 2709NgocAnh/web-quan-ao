import React, { Component } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../css/Details.css';
import '../css/Cart.css';

function Cart(){
    const cx = classNames.bind(styles)
    // static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: 'center' }}>Nothings Product</h2>;
        } else {
            return (
                <>
                    {cart.map((item) => (
                        <div className={cx("details cart")} key={item._id}>
                            <img src={item.src} alt="" />
                            <div className={cx("box")}>
                                <div className={cx("row")}>
                                    <h2>{item.title}</h2>
                                    <span>${item.price * item.count}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className={cx("amount")}>
                                    <button className={cx("count")} onClick={() => reduction(item._id)}>
                                        {' '}
                                        -{' '}
                                    </button>
                                    <span>{item.count}</span>
                                    <button className={cx("count")} onClick={() => increase(item._id)}>
                                        {' '}
                                        +{' '}
                                    </button>
                                </div>
                            </div>
                            <div className={cx("delete")} onClick={() => removeProduct(item._id)}>
                                X
                            </div>
                        </div>
                    ))}
                    <div className={cx("total")}>
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            );
        }
    }
}

export default Cart;
