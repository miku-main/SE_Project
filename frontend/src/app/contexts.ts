import { createContext } from "react";

export const AppContext = createContext({
  post: {
    changeCurrent: ({ id,title, description, username, steps, ingredients, initialHeartState }) => {},
    current: {
      username: "",
      description: "",
      title: "",
      steps: [],
      ingredients: [],
      initialHeartState:false
    },
    getPostsLiked: async () => {

    },
    addPostLike: async (owner, likedBy, postId) => {

    },
    deletePostLike: async (owner,likedBy,postId) => {

    },
    postsLiked: null,
    updatePostsLiked:(data) => {

    }
  },
});
