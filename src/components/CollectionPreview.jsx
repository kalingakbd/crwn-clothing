import React, {Component} from "react";

import './styles/CollectionPreview.styles.scss';
import CollectionItem from "./CollectionItem";

class CollectionPreview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            title,
            items
        } = this.props;
        return (
            <div className='collection-preview'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                    {
                        items.filter((eachItem, idx) => (idx < 4))
                            .map(({id, ...eachItemProps}) => (
                                <CollectionItem key={id} {...eachItemProps} />
                            ))
                    }
                </div>
            </div>
        )
    }
}

export default CollectionPreview;

