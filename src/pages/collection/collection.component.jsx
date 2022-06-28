import React from "react";
import { CollectionPageContainer, CollectionPageTitle, CollectionPageItems } from "./collections.styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector(selectCollection(collectionId))
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionPageItems>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </CollectionPageItems>
        </CollectionPageContainer>
    )
}

export default CollectionPage