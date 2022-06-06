import { useEffect } from "react";
import {fetchPosts, likePost,dislikePost} from "./postsSlice";
import { postsData } from "../../redux/postData";
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
export  const usePosts = () =>{ useAppSelector( state=> state.posts.content)
     const posts = useAppSelector( state=> state.posts.content)
     const  dispatch = useAppDispatch()
     useEffect ( ()=>{
       setTimeout( ()=> {
         dispatch(fetchPosts(postsData))
       },1000)
     }, [] )
     const onLikePost = (id:number)=> {
         dispatch(likePost(id))
     }
     const onDisLikePost = (id:number)=> {
        dispatch(likePost(id))
    }
    return {
        posts,
        onLikePost,
        onDisLikePost
    }


}