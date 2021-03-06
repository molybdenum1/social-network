import React from 'react';
import './MakePost.css';



export default function MakePost(props) {

  let newPostElement = React.createRef();

  let makePost = () =>{
    props.addPostAC();
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextAC(text);
  }
  
  return (
    <div>
      <div>
        <textarea 
        className="make-post-area" 
        value={ props.postData.newPostText }
        onChange={ onPostChange } 
        ref={ newPostElement }/>
      </div>
      <div>
        <input className="make-post-btn" type="button" value="Add Post" onClick={ makePost }/>
      </div>
    </div>
  )
}
