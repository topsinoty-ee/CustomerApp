import React from "react";
import { ReactComponent as SearchButton } from "../Assets/SearchIcon.svg"

const SearchIconButton = () => {
    return (
        <>
            <button type="submit" value={"submit"}>
                <div className="w-full h-full bg-gold flex place-self-center place-content-center place-items-center p-1">
                    <SearchButton />
                </div>
            </button>
        </>
    )
}
const SubmitButton = () => {
    return (
        <>
            <button type="submit" value={"submit"} className="bg-bg-blue w-full grow h-full border-r-4 border-dark-blue text-gold font-semibold active:bg-dark-blue">Add Customer</button>
        </>
    )
}
export { SearchIconButton, SubmitButton }