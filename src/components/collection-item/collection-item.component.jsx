import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'


import { CollectionItemContainer, CollectionItemImageContainer, CollectionItemFooterContainer, AddButton, NameContainer, PriceContainer } from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <CollectionItemImageContainer className='image' imageUrl={imageUrl} />
            <CollectionItemFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionItemFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}> Add to cart </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)