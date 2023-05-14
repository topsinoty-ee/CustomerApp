import React from "react";

const FormInput = ({ value, type, required }) => {

    const raw_value = value;

    //removes "_"
    if ([...value].includes("_")) {value = value.replace("_", " ")}

    return (
        <div className="flex grow border-r-4 border-b-4 border-dark-blue">
            <label htmlFor={ raw_value } className=" bg-gold p-2 capitalize text-black">{value}</label>
            <input type={ type } id={ raw_value } required={required} className="px-4 grow outline-none" name={ raw_value } placeholder={`Input ${value}...`} />
        </div>
    )
}

const SearchInput = () => {
    return (
        <>
            <input type="text" name="search" placeholder="Search..." className="h-full px-2 outline-none" />
        </>
    )
}

export { SearchInput, FormInput }