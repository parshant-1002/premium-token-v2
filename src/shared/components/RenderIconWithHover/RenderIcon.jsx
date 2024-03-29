import React from 'react'
import "./RenderIcon.scss"
const RenderIcon = ({iconUrl, hoverIconUrl, defaultIcon,defaultIconHover, iconAlt,onClick = ()=>{}, ...props}) => {
  return (
      <div class="image_renderer" type="button" onClick={onClick}>
        <img src={iconUrl || defaultIcon} alt={iconAlt} {...props}/>
        {hoverIconUrl && <img src={hoverIconUrl || defaultIconHover} class="img-top" alt={iconAlt} {...props} />}
    </div>
  )
}

export default RenderIcon