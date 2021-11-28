import React from 'react';
import { Icon } from '../Icon';

function SearchIcon({onClick}){

    return (

        <Icon
            className="search-btn"
            type="search"
            onClick={onClick}
        />

    );

}

export { SearchIcon };