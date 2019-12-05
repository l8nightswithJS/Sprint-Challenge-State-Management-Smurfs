import React from 'react';

const SmurfCard = props => {
    // console.log(props)
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>Age: <span>{props.age}</span></h2>
            <h2>Height: <span>{props.height}</span></h2>
        </div>
    )
};

export default SmurfCard;