import React from 'react';
import { Icon } from '../../atoms/Icon';
import './index.css';
function Characteristic({name,value, className}){

    return (
        <div className={`charac ${className}`}>
            <div className="wrapper-name">
                <Icon type={name}/>
                <span>{value}</span>
            </div>
            <span className="charac-name">{name}</span>
        </div>

    );


}

export { Characteristic };