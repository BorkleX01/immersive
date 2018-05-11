import React 								from "react"
import {Helmet} 							from "react-helmet"

class HeadObject extends React.Component {
    constructor(props){
        super(props)
        
    }
    render () {
  	const siteURL = (window.location.protocol + "//" + window.location.hostname)
  	const baseURL = "http://specialedition.afr.com/wp-content/uploads/2017/08"
        return (
            <div className="HeadObject">
              <Helmet defaultTitle="Fairfax" titleTemplate="%s | Immersive">
            	<title itemProp="name" lang="en"></title>
		{/* mixed header items - add or remove as you see fit */}
	        <meta charset="utf-8" />
	    	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"  />
	    	<meta name="robots" content="index"/>
	    	<meta name="googlebot" content="index,follow"/>
	    	{/* Favicons */}
		<link rel="shortcut icon" href={baseURL + "/favicon.ico"} type="image/x-icon" />
		<link rel="apple-touch-icon" href={baseURL + "/apple-touch-icon.png"} />
		<link rel="apple-touch-icon" sizes="57x57" href={baseURL + "/apple-touch-icon-57x57.png"} />
		<link rel="apple-touch-icon" sizes="72x72" href={baseURL + "/apple-touch-icon-72x72.png"} />
		<link rel="apple-touch-icon" sizes="76x76" href={baseURL + "/apple-touch-icon-76x76.png"} />
		<link rel="apple-touch-icon" sizes="114x114" href={baseURL + "/apple-touch-icon-114x114.png"} />
		<link rel="apple-touch-icon" sizes="120x120" href={baseURL + "/apple-touch-icon-120x120.png"} />
		<link rel="apple-touch-icon" sizes="144x144" href={baseURL + "/apple-touch-icon-144x144.png"} />
		<link rel="apple-touch-icon" sizes="152x152" href={baseURL + "/apple-touch-icon-152x152.png"} />
		<link rel="apple-touch-icon" sizes="180x180" href={baseURL + "/apple-touch-icon-180x180.png"} />
		
		{/* ios meta */}
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

	    	{/* Font related - add typekit and/or google fonts here */}
		{this.props.style === "horizontal" ? <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />:null}
                

		{/* Prefetch ? */}
		<link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
		<link rel="dns-prefetch" href="//ajax.googleapis.com" />
		<link rel="dns-prefetch" href="//s.w.org" />
		
		{/* this is used for API related inserts*/}
		<link rel="https://api.w.org/" href={siteURL + "/wp-json/"} />
		<link rel="canonical" href={siteURL} />
		<link rel="alternate" type="application/json+oembed" href={siteURL + "/wp-json/oembed/1.0/embed?url=" + window.location.href} />
		<link rel="alternate" type="text/xml+oembed" href={siteURL + "/wp-json/oembed/1.0/embed?url=" + window.location.href + ";format=xml"} />
		
		{/* open graph info*/}
		<meta property="og:type" content="website"/>
		<meta property="og:site_name" content="IBM"/> {/* change this */}
		<meta property="og:url" content={siteURL}/>
                {this.props.style === "vertical" ? <link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/css/bootstrap.css"}/>:null}
                {this.props.style === "horizontal" ? <link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/css/horizontal.css"}/>:<link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/css/vertical.css"}/>}
                
                  
                

                
              </Helmet>
            </div>
        );
    }
};

export default HeadObject;
