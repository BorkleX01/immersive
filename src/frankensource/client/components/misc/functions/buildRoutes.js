import React                                    from 'react'
import { Route }                                from "react-router-dom"
import Subpages                                 from "../../subpages"
import Custom                                   from "../../custom"

export function buildRoutes(data, acfData, path){ //data=editionArray, acfData=pageArray
        if (data.length !== 0){
            return data.map((page) => {//console.log(page.object_slug)
            	if (page.object_slug === "ad-page"){
            	    return(<Route key={page.id} exact path={`${path}/${page.object_slug}`} render={props => ( <Custom theEdition={acfData} order={page.order} base={path} {...props}/> )}/>)
	        } else  {
	            return(<Route key={page.id} exact path={`${path}/${page.object_slug}`} render={props => ( <Subpages theEdition={acfData} pageArray={data} order={page.order} base={path} {...props}/> )}/>)
	        }
            })
        }
    }
