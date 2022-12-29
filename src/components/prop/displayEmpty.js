import "./displayEmpty.css"

export const EmptyPage=prop=>{
    return(
      <div className="empty-page">{prop.text}</div>
    )
  }