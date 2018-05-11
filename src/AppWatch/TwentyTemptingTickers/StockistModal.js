import React from 'react';
import SkyLight from 'react-skylight';
import {Skylight, SkyLightStateless}  from 'react-skylight';
// import SkyLightStateless from 'react-skylight';

import ScrollableAnchor from 'react-scrollable-anchor';
import { goToAnchor } from 'react-scrollable-anchor';

const StockistModal = (props) => {
  const dialogStyles = {
        padding: '4%',
        color: 'black',
        fontFamily: 'ProximaNova',
      width: '35%',
      height: '450px',
      top: '50%',
      left: '45%',
      marginTop: '-17%',
      marginLeft: '-10%',
      fontWeight: '500'  
      
    }

  const closeButtonStyle = {
    right: '20px',
    top: '10px',
    fontSize: '2.2em'

  }


return (

  <SkyLightStateless
   
    afterOpen={() => alert('clicked')}
    isVisible={props.stockistOpen}
    onCloseClicked={() => props.closeStockistModal({dialogOpen: false})}
    dialogStyles={dialogStyles}
    closeButtonStyle={closeButtonStyle}
  >
  
  
    <div className={'dialog-box'} style={{overflow:'auto', marginTop:'30px', marginBottom:'30px'}} >
    <div style={{height:'300px'}}>

    <div style={{borderBottom: '1px solid black', height: 'auto'}}>

    <b>THIS WATCH </b><br/>
    <b> {props.stockist.title} </b><br/>
    {props.stockist.details} <br/>
    {props.stockist.details2}<br/><br/>

    </div> 
    <br/>

    <b>ALL STOCKISTS</b><br/>
    <b>A. Lange & Söhne</b><br/>
    Watches of Switzerland <br/>
    1300 888 091
    <br/><br/>
    <b>Apple</b><br/>
    1300 321 456
    <br/><br/>
    <b>ArtyA</b><br/>
    Artya.com
    <br/><br/>
    <b>Bell & Ross</b><br/>
    Lion Brands <br/>
    (03) 9572 9820
    <br/><br/>
    <b>Blancpain</b><br/>
    Swatch Group <br/>
    (03) 8844 3300
    <br/><br/>
    <b>Bovet</b><br/>
    bovet.com
    <br/><br/>
    <b>Breitling</b><br/>
    02 9221 7177
    <br/><br/>
    <b>Bulgari</b><br/>
    (02) 9233 3611 <br/>
    (03) 9663 8100
    <br/><br/>
    <b>Cartier</b><br/>
    Richemont 
    1800 888 918
    <br/><br/>
    <b>Chanel</b><br/>
    (02) 9900 2988 <br/>
    (03) 9671 3533
    <br/><br/>
    <b>Chopard</b><br/>
    (03) 9662 3066 
    <br/><br/>
    <b>Dior</b><br/>
    LVMH Watches and Jewellery <br/>
    1800 053 467
    <br/><br/>
    <b>Franck Muller</b><br/>
    (02) 9230 0188 <br/>
    (03) 9650 0288
    <br/><br/>
    <b>Fossil</b><br/>
    (02) 8520 3839
    <br/><br/>
    <b>Girard-Perregaux</b><br/>
    Avstev Group <br/>
    (02) 9363 1088 
    <br/><br/>
    <b>Hermès</b><br/>
    (02) 9287 3200 <br/>
    (03) 9654 5571
    <br/><br/>
    <b>Hublot</b><br/>
    LVMH Watches and Jewellery <br/>
    1800 053 467
    <br/><br/>
    <b>IWC</b><br/>
    Richemont 
    1800 888 918
    <br/><br/>
    <b>Jaeger-LeCoultre</b><br/>
    Richemont 
    1800 888 918
    <br/><br/>
    <b>Jaquet Droz</b><br/>
    Swatch Group <br/>
    (03) 8844 3300
    <br/><br/>
    <b>Longines</b><br/>
    Swatch Group <br/>
    (03) 8844 3300
    <br/><br/>
    <b>Louis Vuitton</b><br/>
    1300 883 880
    <br/><br/>
    <b>MB&F</b><br/>
    The Hour Glass <br/>
    (02) 9221 2288 <br/>
    (03) 9650 6988
    <br/><br/>
    <b>Montblanc</b><br/>
    1300 364 810
    <br/><br/>
    <b>Omega</b><br/>
    Swatch Group <br/>
    (03) 8844 3300
    <br/><br/>
    <b>Oris</b><br/>
    (03) 95 100 200
    <br/><br/>
    <b>Panerai</b><br/>
    Richemont 
    1800 888 918
    <br/><br/>
    <b>Rado</b><br/>
    Swatch Group <br/>
    (03) 8844 3300
    <br/><br/>
    <b>Richard Mille</b><br/>
    The Hour Glass <br/>
    (02) 9221 2288 <br/>
    (03) 9650 6988
    <br/><br/>
    <b>Rolex</b><br/>
    (03) 9658 0900
    <br/><br/>
    <b>Romain Jerome</b><br/>
    Vendome <br/>
    (02) 8069 2314 
    <br/><br/>
    <b>Seiko</b><br/>
    (02) 9805 4777
    <br/><br/>
    <b>Sinn</b><br/>
    Define Watches <br/>
    (07) 5447 464 
    <br/><br/>
    <b>Tag Heuer</b><br/>
    LVMH Watches and Jewellery <br/>
    1800 053 467
    <br/><br/>
    <b>Ulysse Nardin</b><br/>
    Avstev 
    (02) 9363 1088
    <br/><br/>
    <b>Vacheron Constantin</b><br/>
    Richemont <br/>
    1800 888 918
    <br/><br/>
    <b>Zenith</b><br/>
    LVMH Watches and Jewellery <br/>
    1800 053 467
</div>
</div>

</SkyLightStateless>
    )

}

export default StockistModal;
