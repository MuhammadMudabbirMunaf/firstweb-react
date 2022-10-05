import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

function Post(props) {
  return(
    <div className="post"> 
    
    <div className="postHeader">
      <img className="postPics" src={props.profilePhoto} alt="profile pic"/>
    
      <div>  
        {props.name} <br/>
        {props.postDate}
      </div>
    </div>

    {props.postText}
    {props.postImage}
    
    <FontAwesomeIcon icon={faThumbsUp} />
    <FontAwesomeIcon icon={faComment} />
    <FontAwesomeIcon icon={faShare} />
    
    </div>
  )
}

ReactDOM.render(
  <>
<Post name="Mudabbir Munaf" profilePhoto="https://832431.smushcdn.com/1688923/wp-content/uploads/2022/06/Melbourne-Branding-Photography_professional_headshots-Huss-52-3-web.jpg?lossy=1&strip=1&webp=1" postDate="14 Aug 2022"/> 
<Post name="Ali Baloch" profilePhoto="https://images.squarespace-cdn.com/content/v1/5521b031e4b06ebe90178744/1560360135937-3YXVZ3124L1YL2FOASSQ/headshots-linkedin-photographer.jpg?format=1000w" postDate="14 Aug 2022"/> 
<Post name="Zahid" profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KJBSqkkxcDLLF1KJv4smptrlNmESFpjktYoT16Z-Z9-XSmepQ3Dik-N98yXZBX17H5s&usqp=CAU" postDate="14 Aug 2022"/> 
<Post name="Haris" profilePhoto="https://i.pinimg.com/originals/6d/b7/68/6db768dd203091a75014a40fc9d75701.jpg" postDate="14 Aug 2022"/> 
</>
, document.querySelector("#root"));