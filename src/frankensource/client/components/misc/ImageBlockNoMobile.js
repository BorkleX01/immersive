import React                                    from "react"
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'


export default class ImageBlockNoMobile extends React.Component {
  render() {
    var ImageData = this.props.dataBlock
    var theTitle = this.props.title
    return (
      <ResponsiveImage alt={theTitle + " image"}>
          <ResponsiveImageSize
            minWidth={0}
            path={this.props.pixel}
            default
          />
        <ResponsiveImageSize
            minWidth={639}
            path={ImageData}
          />
      </ResponsiveImage>
    );  
	}
}