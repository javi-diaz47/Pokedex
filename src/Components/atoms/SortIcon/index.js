import React from 'react';
import { Icon } from '../Icon';

function SortIcon({sort, type}){

    return (

        <Icon 
            onClick={sort}
            className="sort" 
            type={type}
        />

    );

}

export { SortIcon };