import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './actions/fetch-posts.js'
//import AppHorizontal from './frankensource/shared/App.js'
import { Route, Switch, Redirect } from 'react-router-dom'
import SiteSelector from './CallSite.js'


import logo from './logo.svg';
//import './App.css';

class AppImmersive extends Component {
    constructor(props) {

        super(props);
    }
    componentWillMount(){
        //this.props.fetchPosts();
    }
    componentDidMount (){
    }
    componentDidUpdate (){
    }
    render()
    {
        return (<SiteSelector />)
                
    }
}

//export default App;

function mapStateToProps(state) {
    return { edition: state.allPosts }

}

export default connect(mapStateToProps, {fetchPosts})(AppImmersive)
