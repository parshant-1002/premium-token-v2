import React from 'react'
import "./RenderIcon.scss"
const RenderIcon = ({ iconUrl, hoverIconUrl, defaultIcon, defaultIconHover, iconAlt }) => {
  return (
    <div class="image_renderer">
      <img src={iconUrl || defaultIcon} alt={iconAlt} />
      <img src={hoverIconUrl || defaultIconHover} class="img-top" alt={iconAlt} />
    </div>
  )
}

export default RenderIcon