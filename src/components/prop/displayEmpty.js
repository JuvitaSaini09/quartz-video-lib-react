import "./displayEmpty.css"

export const EmptyPage=prop=>{
    return(
      <span class="empty-page">{prop.text}</span>
    )
  }