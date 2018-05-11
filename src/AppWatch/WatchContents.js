import React from 'react'
import {serverString} from '../serverInfo.js'
import {editionArray, path} from '../watch-data-mock.js'
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

function buildLinkouts(menuObjects){

    // removing stuff from contents that isnt there 
    console.log("MO");
    console.log(menuObjects);

    var menuObjectsNew = [];


  // menuObjectsNew[0] = menuObjects[4];
  // menuObjectsNew[1] = menuObjects[5];
  // menuObjectsNew[2] = menuObjects[6];
  // menuObjectsNew[3] = menuObjects[7];
  // menuObjectsNew[4] = menuObjects[8];
  // menuObjectsNew[5] = menuObjects[9];
  // menuObjectsNew[6] = menuObjects[10];
  // menuObjectsNew[7] = menuObjects[11];
  // menuObjectsNew[8] = menuObjects[12];
  // menuObjectsNew[9] = menuObjects[13];
  // menuObjectsNew[10] = menuObjects[14];
  // menuObjectsNew[11] = menuObjects[15];
  // menuObjectsNew[12] = menuObjects[16];

  menuObjectsNew[0] = menuObjects[1];
  menuObjectsNew[1] = menuObjects[2];
  menuObjectsNew[2] = menuObjects[3];
  menuObjectsNew[3] = menuObjects[4];
  menuObjectsNew[4] = menuObjects[5];
  menuObjectsNew[5] = menuObjects[6];
  menuObjectsNew[6] = menuObjects[7];
  menuObjectsNew[7] = menuObjects[8];
  menuObjectsNew[8] = menuObjects[9];
  menuObjectsNew[9] = menuObjects[10];
  menuObjectsNew[10] = menuObjects[11];


    for(var i = 0; i < menuObjectsNew.length; i++)
    {
        menuObjectsNew[i].ind = i;
    }


    console.log(menuObjectsNew);
    console.log(serverString+path);
    //console.log(window.location.pathname.split('/'));
    //console.log(window.location.pathname.replace(/\/$/,""))
    //console.log(window.location.pathname.split('/').slice(1,window.location.pathname.split('/').length-1));


    return menuObjectsNew.map((items, ind)=>{
        console.log("build contents: "+items.object_slug)
        if (items.order % 2 == 0)
        {
            return (<RightWards key={ind} order={items.order} imgNum={items.ind} title={items.title} slug={items.object_slug} path={path}/>)
        }
        else
        {
            return (<LeftWards key={ind} order={items.order} imgNum={items.ind} title={items.title} slug={items.object_slug} path={path}/>)
        }
    })
}

const RightWards = (props)=>{
    console.log(serverString+props.path+props.slug);
    return(
        <NavLink to={props.slug}>
        <div className="content-linkout rightPush newCLMod">
          <div className="content-text" style={{paddingLeft:"50px;"}}>
            <div className="content-title">
              <div className="content-title-text">{props.title}</div>
            </div>
            <div className="content-synopsis">
              <b>Just in time for Christmas it seems</b> things are looking up a tick in the watch industry, one that’s gone through a slump since 2014. Swiss exports, the barometer, have improved a fraction with a re-sprouting 
            </div>
          </div>
          <div className="circular-thumbnail">
            <img src={serverString+"/temp-eugene/jaeger/contents/"+props.imgNum+".jpg"}/>
          </div>
          
          <div className="content-spacer"></div>
        </div>
        </NavLink>
    )
}

const LeftWards = (props) => {
    console.log(serverString+props.path+props.slug);
    return(
        <NavLink to={props.slug}>
        <div className="content-linkout newCLMod">
          <div className="content-spacer"></div>
          <div className="circular-thumbnail">
            <img src={serverString+"/temp-eugene/jaeger/contents/"+props.imgNum+".jpg"}/>
          </div>
          <div className="content-text" style={{paddingRight:"50px;"}}>
            <div className="content-title">
              <div className="content-title-text">{props.title}</div>
            </div>
            <div className="content-synopsis right-justify">
              <b>Just in time for Christmas it seems</b> things are looking up a tick in the watch industry, one that’s gone through a slump since 2014. Swiss exports, the barometer, have improved a fraction with a re-sprouting 
            </div>
          </div>
        </div>
        </NavLink>
    )
}

class WatchContents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };
    }
    
    render(){
        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
                <div className="contents">
                  <div className="content-heading">Contents</div>
                  
                  {buildLinkouts(editionArray)}
                  
                </div>
              </div>
            </div>
        )
    }
    
}


//export default WatchContents
function mapStateToProps(state) {
  return {
    edition: state.allPosts
  };
}

export default connect(mapStateToProps, null, null, {pure:false})(WatchContents);
