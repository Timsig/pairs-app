import React from 'react';
import { Link } from 'react-router-dom'

const Button = (props) => {
    return(
       <Link to={props.to}> <button className="primary">{props.text}</button></Link>
    )
};

export default Button;