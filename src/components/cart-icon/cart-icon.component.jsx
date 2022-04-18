import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const handleCartIconClicked = (event) => {
        event.stopPropagation();

        dispatch(setIsCartOpen(!isCartOpen))
    }
    return (
        <div className='cart-icon-container' onClick={handleCartIconClicked}>
            <ShoppingIcon />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;