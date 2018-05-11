import React from 'react';
import {serverString} from '../../serverInfo.js';
import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import SkyLight from 'react-skylight';
import Lightbox from 'react-image-lightbox';
import WatchModal from  './WatchModal.js';
import WatchModal2 from './WatchModal2.js';
import StockistModal from './StockistModal';
import { watches }from './watchContent';
import { ImageButton } from './Buttons.js';
import { addClassToRoot } from '.././addClassToRoot.js';


class TwentyTemptingTickers extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    imageOpen: false,
	    currentImage: '',
	    dialogOpen: false,
	    stockistOpen: false,
	    dialogText: '',
	    stockist: '',
	}

	const locationString = `${serverString}/temp-alex/watches/`
        

        this.text = watches;

        this.stockists = {
	    watch1: {title:`Chopard`, details:`(03) 9662 3066`},
    	    watch2: {title:`Dior`, details: `LVMH Watches and Jewellery`, details2:`1800 053 467`},
    	    watch3: {title:`Breitling`, details:`02 9221 7177`},
    	    watch4: {title:`Bovet`, details:`bovet.com`},
    	    watch5: {title:`IWC`, details: `Richemont 1800 888 918`},
    	    watch6: {title:`Jaeger-LeCoultre`, details: `Richemont 1800 888 918`},
    	    watch7: {title:`Seiko `, details:`(02) 9805 4777`},
    	    watch8: {title:`Jaquet Droz`, details:`Swatch Group (03) 8844 3300`},
    	    watch9: {title:`Montblanc`, details: `1300 364 810`},
    	    watch10: {title:`Richard Mille`, details:`The Hour Glass`, details2: `(02) 9221 2288 (03) 9650 6988`},
    	    watch11: {title:`Vacheron Constantin`, details: `Richemont 1800 888 918`},
            watch13: {title:`Panerai`, details:`Richemont 1800 888 918`},
            watch14: {title:`Longines`, details: `Swatch Group (03) 8844 3300`},
            watch15: {title:`Louis Vuitton`, details: `1300 883 880`},
            watch16: {title:`Tag Heuer `, details: `LVMH Watches and Jewellery`, details2: `1800 053 467`},
            watch18: {title:`Bell & Ross`, details: `Lion Brands (03) 9572 9820`},
            watch19: {title:`MB&F`, details: `The Hour Glass`, details2:`(02) 9221 2288 (03) 9650 6988`},
            watch20: {title:`Omega`, details:`Swatch Group (03) 8844 3300`},
            watch22: {title: `Romain Jerome`, details: `Vendome (02) 8069 2314`},
            watch21: {title: `Girard-Perregaux`, details: `(02) 9363 1088 `}
        }

        

	this.images = {
	    watch1: `${locationString}Watch-8-list-1@x2.jpg`,
	    watch2: `${locationString}Watch-8-list-2@x2.jpg`,
            watch3: `${locationString}Watch-8-list-3@x2.jpg`,
            watch4: `${locationString}Watch-8-list-4@x2.jpg`,
            watch5: `${locationString}Watch-8-list-5@x2.jpg`,
	    watch6: `${locationString}Watch-8-list-6@x2.jpg`,
	    watch7: `${locationString}Watch-8-list-7@x2.jpg`,
            watch8: `${locationString}Watch-8-list-8@x2.jpg`,
            watch9: `${locationString}Watch-8-list-9@x2.jpg`,
            watch10: `${locationString}Watch-8-list-10@x2.jpg`,
            watch11: `${locationString}Watch-8-list-11@x2.jpg`,
	    
            watch13: `${locationString}Watch-8-list-13@x2.jpg`,
            watch14: `${locationString}Watch-8-list-14@x2.jpg`,
            watch15: `${locationString}Watch-8-list-15@x2.jpg`,
	    watch16: `${locationString}Watch-8-list-16@x2.jpg`,
	    
            watch18: `${locationString}Watch-8-list-18@x2.jpg`,
            watch19: `${locationString}Watch-8-list-19@x2.jpg`,
            watch20: `${locationString}Watch-8-list-20@x2.jpg`,

            watch21: `${locationString}Watch-8-list-014@x2.jpg`,
            watch22: `${locationString}Watch-8-list-017@x2.jpg`
	}
        
	this.handleImageClick = this.handleImageClick.bind(this);
	this.handleButtonClick = this.handleButtonClick.bind(this);
	this.closeWatchModal = this.closeWatchModal.bind(this);
	this.openStockistModal = this.openStockistModal.bind(this);
	this.closeStockistModal = this.closeStockistModal.bind(this);

    }

    handleImageClick(i) {
        this.setState({imageOpen: true, currentImage: i})   
    }

    handleButtonClick(text, stockist) {
  	this.setState({dialogOpen:true, dialogText:text})
  	this.setState({stockist:stockist})
    }

    closeWatchModal() {
  	this.setState({dialogOpen: false});
    }

    openStockistModal () {
  	this.setState({dialogOpen: false});
  	this.setState({stockistOpen: true});
  	let element = document.getElementById('root')
  	element.classList.add("noScroll");
    }

    closeStockistModal() {
  	this.setState({stockistOpen: false});
  	let element = document.getElementById('root')
  	element.classList.remove("noScroll");
    }

    componentDidMount() {
  	addClassToRoot();
    }

    render() {

	const {imageOpen, currentImage} = this.state;
	const images = this.images;
	const im = this.images;
	const text = this.text;
	const imageClick = this.handleImageClick;
	const buttonClick = this.handleButtonClick;
	const buttonClick2 = this.handleButtonClick2;
	const stockists = this.stockists;

        
	return (

	    <div className={"page subpages full-width"}>
	      <link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/css/twentytemptingtickers.css"}/>
              <div id="inner" style={{padding: '2px 2px 100px', backgroundColor:"white"}}>
                <div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "10px"}}>Watch.</div>
                <div  style={{marginTop:'19vh', marginRight: '0px', marginLeft: '0px', marginBottom:'0px'}}>
                  
	          <Grid fluid style={{padding:'0px', margin: '0px'}} > 

	            {/* top white block*/}

	            <Row className={'row'} >
		      <Col className={'column'} xs={4} sm={4} md={4} lg={5} >	   
			<div className={'button button-offset-right'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch1} data2={stockists.watch1} />
			</div>    
			<div className={'display display-left'}  onClick={() => imageClick(images.watch1)}>	
			  <div className={'image-container'}>	   
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch1} />	
			    </div>
			  </div>
                        </div>
		      </Col>

		      <Col className={'column'} xs={4}  sm={4} md={4} lg={2} > 
			<div className={'button button-offset-left-5'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch2} data2={stockists.watch2} />
			</div>
			<div className={'display display-center'}  onClick={() => imageClick(images.watch2)} > 
			  <div className={'image-container'}>	
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch2}/>
			    </div>
			  </div>
			</div>
		      </Col>

		      <Col className={'column'} xs={4} sm={4} md={4} lg={5} >
			<div className={'button button-offset-left-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch3} data2={stockists.watch3} />
			</div>
			<div className={'display display-right'} onClick={() => imageClick(images.watch3)} >
			  <div className={'image-container'}>	 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch3} />
			    </div>
			  </div>
			</div>
		      </Col>
		    </Row>

                    <Row className={'row'}> 
		      <Col className={'column black'} xs={5} sm={5} md={5} lg={5} >
			<div className={'display display-left black'} > 
			  <div className={'text-block'} >
			    <h2 style={{fontFamily:"ProximaNova", fontSize:"34px !important"}}>{`Twenty 
						              tempting
			      tickers`}</h2>
			    <span style={{fontFamily:"ProximaNova", fontSize:"14px !important"}}> Watch sales might be down on past peaks, but the standouts keep coming. Whatever your preference for case, colour, complication or cool, here are 20 newcomers that caught our eye.
			    </span>		       
			  </div>
			</div>
		      </Col>     
		      <Col className={'column'}  xs={7} sm={7} md={7} lg={7} >
			<div className={'button button-offset-left-5'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch4} data2={stockists.watch4} />
			</div>
			<div className={'display display-right-1'}  onClick={() => imageClick(images.watch4)} >
			  <div className={'image-container push-right'}>
			    <div className={'crop-1'} >
			      <img className={'image-cropped-1'} src={images.watch4} />
			    </div>
			  </div>
			</div>
		      </Col>
		    </Row>

		    <Row className={'row'} >
		      <Col className={'column'} xs={7} sm={7} md={7} lg={7} >
			<div className={'button button-offset-right-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch5} data2={stockists.watch5} />
			</div>
			<div className={'display display-left'} onClick={() =>imageClick(images.watch5)} >
			  <div className={'image-container-2 push-left'}>
			    <div className={'crop-2'} >
			      <img className={'image-cropped-2'} src={images.watch5} />
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column'} xs={5} sm={5} md={5} lg={5} >
			<div className={'button button-offset-left-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch6} data2={stockists.watch6} />
			</div>
			<div className={'display display-right'}  onClick={() =>imageClick(images.watch6)} >
			  <div className={'image-container '}>
			    <div className={'crop-2'} >
			      <img className={'image-crop-3'} src={images.watch6} />
			    </div>
			  </div>
			</div>
		      </Col>
		    </Row>
                    
                    
                    {/* middle black block*/}


	            <Row className={'row'} >
		      <Col className={'column black'} xs={4} sm={4} md={4} lg={5}  >
			<div className={'button button-offset-right button-transparent'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch7} data2={stockists.watch7} />
			</div>
			<div className={'display display-left black'}  onClick={() => imageClick(images.watch7)}>
			  <div className={'image-container'}>
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch7} />
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column black'}  xs={4} sm={4} md={4} lg={2} > 
			<div className={'button button-offset-left-5 button-transparent'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch8} data2={stockists.watch8} />
			</div>   
			<div className={'display display-center black'}  onClick={() => imageClick(images.watch8)} > 
			  <div className={'image-container'}>   
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch8}/>
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column black'} xs={4} sm={4} md={4} lg={5}  >		
			<div className={'button button-offset-left-2 button-transparent'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch9} data2={stockists.watch9} />
			</div> 			      
			<div className={'display display-right black'}   onClick={() => imageClick(images.watch9)} >
			  <div className={'image-container'}>   
			    <div className={'crop'}>  
			      <img className={'image'} src={images.watch9} />
			    </div>
			  </div>
			</div>
		      </Col>
		    </Row>

                    {/* second black row */}
                    <Row className={'row'} >
                      <Col  className={'column black'}  xs={5} sm={5} md={5} lg={5} > 
			<div className={'button button-offset-right button-transparent '}>
			  <ImageButton handleClick={buttonClick} data1={text.watch19} data2={stockists.watch19}/>
			</div>  
			<div className={'display display-left black'}  onClick={() => imageClick(images.watch19)} >  
			  <div className={'image-container'}>   
			    <div className={'crop'}>     
			      <img className={'image'} src={images.watch19}/>
			    </div>
			  </div>
			</div>
		      </Col>

		      <Col  className={'column black'}  xs={7} sm={7} md={7} lg={7} > 
			<div className={'button button-offset-left-4 button-transparent'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch11} data2={stockists.watch11} />
			</div> 
			<div className={'display display-right black'}  onClick={() => imageClick(images.watch11)} >  
			  <div className={'image-container push-right'}>  
			    <div className={'crop'}>     
			      <img className={'image push-right'} src={images.watch11}/>
			    </div>
			  </div>
			</div>
		      </Col>
                    </Row>
		    
                    {/* new bottom black ro */}
                    
	            <Row className={'row'} >
		      <Col className={'column black'} xs={7} sm={7} md={7} lg={7}  >
			<div className={'button button-offset-right-2 button-transparent'}>
			  <ImageButton handleClick={buttonClick}  data1={text.watch10} data2={stockists.watch10} />
			</div>
			<div className={'display display-left  black'}  onClick={() => imageClick(images.watch10)}>
			  <div className={'image-container push-left'}>  
			    <div className={'crop'}>    
			      <img className={'image push-left'} src={images.watch10} />
                            </div>
			  </div>
			</div>
		      </Col>

                      <Col className={'column black'} xs={5} sm={5} md={5} lg={5}  >
			<div className={'button button-offset-left-2 button-transparent'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch13} data2={stockists.watch13} />
			</div>
			<div className={'display display-right black'}   onClick={() => imageClick(images.watch13)} >
			  <div className={'image-container '}> 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch13} />
			    </div>
			  </div>
			</div>
		      </Col>
		    </Row>


                    {/* bottom white block*/}
                    <Row className={'row'} >
		      <Col className={'column'} xs={5} sm={5} md={5} lg={5}  >
			<div className={'button button-offset-right '}>
			  <ImageButton handleClick={buttonClick} data1={text.watch14} data2={stockists.watch14} />
			</div>
			<div className={'display display-left'}  onClick={() => imageClick(images.watch14)}>
			  <div className={'image-container'}> 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch14} />
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column'}  xs={7} sm={7} md={7} lg={7} > 
			<div className={'button button-offset-left-1'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch20} data2={stockists.watch20} />
			</div>  
			<div className={'display display-right'}  onClick={() => imageClick(images.watch20)} >  
			  <div className={'image-container push-right'}>  
			    <div className={'crop'}>  
			      <img className={'image'} src={images.watch20}/>
			    </div>
			  </div>
			</div>
		      </Col>
		      
		    </Row>

		    <Row className={'row'} >
		      <Col className={'column'} xs={7} sm={7} md={7} lg={7}  >
			<div className={'button button-offset-right-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch21} data2={stockists.watch21} />
			</div>
			<div className={'display display-left'}  onClick={() => imageClick(images.watch21)}>
			  <div className={'image-container push-left'}> 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch21} />
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column'}  xs={5} sm={5} md={5} lg={5} > 
			<div className={'button button-offset-left-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch22} data2={stockists.watch22} />
			</div>  
			<div className={'display display-right'}  onClick={() => imageClick(images.watch22)} >  
			  <div className={'image-container'}>  
			    <div className={'crop'}>  
			      <img className={'image'} src={images.watch22}/>
			    </div>
			  </div>
			</div>
		      </Col>
		      
		    </Row>


                    <Row className={'row'} >
		      <Col className={'column'} xs={4} sm={4} md={4} lg={5} >
			<div className={'button button-offset-right'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch18} data2={stockists.watch18} />
			</div>
			<div className={'display display-left'}  onClick={() => imageClick(images.watch18)}>
			  <div className={'image-container'}> 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch18} />
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column'} xs={4} sm={4} md={4} lg={2}  >
			<div className={'button button-offset-left-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch16} data2={stockists.watch16} />
			</div>
			<div className={'display display-center'}   onClick={() => imageClick(images.watch16)} >
			  <div className={'image-container'}> 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch16} />
			    </div>
			  </div>
			</div>
		      </Col>
		      <Col className={'column'} xs={4} sm={4} md={4} lg={5}  >
			<div className={'button button-offset-left-2'}>
			  <ImageButton handleClick={buttonClick} data1={text.watch15} data2={stockists.watch15} />
			</div>
			<div className={'display display-right'}   onClick={() => imageClick(images.watch15)} >
			  <div className={'image-container'}> 
			    <div className={'crop'}>
			      <img className={'image'} src={images.watch15} />
			    </div>
			  </div>
			</div>
		      </Col>
		    </Row>

		  </Grid>
		</div>
		
	      </div>
              <div className="tiny-heading watch-bottom watch-black" style={{transform: "translateY(-100px)", bottom:"70px"}}>Watch.</div>

              {imageOpen &&
                  <Lightbox
                        mainSrc={this.state.currentImage}
                        onCloseRequest={() => this.setState({ imageOpen: false })}
                        />
                    }
                    

                    
                    <WatchModal dialogText={this.state.dialogText} dialogOpen={this.state.dialogOpen} 
                                openStockistModal={this.openStockistModal} closeWatchModal={this.closeWatchModal} />
                    <StockistModal stockist={this.state.stockist} stockistOpen={this.state.stockistOpen} closeWatchModal={this.closeWatchModal} closeStockistModal={this.closeStockistModal} />
                    
                    
                    
            </div>        
	)
    }
}

export default TwentyTemptingTickers;
