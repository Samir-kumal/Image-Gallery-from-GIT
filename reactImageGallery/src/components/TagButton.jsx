import React from 'react'
import { NavLink } from 'react-router-dom';

const TagButton = (props) => {
    let  tagvalue = props.value;
    

 const tagButtonClickHandler =() =>{
    props.tagClickHandler(tagvalue)
 }
 const checkRedundantValueHandler = (tagValue)=>{
    if (tagValue) {
        
    }
 }
  return (
    // <NavLink to={"/Images"}>
    <div onClick={tagButtonClickHandler} className="h-fit w-fit px-1 bg-black/10 hover:bg-black/20 cursor-pointer bg-slate-200 rounded-sm mx-1">
      {props.value}
    </div>
    // </NavLink>
  )
}

export default TagButton
