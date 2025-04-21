import { createContext } from "react";


export const AppContext = createContext({
    post:{
        changeCurrent: ({id,title,description,username,steps,ingredients,likes,country,liked,followed}) => {},
        current:{
            id:0,
            username:"",
            description:"",
            title:"",
            steps:[],
            ingredients:[],
            likes:0,
            country:"",
            liked:false,
            followed:false
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
        },
        posts:{
            liked:[],
            addLikedPost: (newPost) => {

            },
            removeLikedPost: (id) => {

            }
        }
    }
});