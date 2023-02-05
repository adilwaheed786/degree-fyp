import React from 'react'
import "../Css/certificate_design.css"
export const Button = (props) => {
  return (
    <div>
                {/* --------buttons code start */}
                <div className="buttons">
                          
                          
                          <button type="button" class="btn btn-outline-primary">{props.name1}</button>
                          <button type="button" class="btn btn-outline-primary">{props.name2}</button>
                          </div> 
                           {/* --------buttons code end */}
    </div>
  )
}
