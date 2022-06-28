import React, { useEffect } from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container.jsx";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container.jsx";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions.js";


const ShopPage = ({ match }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollectionsStart())
    }, [dispatch])

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )

}

export default ShopPage