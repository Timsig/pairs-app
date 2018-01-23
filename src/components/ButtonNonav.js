import React from 'react';


const ButtonNonav = (props) => {
    return(
       <button className={props.class} type={props.type}>{props.text}</button>
    )
};

export default ButtonNonav;