import React from 'react';
import { Icon } from '../Icon';

function SortIcon({sort}){

    return (

        <Icon 
            onClick={sort}
            className="sort" 
            type="sortName"
        />

    );

}

export { SortIcon };