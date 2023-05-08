import React from "react";

const FormInput = ({ value, type }) => {
    type = "name"
    value = "name"
    return (
        <div>
            <label htmlFor={{ value }} className=" bg-gold p-2">{value}</label>
            <input type={{ type }} id={{ value }} name={{ value }} placeholder={`Input ${value}...`} />
        </div>
    )
}

const SearchInput = () => {
    return (
        <>
            <input type="text" name="search" placeholder="Search..." />
        </>
    )
}

export { SearchInput, FormInput }