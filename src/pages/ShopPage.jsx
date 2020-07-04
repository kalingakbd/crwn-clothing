import React, {Component} from "react";

import './styles/ShopPage.styles.scss';
import SHOP_DATA from "./data/Shop.data";
import CollectionPreview from "../components/CollectionPreview";

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            collections
                .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview id={id} {...otherCollectionProps}/>
                ))
        )
    }
}

export default ShopPage;

