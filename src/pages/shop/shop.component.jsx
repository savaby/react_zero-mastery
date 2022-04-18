import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component.jsx";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component.jsx";
import { createStructuredSelector } from "reselect";
import { selectIsCollectoinFetching, selectIscollectionsLoaded } from "../../redux/shop/shop.selectors.js";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions.js";

import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const { match, isCollectionFething, isCollectionsLoaded } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFething} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFething: selectIsCollectoinFetching,
    isCollectionsLoaded: selectIscollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)