import React from 'react';
import SkyLight  from 'react-skylight';
import {SkyLightStateless} from 'react-skylight';

const WatchModal = (props) => {
  const dialogStyles = {
    	padding: '4%',
    	color: 'black',
    	fontFamily: 'ProximaNova',
      width: '30%',
      height: 'auto',
      top: '20%',
      left: '45%',
      marginTop: '0',
      marginLeft: '-10%',
      fontWeight: '500',  
    }

return (

  <SkyLightStateless
    isVisible={props.dialogOpen}
    onCloseClicked={() => props.closeWatchModal()}
    dialogStyles={dialogStyles}
  >
    <div className={'dialog-box'}>
      <div>
        <b>{props.dialogText['title']} </b><br/>
           {props.dialogText['body']}
      </div>
      <button className={'button-dialog'} onClick={() => props.openStockistModal()} > <b>SHOP NOW</b> </button>
    </div>    
  </SkyLightStateless>
	)

}

export default WatchModal;
        