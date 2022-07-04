import React from 'react'
import { useHistory } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles'
const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                        :
                        <EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}


export default CartDropdown