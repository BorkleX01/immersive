import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class Stockists extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this)
    }

    watchImgLoaded(e){
        console.log(e.target.className)
        e.target.className = "rotate-to-placement"
        console.log(e.target.className)
    }

    componentDidMount(){
      addClassToRoot();     
    }
    
    render(){
        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
              	<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "30px", left:"0"}}>Watch.</div>
                <div id="bg" style={{ display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#fff", paddingTop:"10vh"}}>
                  <div className="stockContainer">
                    <div className="StockHeader" style={{lineHeight:"1em", textAlign:"left", fontWeight:"700", fontSize:"24pt", paddingTop:"", paddingBottom:"", color:"#000"}}>
                      Stockists
                    </div>
                    <div className="holdsTheStocks" style={{ paddingTop:"5%", paddingBottom:"5vh", color:"#000"}}>
                      	<div className="stockistBlock" style={{borderTop:"2px solid"}}>
								<p><strong>A. Lange & Söhne</strong><br/>
								Watches of Switzerland <br/>
								1300 888 091</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Apple</strong><br/>
								1300 321 456</p>
								</div>

								<div className="stockistBlock">
								<p><strong>ArtyA</strong><br/>
								Artya.com</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Bell & Ross</strong><br/>
								Lion Brands <br/>
								(03) 9572 9820</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Blancpain</strong><br/>
								Swatch Group <br/>
								(03) 8844 3300</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Bovet</strong><br/>
								bovet.com</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Breitling</strong><br/>
								02 9221 7177</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Bulgari</strong><br/>
								(02) 9233 3611 <br/>
								(03) 9663 8100</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Cartier</strong><br/>
								Richemont <br/>
								1800 888 918</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Chanel</strong><br/>
								(02) 9900 2988 <br/>
								(03) 9671 3533</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Chopard</strong><br/>
								(03) 9662 3066</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Dior</strong><br/>
								LVMH Watches and Jewellery <br/>
								1800 053 467</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Franck Muller</strong><br/>
								(02) 9230 0188 <br/>
								(03) 9650 0288</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Fossil</strong><br/>
								(02) 8520 3839</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Girard-Perregaux</strong><br/>
								Avstev Group <br/>
								(02) 9363 1088</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Hermès</strong><br/>
								(02) 9287 3200 <br/>
								(03) 9654 5571</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Hublot</strong><br/>
								LVMH Watches and Jewellery <br/>
								1800 053 467</p>
								</div>

								<div className="stockistBlock">
								<p><strong>IWC</strong><br/>
								Richemont <br/>
								1800 888 918</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Jaeger-LeCoultre</strong><br/>
								Richemont <br/>
								1800 888 918</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Jaquet Droz</strong><br/>
								Swatch Group <br/>
								(03) 8844 3300</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Longines</strong><br/>
								Swatch Group <br/>
								(03) 8844 3300</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Louis Vuitton</strong><br/>
								1300 883 880</p>
								</div>

								<div className="stockistBlock">
								<p><strong>MB&F</strong><br/>
								The Hour Glass <br/>
								(02) 9221 2288 <br/>
								(03) 9650 6988</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Montblanc</strong><br/>
								1300 364 810</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Omega</strong><br/>
								Swatch Group <br/>
								(03) 8844 3300</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Oris</strong><br/>
								(03) 95 100 200</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Panerai</strong><br/>
								Richemont <br/>
								1800 888 918</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Rado</strong><br/>
								Swatch Group <br/>
								(03) 8844 3300</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Richard Mille</strong><br/>
								The Hour Glass <br/>
								(02) 9221 2288 <br/>
								(03) 9650 6988</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Rolex</strong><br/>
								(03) 9658 0900</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Romain Jerome</strong><br/>
								Vendome <br/>
								(02) 8069 2314 </p>
								</div>

								<div className="stockistBlock">
								<p><strong>Seiko</strong><br/>
								(02) 9805 4777</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Sinn</strong><br/>
								Define Watches <br/>
								(07) 5447 464 </p>
								</div>

								<div className="stockistBlock">
								<p><strong>Tag Heuer</strong><br/>
								LVMH Watches and Jewellery <br/>
								1800 053 467</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Ulysse Nardin</strong><br/>
								Avstev <br/>
								(02) 9363 1088</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Vacheron Constantin</strong><br/>
								Richemont <br/>
								1800 888 918</p>
								</div>

								<div className="stockistBlock">
								<p><strong>Zenith</strong><br/>
								LVMH Watches and Jewellery <br/>
								1800 053 467</p>
								</div>
								<div className="stockistBlock">
								<p className="tiny-heading" style={{color:"#000", top:"initial",position:"relative"}}>Watch.</p>
								</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        )
    }
           
}
export default Stockists
const stockists = [];

const Stockist = (props) => {
    
    return(
        <div>
          <div style={{fontWeight:"700", fontSize:"0.85em"}}>{props.title}</div> 
          <div style={{fontSize: "0.75em"}}></div>
        </div>
    )
}


/*
A.Lange & Söhne
Watches of Switzerland 1300 888 091
Apple
1300 321 456
ArtyA
Artya.com
Bell & Ross
Lion Brands (03) 9572 9820
Blancpain
Swatch Group (03) 8844 3300
Bovet
bovet.com
Breitling
02 9221 7177
Bulgari
(02) 9233 3611 (03) 9663 8100
Cartier
Richemont 1800 888 918
Chanel
(02) 9900 2988 (03) 9671 3533
Chopard
(03) 9662 3066
Dior
LVMH Watches and Jewellery 1800 053 467
Franck Muller
(02) 9230 0188 (03) 9650 0288
Fossil
(02) 8520 3839
Girard-Perregaux
Avstev Group (02) 9363 1088
Hermès
(02) 9287 3200 (03) 9654 5571
Hublot
LVMH Watches and Jewellery 1800 053 467
IWC
Richemont 1800 888 918
Jaeger-LeCoultre
Richemont 1800 888 918
Jaquet Droz
Swatch Group (03) 8844 3300
Longines
Swatch Group (03) 8844 3300
Louis Vuitton
1300 883 880
MB&F
The Hour Glass (02) 9221 2288 (03) 9650 6988
Montblanc
1300 364 810
Omega
Swatch Group (03) 8844 3300
Oris
(03) 95 100 200
Panerai
Richemont 1800 888 918
Rado
Swatch Group (03) 8844 3300
Richard Mille
The Hour Glass (02) 9221 2288 (03) 9650 6988
Rolex
(03) 9658 0900
Romain Jerome
Vendome (02) 8069 2314
Seiko
(02) 9805 4777
Sinn
Define Watches (07) 5447 464
Tag Heuer
LVMH Watches and Jewellery 1800 053 467
Ulysse Nardin
Avstev (02) 9363 1088
Vacheron Constantin
Richemont 1800 888 918
Zenith
LVMH Watches and Jewellery 1800 053 467
*/
