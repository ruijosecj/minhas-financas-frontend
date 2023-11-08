import React from "react";

function FormGroup(props){
    return(
        <div className="form-group">
            <label className="my-3" htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}    
        </div>
    )
}

export default FormGroup