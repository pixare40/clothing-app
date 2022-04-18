import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const goToCheckoutHandle = () => {
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems ? cartItems.map((cartItem) => {
                        return (<CartItem key={cartItem.id} cartItem={cartItem} />)
                    }) : <span>No Items In cart</span>
                }
            </div>
            <Button type='inverted' onClick={goToCheckoutHandle}>
                Checkout
            </Button>
        </div>
    )
}

export default CartDropdown;