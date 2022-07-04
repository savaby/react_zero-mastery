import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useSelector, useDispatch } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'
const Header = () => {

    const currentUser = useSelector(selectCurrentUser)
    const hidden = useSelector(selectCartHidden)

    const dispatch = useDispatch()
    const signOutStartHandler = () => dispatch(signOutStart())

    return (
        <HeaderContainer>
            <LogoContainer to="/" className='logo-container'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink className='option' to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink className='option' to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={signOutStartHandler}>SIGN OUT</OptionLink>
                        :
                        <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}

        </HeaderContainer>
    )
}


export default Header