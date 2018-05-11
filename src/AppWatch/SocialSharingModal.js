import React from 'react';
import SkyLight  from 'react-skylight';
import {SkyLightStateless} from 'react-skylight';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const SocialSharingModal = (props) => {

const dialogStyles  ={ 
      color: 'black',
      fontFamily: 'ProximaNova',
      width: '300px',
      height: '300px',
      top: '40px',
      top: 'calc((100% - 300px) / 2)',
      left: '40%',
      left: 'calc((100% - 300px) / 2)',
      marginLeft: '',
      marginTop: '0',
      fontWeight: '500', 
      textAlign:'center',
      backgroundColor: '#fff',
      padding: '0',
      display: 'table'
    }

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

const {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;

const shareUrl = window.location.protocol + "//" + window.location.host + props.url;

const titles = {
  '/watch/home': 'Watch Summer 2017',
  '/watch/jaeger': 'Jaeger-LeCoultre',
  '/watch/editors-letter': "Editor's letter",
  '/watch/contents': 'Contents',
  '/watch/green-shoots': 'Green shoots',
  '/watch/what-about-smart-watches': 'Smart watches',
  '/watch/high-end-on-a-high': 'High end on a high',
  '/watch/richemont-royalty-ramps-up-on-retail': 'Richemont royalty',
  '/watch/twenty-tempting-tickers': 'Twenty tempting tickers',
  '/watch/ahead-of-the-curve': 'Ahead of the curve',
  '/watch/dressing-the-wrist': 'Dressing the wrist',
  '/watch/vintage-allure': 'Vintage allure',
  '/watch/heritage-listed': 'Heritage listed',
  '/watch/what-to-bet-on': 'What to bet on',
  '/watch/inside-story': 'Inside story',
  '/watch/time-to-get-personal': 'Time to get personal',
  '/watch/youre-not-going-out-like-that': "You're not going out like that",
  '/watch/stockists': "Stockists",
  '/watch/teaser': 'Teaser'
}

const quotes = {
  '/watch/home': 'Watch Summer 2017 from The Australian Financial Review Magazine',
  '/watch/jaeger': 'I am both, #I am Reverso, by Jaeger-LeCoultre',
  '/watch/editors-letter': 'Just in time for Christmas it seems things are looking up a tick in the watch industry',
  '/watch/contents': 'Contents',
  '/watch/green-shoots': 'After two years of pain things are looking up in the watch world with evidence we’re spending more on watches than we used to',
  '/watch/what-about-smart-watches': 'Louis Vuitton is the latest famed name to enter the connected watch fray',
  '/watch/high-end-on-a-high': 'We talk to the founder of Watches of Switzerland, who has been at the coalface of watch retailing for 20 years',
  '/watch/richemont-royalty-ramps-up-on-retail': 'From December, enthusiasts can enjoy a shorter trip than Singapore to secure one of the limited edition pieces Panerai and IWC reserve for their boutiques',
  '/watch/twenty-tempting-tickers': 'Watch sales might be down on past peaks, but the standouts keep coming',
  '/watch/ahead-of-the-curve': 'Most vintage watches look just that, vintage. But the design of Cartier’s Tank has kept it relevant for a century',
  '/watch/dressing-the-wrist': 'Dressing the wrist, photographs by Anna Pogossova',
  '/watch/vintage-allure': 'Whether it’s old watches or newcomers, you’d be forgiven for thinking this is the year we discovered yesteryear',
  '/watch/heritage-listed': 'Heritage listed: This year’s crop of watches hauled from the archives',
  '/watch/what-to-bet-on': 'In general, watches can be compared to cars when it comes to future value',
  '/watch/inside-story': 'The habits of the past are giving way to unprecedented moves on movements.',
  '/watch/time-to-get-personal': 'The ability to personalise the Jaeger-LeCoultre Reverso timepiece has made it and its pivoting dial famous',
  '/watch/youre-not-going-out-like-that': "The press release for this gruesome gimmick invites one to 'imagine this bloodthirsty Raging Skull on your wrist!'",
  '/watch/stockists': "Stockists for Watch Summer 2017",
  '/watch/teaser': 'Teaser'
}

let title = titles[props.url];
let quote = quotes[props.url];

return (


  <SkyLightStateless
  
    isVisible={props.sharingModalOpen}
    onCloseClicked={() => props.closeSharingModal()}
    dialogStyles={dialogStyles}
  >  

    <div className="shareInner">

      <p align='left' ><img className="invertDivCol" style={{maxWidth:'100px', marginLeft: '-2px'}}src={props.serverString + "/temp-eugene/jaeger/WATCH-LOGO.svg"}/></p>
      <p align='left' ><b>{title}</b></p>
      <div className="shareBgDiv"><img src={props.serverString+"/temp-eugene/jaeger/SHARE-PAGE.svg"} /></div>
       
      <div className={'dialog-box'} style={{display: 'flex', flexDirection:'row', justifyContent: 'center'}} >
     
        <div style={{margin:'10px',color:"#000000"}} >
          <FacebookShareButton
            url={shareUrl}  
            className="share-button"
            quote={quote}
          >
          <FacebookIcon
            size={32}
            round={false}
          />
          </FacebookShareButton>
        </div>

        <div style={{margin:'10px'}}>
          <TwitterShareButton
            url={shareUrl}
            className="share-button"
            title={title}
          >
          <TwitterIcon
            size={32}
            round={false}/>
          </TwitterShareButton>
        </div>

        <div style={{margin:'10px'}}>
          <LinkedinShareButton
            url={shareUrl}    
            color={'black'} 
            windowWidth={750}
            windowHeight={600}
            className="share-button"
            title={title}
            description={quote}
          >
          <LinkedinIcon
              size={32}
              round={false} />
          </LinkedinShareButton>
        </div>

        <div style={{margin:'10px'}}>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            className="share-button">
          <EmailIcon
            size={32}
            round={false} />
          </EmailShareButton>
        </div>

      </div> 
       
    </div> 

  </SkyLightStateless>
	)

}

export default SocialSharingModal;