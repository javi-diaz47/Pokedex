import React from 'react';
import { Icon } from '../Icon';
import { MyContext } from '../../../Context';
import { useContext } from 'react';

function SortNameIcon(){

    const {
        sortByName
    } = useContext(MyContext);

    return (

            <Icon 
                onClick={sortByName}
                className="sort" 
                type="sortName"
            />

    );

}

export { SortNameIcon };