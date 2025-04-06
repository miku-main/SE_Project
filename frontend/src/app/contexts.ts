import { createContext } from "react";


export const AppContext = createContext({
    post:{
        changeCurrent: ({title,description,username,steps,ingredients}) => {},
        current:{
            username:"",
            description:"",
            title:"",
            steps:[],
            ingredients:[]
        }
    }
});