import axios from 'axios';
const url  = require('url');


var presentURL = url.parse(window.location.toString());
var fetchURL = "";
var campaignMenuID = null;

var path = []

//var serverString = "";
var serverString="http://localhost/immersive/index.php"
//var serverString = "http://" + window.location.hostname;
//var serverString = "http://localhost:8888/immersive";
//var serverString = "https://dev-immersive.pantheonsite.io";
//Object { NODE_ENV: "development", PUBLIC_URL: "", REACT_APP_LOCAL_SERVER: "localhost:8888/immersive" }
//console.log(process.env) 
//console.log(process.env.PUBLIC_URL)
if (process.env.NODE_ENV === "development")
{serverString = process.env.REACT_APP_LOCAL_SERVER}
else if (process.env.NODE_ENV === "production")
{serverString = window.location.protocol+window.location.port+"//"+window.location.hostname}

var host_path = presentURL.hostname.split('.com')[0].split('.');
host_path.shift();
path = presentURL.pathname.split('/');



var categories = {"" : {id: 0, parent : null, style:""}};
var sites = [{url: '', name: 'Immersive Landing', campaigns: [], style: ''}]
var singlePost = {slug: '', isFetching: true, isError: true, isEmpty: false, data: {}}


export function getOnePost(segment){
    return({}) 
}

export function setPaths(p){
    return(dispatch) => {
        dispatch({type: 'PATH_SEGMENTS', payload: p})
    }
}

export function getSites(){
    
    return(dispatch, getState) => {
        axios.get(serverString+"/wp-json/wp/v2/categories")
            .then(function(response){
                return getCategoryIDs(response.data)})
            .then(function(categories){
                sites.map((item) => {
                    //console.log(item.name + " id " + categories[item.url].id + " parent " + categories[item.url].parent + " " + categories[item.url].style)
                    item.style = categories[item.url].style
                    for (var obj in categories){
                        if (categories[obj].parent ===  categories[item.url].id)
                        {
                            if(obj !== "uncategorized"){
                                item.campaigns.push(obj)
                                
                            }
                        }
                    }
                })
                dispatch({type:'SITE_INFO', payload: sites})
            })
    }
}

function getCategoryIDs(arr){
    arr.forEach(function(el, ind){
        Object.assign(categories , {[el.slug] : {id : el.id , parent : el.parent, style : el.acf.campaign_style}})
        sites.push({url: el.slug, name: el.name, campaigns: [], style: '' })
    })
    return categories
}

function matchSlug(posts, slug){
    if(slug === null || slug === undefined){
        return 0
    }else{
        return posts.findIndex((o)=>o.slug == slug)
    }
}

export function fetchPosts(campaign_slug, slug){
    //console.log(campaign_slug) //string
    return (dispatch, getState) => {
        //console.log(categories[campaign_slug].id);
        //console.log("fetching ID: " + categories[campaign_slug].id);
        fetchURL = serverString+"/wp-json/wp/v2/posts?categories[]="+categories[campaign_slug].id+"&per_page=15"
        axios.get(fetchURL)
            .then(function(response){
                dispatch({type:'ALL_POSTS',payload:response.data})
                //console.log(response.data[0])
                //console.log(response.data[0].slug)
                
                var o = response.data[matchSlug(response.data, slug)]
                singlePost.slug = o.slug;
                singlePost.id = o.id;
                singlePost.data = o;
                singlePost.isFetching = false;
                singlePost.isError = false;
                singlePost.isEmpty = false;
                singlePost.lastUpdated = Date.now();
                //dispatch({type:'CURRENT_POST',payload:response.data[0]})
                //singlePost.data = response.data[0]
                dispatch({type:'CURRENT_POST',payload:singlePost})
                
                return serverString+"/wp-json/acf/v3/categories/"+categories[campaign_slug].id
            })
            .then(optionsURL => axios.get(optionsURL))
            .then(function(response){
                dispatch({type:'GLOBAL_OPTIONS' , payload: response.data.acf})
                
                return categories[campaign_slug].id
            })
            .then( menuID => axios.get(serverString+"/wp-json/acf/v3/categories/"+menuID))
            .then(response=>{
                //console.log(response.data.acf.campaign_menu.ID)
                campaignMenuID = response.data.acf.campaign_menu.ID
                
                return campaignMenuID
            })
            .then(menuID => axios.get(serverString+"/wp-json/wp-api-menus/v2/menus/"+menuID))
            .then(response => {
                //console.log("==============v2/menus" + campaignMenuID)
                //console.log(response.data.items)
                dispatch({type: 'MENU_OBJECT', payload: response.data.items})
            })

    }
}


