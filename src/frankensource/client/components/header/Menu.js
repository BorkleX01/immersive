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


    render() {
        console.log(this.props.edition.editionArray)
        if (this.props.edition.editionArray === 0) {
            return (<div></div>);
        }
        
        return (
            <Menu bodyClassName={"menu-open"} className="bm-menu" outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" } isOpen={ this.state.menuOpen } width={400} right>
              <ul>
                {this.props.edition.editionArray.map((items, key) => {
                    
                    if (items.Show !== "no"){
                        return (
                            <li key={items.id}>
                              <NavLink 
                                key={items.id} 
                                to={`${this.props.path}/${items.object_slug}`} 
                                onClick={() => {this.props.menuHandler(items.order);this.closeMenu()}}
                                className="block">
                                <span className={"theText class" + key}>
                                  <span className="page-number">Page{key - 1}</span>
                                  <span className="the-title">{items.title}</span>
                                  <span className="time">{items.attr}</span>
                                  <span className="read-more">Read More >></span> 
                                </span>
                              </NavLink>
                            </li>
                        )
                    } else {
                        return null
                    }                     
                })}
            </ul>            
                </Menu>
        )


        
    };
}

function mapStateToProps(state) {
  return {
    edition: state.allPosts
  };
}

export default connect(mapStateToProps, null, null, {pure:false})(SideBar);


