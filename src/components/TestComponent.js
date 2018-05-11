import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import AppHorizontal from '../frankensource/shared/App.js'

export default class TestComponent extends Component{
    constructor(props){
        super(props)
        this.state = {text:"No text"};
        
    }
    componentDidMount(){
        console.log("TestComponent mounted");
        console.log(this.props.edition)
        //console.log(this.props.postData.randomKey)
    }
    componentDidUpdate(){
        console.log("TestComponent updated");
        console.log(this.props.edition)
        //this.setState = {text:this.props.postData[0].content.rendered};
        
        
        //console.log(Array(this.props.postData.data.data.data)[0][0].content);
        //console.log(Array(this.props.postData.data)[0]);
    }
    someString(){
        return "somestring"
    }
    
    render(){
        return(
            <div>
              <Router>
                
                <Link to={window.location}>Blarrg</Link>
              </Router>
              <Switch/>
                <Route path="/blarg" render={()=>(<div>{this.someString()}</div>)}/>
                <Switch/>
            </div>
            
        )
    }
    
}
//{getSite(c).name}
//<Link to={'${match.url}/${c}'}></Link>
//<CallSite match={{ params: { id: 0}, url: ''}}/>

