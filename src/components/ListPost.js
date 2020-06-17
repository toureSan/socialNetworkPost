import React, { useState, useEffect, useContext} from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth';
import { SocialContext} from "../context/SocialContext";
export default function ListPost (){
  
  const { postList, setPostList } = useContext(SocialContext);
 
  useEffect(_ => {
  
    axiosWithAuth().get("https://strapi-crea.5ika.org/posts")
       
        .then(res => { console.log(res.data); setPostList(res.data)  })
        .catch(err => console.log(err))
}) 

  return(

    <>
     
        <h1>hello</h1>
      {postList.map(item =>{
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.content}</h2>
            <h2>{item.user}</h2>
          </div>
        )
      })}
    
    </>
  )
}