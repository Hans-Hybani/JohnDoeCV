import React from "react";
import '../styles/Button.css'
// const buttonstyle = styled.Button`
// `
const Button = ({type, variant, className, id, onClick}) => {
        return <button type={type ? type : "button"} 
        variant={variant} className={className ? `btn-component ${className}` : "btn-component"} 
        id={id} onClick={onClick}>En savoir plus</button>
}

export default Button 