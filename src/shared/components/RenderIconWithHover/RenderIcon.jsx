import React from 'react'
import "./RenderIcon.scss"
const RenderIcon = ({iconUrl, link,  hoverIconUrl, defaultIcon,defaultIconHover, iconAlt,onClick = ()=>{}, ...props}) => {
  return (
      <div className="image_renderer" type={link ? "button" : ""} onClick={onClick}>
        <img src={iconUrl || defaultIcon} alt={iconAlt} {...props}/>
        {hoverIconUrl && <img src={hoverIconUrl || defaultIconHover} className="img-top" alt={iconAlt} {...props} />}
    </div>
  )
}

export default RenderIcon