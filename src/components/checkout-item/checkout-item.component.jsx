import { useDispatch, useSelector } from 'react-redux';
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem))

    const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

    const addItem = () => dispatch(addItemToCart(cartItems, cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                {quantity}
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItem}>&#10005;</span>

        </div>
    )
}

export default CheckoutItem;