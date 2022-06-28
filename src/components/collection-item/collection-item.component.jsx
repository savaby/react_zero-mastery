import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


import { CollectionItemContainer, CollectionItemImageContainer, CollectionItemFooterContainer, AddButton, NameContainer, PriceContainer } from './collection-item.styles'

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()
    const addItemHandler = item => dispatch(addItem(item))
    return (
        <CollectionItemContainer>
            <CollectionItemImageContainer className='image' imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionItemFooterContainer>
            <AddButton inverted onClick={() => addItemHandler(item)}> Add to cart </AddButton>
        </CollectionItemContainer>
    )
}
export default CollectionItem