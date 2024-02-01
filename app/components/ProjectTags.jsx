
import React from 'react'

const ProjectTags = ({name, onClick, isSelected}) => {
 const buttonStyles = isSelected ? "text-white border-purple-500" : "text[#adb7be] border-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer font-bold`} onClick={() => onClick(name)}>{name}</button>
  )
}

export default ProjectTags