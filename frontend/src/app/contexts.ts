import { createContext } from "react";


export const AppContext = createContext({
    post:{
        changeCurrent: ({title,description,username}) => {},
        current:{
            username:"",
            description:"",
            title:""
        }
    }
});