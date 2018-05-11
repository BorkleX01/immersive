import React from 'react';
import SkyLight  from 'react-skylight';
import {SkyLightStateless} from 'react-skylight';
import {serverString} from '../serverInfo.js';

const EditorsLetterModal = (props) => {
    const dialogStyles = {
    	padding: '0%',
    	color: 'black',
    	fontFamily: 'ProximaNova',
      width: '100%',
      height: '100%',
      marginTop: '0',
      marginLeft: '0',
      width: '100%',
      top: '0%',
      left: '0%'
    }

return (

  <SkyLightStateless
  
    isVisible={props.showModal}
    onCloseClicked={() => props.closeModal()}
    dialogStyles={dialogStyles}
  >
    <div className='dialog-box globalCelTimeContainer' style={{display: 'flex', flexDirection: 'row'}}>

    <div className="celTimeDesktopContainer">
    <div className="celDeskSplit40">
         <img src={ `${serverString}/temp-alex/watches/Watch-2-2@x2.jpg` } />
      </div>
      <div className="celDeskSplit60">
        <div className="borderBottomCel">
        <h2>From the Cover</h2>
        </div>
        <h1><b> Celebration Time</b></h1>
      
				<p> A dozen years since its launch, Hublot’s Big Bang continues its run with a little assistance from Usain Bolt. The Sapphire Chronograph Unico Limited Edition named in his honour brings to the wrist the kind of package loved in this Instagram age by manufacturers and marketers. </p>
				<p> Consider the trifecta: celebrity appeal, collectability and a good cause. Just nine will be produced, the 45-mm diameter case hewn from polished transparent sapphire for eight of them, gold-tinted sapphire for the ninth. </p>
				<p> The cogwork peeking through the glass is Hublot’s 330-part in-house fly-back chronograph creation, and the cause? Bolt’s foundation, which supports disadvantaged children, will benefit from proceeds.</p>
				<p> As to the cosmetic detail, the seconds hand is shaped like lightning, a reference to Bolt’s nickname, while the crown and push buttons are in gold - “the colour of victory.”</p>
				<p> A pair of signed Puma spikes of the type worn by Bolt during his Olympic Games sprint in 2016 is included in the package, yours for $88,100.</p>
				<p> Just don’t bet on them doing for you what they did for him. </p>

      </div>
    </div>

    <div className="celTimeTabletContainer">
      <div className="celTabletSplitTop">
        <div className="borderBottomCel">
        <h2>From the Cover</h2>
        </div>

        <h1><b> Celebration Time</b></h1>
        </div>
      <div className="celTabletSplitMid">
          <img className="heroTabCelImg" src={ `${serverString}/temp-alex/watches/Watch-2-2@x2.jpg` }   /> 
      </div>
      <div className="celTabletSplitBot">
            
        <p> A dozen years since its launch, Hublot’s Big Bang continues its run with a little assistance from Usain Bolt. The Sapphire Chronograph Unico Limited Edition named in his honour brings to the wrist the kind of package loved in this Instagram age by manufacturers and marketers. </p>
        <p> Consider the trifecta: celebrity appeal, collectability and a good cause. Just nine will be produced, the 45-mm diameter case hewn from polished transparent sapphire for eight of them, gold-tinted sapphire for the ninth. </p>
        <p> The cogwork peeking through the glass is Hublot’s 330-part in-house fly-back chronograph creation, and the cause? Bolt’s foundation, which supports disadvantaged children, will benefit from proceeds.</p>
        <p> As to the cosmetic detail, the seconds hand is shaped like lightning, a reference to Bolt’s nickname, while the crown and push buttons are in gold - “the colour of victory.”</p>
        <p> A pair of signed Puma spikes of the type worn by Bolt during his Olympic Games sprint in 2016 is included in the package, yours for $88,100.</p>
        <p> Just don’t bet on them doing for you what they did for him. </p>
      </div>
    </div>

<div className="celTimeMobileContainer">
      <div className="celMobSplitTop">
      <div className="borderBottomCel">
        <h3>From the Cover</h3>
        </div>
        <h2>Celebration Time</h2>
      </div>
       <div className="celMobSplitMid">
            <img className="heroMobCelImg" src={ `${serverString}/temp-alex/watches/Watch-2-2@x2.jpg` }   /> 
      </div>
       <div className="celMobSplitBot">
             
        <p> A dozen years since its launch, Hublot’s Big Bang continues its run with a little assistance from Usain Bolt. The Sapphire Chronograph Unico Limited Edition named in his honour brings to the wrist the kind of package loved in this Instagram age by manufacturers and marketers. </p>
        <p> Consider the trifecta: celebrity appeal, collectability and a good cause. Just nine will be produced, the 45-mm diameter case hewn from polished transparent sapphire for eight of them, gold-tinted sapphire for the ninth. </p>
        <p> The cogwork peeking through the glass is Hublot’s 330-part in-house fly-back chronograph creation, and the cause? Bolt’s foundation, which supports disadvantaged children, will benefit from proceeds.</p>
        <p> As to the cosmetic detail, the seconds hand is shaped like lightning, a reference to Bolt’s nickname, while the crown and push buttons are in gold - “the colour of victory.”</p>
        <p> A pair of signed Puma spikes of the type worn by Bolt during his Olympic Games sprint in 2016 is included in the package, yours for $88,100.</p>
        <p> Just don’t bet on them doing for you what they did for him. </p>
      </div>
    </div>
    </div>    
  </SkyLightStateless>
	)

}

export default EditorsLetterModal;