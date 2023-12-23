import React from "react";
import '../styles/Button.css'
// const buttonstyle = styled.Button`
// `
const Button = ({type, variant, className, id, onclick}) => {
        return <button type={type ? type : "button"} 
        variant={variant} className={className ? `btn-component ${className}` : "btn-component"} 
        id={id} onclick={onclick}>En savoir plus</button>
}

export default Button 