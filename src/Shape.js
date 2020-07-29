import React from 'react';

const Shape = (props) => {
    let onBlockValue = "";
    if(props.special){
        onBlockValue = props.value;
    }
    return (
    <div className={props.shape} onClick={()=>props.selectShape(props.shape)}>{ "   " + onBlockValue}</div>
    )
}

export default Shape;