import React from 'react';
import Loader from './'

export default function ScreenCoverLoader(){
  const style = {
    background:"#00000057",
    position: "absolute",
    height:"100%",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex: 1202
  }
  return(
    <div className="screenCoverLoaderContainer" style={style}>
      <Loader/>
    </div>
  )
}