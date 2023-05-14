import React from "react";
import { CustomerFormComponent, SearchComponent } from "./Containers";


const SearchForm = ({ source }) => {
    return (
        <>
            <form
                method="GET"
                autoComplete="on"
                rel="search"
                action={source}
            >
                <SearchComponent />
            </form>
        </>
    )
}

const CustomerForm = ({ source }) => {
    return (
        <>
            <form
                className="w-full h-full"
                method="post"
                action={source}
                autoComplete="on"
            >
                <CustomerFormComponent/>
            </form>
        </>
    )
}

export { SearchForm, CustomerForm }