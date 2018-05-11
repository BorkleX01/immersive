import React                                    from "react"
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'


export default class ImageBlock extends React.Component {
  render() {
    const ImageData = this.props.dataBlock
    const theBackground = this.props.background ? true : false
    return (
      <ResponsiveImage className={ImageData.title + " image-large " + this.props.theClass} alt={ImageData.title + " image"} background={theBackground}>
        <ResponsiveImageSize
            default
            minWidth={0}
            path={ImageData.sizes["thumbnail"]}
          />
          <ResponsiveImageSize
            minWidth={ImageData.sizes["medium-width"]}
            path={ImageData.sizes.medium}
          />
          <ResponsiveImageSize
            minWidth={ImageData.sizes["large-width"]}
            path={ImageData.sizes.large}
          />
      </ResponsiveImage>
    );
  }
}