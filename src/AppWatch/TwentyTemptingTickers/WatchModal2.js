import React from 'react';
import Modal from 'react-modal';

const WatchModal2 = (props) => {
  const dialogStyles = {
  	
  	content: {
  		zIndex: '150',
      backgroundColor: 'white',
      padding: '4%',
    	color: 'black',
    	fontFamily: 'ProximaNova',
      width: '30%',
      height: 'auto',
      top: '50%',
      left: '45%',
      marginTop: '-17%',
      marginLeft: '-10%',
      fontWeight: '500',
  	},
  	overlay: {
  		zIndex: '200',
  		backgroundColor:'white'
  	}
  	
    }

return (

  <Modal
    onAfterOpen={() => alert('open')}
    isOpen={props.dialogOpen}
    onRequestClose={() => props.closeWatchModal()}
    style={dialogStyles}
   
  >
    <div className={'dialog-box'}>
      <div>
        <b>{props.dialogText['title']} </b><br/>
           {props.dialogText['body']}
      </div>
      <button className={'button-dialog'} onClick={() => props.openStockistModal()} > <b>SHOP NOW</b> </button>
    </div>    
  </Modal>
	)

}

export default WatchModal2;
        