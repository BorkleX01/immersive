import React                            from 'react';
import Menu                             from 'react-burger-menu/lib/menus/slide'
import { NavLink}                       from 'react-router-dom';
import { connect }                      from 'react-redux';

class SideBar extends React.Component {  
    constructor (props, contex) {
        super(props, contex)
        this.state = {
            menuOpen: false
        }
    }

    componentDidMount(){
        this.setState({
            menuOpen: false
        })
    }

    secondFunction(){
        this.setState({
            menuOpen: true
        })
    }

    closeMenu(){
        this.setState({
            menuOpen: false
        })   
    }

    componentDidUpdate(){
        }
    render() {
        //console.log(this.props.editionArray)
        if (this.props.editionArray === 0) {
            return (<div></div>);
        }
        return (
            <Menu bodyClassName={"menu-open"} className="bm-menu" outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" } isOpen={ this.state.menuOpen } width={400} right>
              <ul>
                {this.props.editionArray.map((items, ind) => {
                    var pageNumber=1;
                    if (/*items.Show !== "no"*/true){
                        items.order = ind+1;
                        //console.log(ind+" "+items.order+ " " +  items.object_slug)
                        return (
                            <li key={ind}>
                              <NavLink 
                                key={items.id} 
                                to={`${this.props.path}/${items.object_slug}`} 
                                onClick={() => {this.props.menuHandler(items.order);this.closeMenu()}}
                                className="block">
                                <span>
                                  <span style={{fontFamily:"ProximaNova"}} className="page-number">Page{ind+1}</span>
                                  <span style={{fontFamily:"ProximaNova"}} className="the-title">{items.title}</span>
                                  <span style={{fontFamily:"ProximaNova"}} className="read-more">Read More >></span> 
                                </span>
                              </NavLink>
                            </li>
                        );
                    } else {
                        return null;
                    }                     
                })}
            </ul>            
                </Menu>
        )


        
    };
}


export default SideBar

