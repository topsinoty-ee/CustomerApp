import React from "react";
import { CustomerForm, SearchForm } from "./Forms"
import { FormInput, SearchInput } from "./Input";
import { SearchIconButton, SubmitButton } from "./Button";

const SearchComponent = () => {
    return (
        <div className="h-8 flex">
            <SearchInput />
            <SearchIconButton />
        </div>
    )
}
const CustomerFormComponent = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-col place-items-start place-content-center w-full h-full">
                <div className="flex w-full float-left">
                    <FormInput value={"first_name"} type={"text "} required />
                    <FormInput value={"last_name"} type={"text"} required/>
                </div>
                <div className="flex w-full">
                    <FormInput value={"email"} type={"email"} />
                </div>
                <div className="w-full">
                    <FormInput value={"address"} type={"text"} />
                    <FormInput value={"city"} type={"text"} />
                    <FormInput value={"country"} type={"text"} />
                    <FormInput value={"postal_code"} type={"text"} />
                </div>
            </div>
            <SubmitButton/>
        </div>




    )
}







const Navbar = ({SearchComponentSource}) => {
    return (
        <div className="flex min-h-[50px] place-content-between px-4 items-center max-h-[52px] bg-dark-blue content-center">
            <div>
                <span className="capitalize text-gold text-3xl">customer database</span>
            </div>
            <SearchForm source={SearchComponentSource}/>
        </div>
    )
}
const Main = () => {
    return (
        <div className="flex place-self-center place-items-center h-full">
            <div className="bg-dark-blue max-w-[70vmax] min-w-[360px] w-[720px] h-96 max-h-[70vmin] px-3 py-2 flex flex-col">
                <div>
                    <span className="capitalize text-gold text-2xl">add customer</span>
                </div>
                <div className="bg-white w-full h-full">
                    <CustomerForm />
                </div>
            </div>

        </div>
    )
}
export { Navbar, SearchComponent, Main, CustomerFormComponent }