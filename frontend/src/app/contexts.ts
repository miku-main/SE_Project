import { createContext } from "react";


export const AppContext = createContext({
    post:{
        changeCurrent: ({title,description,username,steps,ingredients,likes,liked}) => {},
        current:{
            username:"",
            description:"",
            title:"",
            steps:[],
            ingredients:[],
            likes:0,
            liked:false
        },
        addLike:(selectedPostId) => {},
        removeLike:(selectedPostId) => {},
        posts:[],
        updatePosts:(newPosts) => {}
    },
    user:{
        bookmark:{
            bookmarks:[],
            updateBookmarks: (newBookmark) => {
                
            },
            deleteBookmark: (selectedBookmark) => {
                
            }
        }
    }
});