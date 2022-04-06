import React from 'react'
import { withRouter } from 'react-router-dom'
import { MenuItemContainer, BackgroundImage, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles'
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage className='background-image' imageUrl={imageUrl}></BackgroundImage>
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle className='subtitle'>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem)