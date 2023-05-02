import React from 'react'
import { NavLink } from 'react-router-dom';

const TagButton = (props) => {
 const tagButtonClickHandler =() =>{
    let tagvalue = props.value;
    props.tagClickHandler(tagvalue)
 }
  return (
    <NavLink to={"/Images"}>
    <div onClick={tagButtonClickHandler} className="h-fit w-fit px-1 hover:bg-slate-300 cursor-pointer bg-slate-200 rounded-sm mx-1">
      {props.value}
    </div>
    </NavLink>
  )
}

export default TagButton
