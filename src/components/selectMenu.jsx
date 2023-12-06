import React from "react";

const SelectMenu = (props) => {
    const options = props.lista.map((option, index) => {
        return(
            <option key={index} value={option.value}>{option.label}</option>
        )
    })

    return(
        <select className="form-control" {...props}>
            {options}
        </select>
    )
}

export default SelectMenu