import React from 'react';



export const ImageButton = props => {
  
   return (
    <div className={'button-outer'} onClick={() => props.handleClick(props.data1, props.data2)}>
	    <div className={'button-inner'}> </div>
    </div>
  )
}



