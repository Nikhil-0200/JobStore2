import { createContext, useState } from "react";

const SearchContext = createContext();



export const SearchContextProvider = (prop)=>{
    const [search, setSearch] = useState({
        searchWord: "Frontend",
    })

    const inputData = (searchWord)=>{
        setSearch({...search, searchWord:searchWord})
    }

    
    return(
        <SearchContext.Provider value={{inputData, search}}>
            {prop.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;

