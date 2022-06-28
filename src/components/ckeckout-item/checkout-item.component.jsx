import React from 'react'
import { useDispatch } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'
import { ChecoutItemContainer, CheckoutItemImageContainer, CheckoutItemImage, RemoveButtonContainer, ArrowContainer, QuantityContainer, TextContainer } from './checkout-item.styles'
const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()
    const clearItemHandler = (item) => dispatch(clearItemFromCart(item))
    const addItemHandler = item => dispatch(addItem(item))
    const removeItemHandler = item => dispatch(removeItem(item))

    return (
        <ChecoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt="item" />
            </CheckoutItemImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => removeItemHandler(cartItem)}>&#10094;</ArrowContainer>
                <span>{quantity}</span>
                <ArrowContainer onClick={() => addItemHandler(cartItem)}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItemHandler(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </ChecoutItemContainer>
    )
}


export default CheckoutItem