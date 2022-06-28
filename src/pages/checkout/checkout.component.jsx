import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import CheckoutItem from '../../components/ckeckout-item/checkout-item.component'
import { CheckoutPageContainer, CheckoutPageHeader, CheckoutPageHeaderBlock, CheckoutPageTotal, CheckoutPageWarning } from './checkout.styles'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)

    return (
        <CheckoutPageContainer>
            <CheckoutPageHeader>
                <CheckoutPageHeaderBlock>
                    <span>Product</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Description</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Price</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Quantity</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Price</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Remove</span>
                </CheckoutPageHeaderBlock>
            </CheckoutPageHeader>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <CheckoutPageTotal>
                <span>TOTAL: ${total}</span>
            </CheckoutPageTotal>
            <CheckoutPageWarning>
                *It's not real application, no products exists
            </CheckoutPageWarning>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

export default Checkout