import React, {useState} from 'react'; 
import axiosWithAuth from '../utils/axiosWithAuth';


export default function AddPostForm(){
    const [content, setContent] = useState(''); 
    const [title, setTitle] = useState('');
   
   const handleChangeTitle = e =>{
        setTitle(
            e.target.value
        )
   }
   const handleChangeContent = e => {
       setContent(
           e.target.value
       )
   }
   const handleSubmitPost = e =>{
       e.preventDefault();
       axiosWithAuth().post('https://strapi-crea.5ika.org/posts', {title, content})
       .then(
        res => {
            
              localStorage.setItem('data', JSON.stringify(res.data));
          
        })

    .catch(err =>
        console.log(err)
    )
   }

    return ( 
        <form onSubmit={handleSubmitPost}>
            <input
                field='title'
                value={title}
                onChange={handleChangeTitle}
                placeholder="Titre du poste"
            />
           <input
                field='content'
                value={content}
                onChange={handleChangeContent}
                placeholder="contenu du poste"
            />
        <button onClick={handleSubmitPost}>poster</button>
        </form>
    )
}