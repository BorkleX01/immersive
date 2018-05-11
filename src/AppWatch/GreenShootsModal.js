import React from 'react';
import SkyLight  from 'react-skylight';
import {SkyLightStateless} from 'react-skylight';

const GreenShootsModal = (props) => {
  const dialogStyles = {
    	padding: '20px',
    	color: 'black',
    	fontFamily: 'ProximaNova',
      top: '50px',
      left: '50%',
      left: 'calc(50% - 150px)',
      marginTop: '0',
      fontWeight: '500', 
      marginLeft: '0',
      width: "300px",
    	height: "520px",
    	textAlign: "center",
    	position: "absolute"
    }

return (

  <SkyLightStateless
  
    isVisible={props.showModal}
    onCloseClicked={() => props.closeModal()}
    dialogStyles={dialogStyles}
  >
    <div className={'dialog-box glModal'}>
      <div>
     <strong style={{textAlign:"center"}}>Seeing the light</strong>
     <br/><br/>
     <p style={{textAlign:"left", margin:"0"}}>With its pellucid presence, Bulgari’s Octo Tourbillon Sapphire takes wrist-wear to a new level. A symphony of titanium and glass, the inner workings are anchored by black carbon-coated bridges adorned with green bars of ITR2, a composite material laden with carbon nanotube particles, and SLN, a high-tech luminescent material enabling the watch to recycle at night all the light it has harvested during the day. The Octo also has a time-setting trick – pressing the crown displays a red dot at 3 o’clock signalling that the time can be set with a simple turn. Once done, another press causes the dot to vanish and locks the mechanism.</p>
      </div>
     
    </div>    
  </SkyLightStateless>
	)

}

export default GreenShootsModal;