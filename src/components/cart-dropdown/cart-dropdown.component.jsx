import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems ? cartItems.map((cartItem) => {
                        return (<CartItem key={cartItem.id} cartItem={cartItem} />)
                    }) : <span>No Items In cart</span>
                }
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown;