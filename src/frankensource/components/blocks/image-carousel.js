import React from 'react'
import Carousel from '../../components/carousel'
import BlockImage from '../../components/blocks/image.js'

export default class BlockImageCarousel extends React.Component {
	render() {
		const { images } = this.props

		if ( !images.length ) {
			return (null)
		} else {
			var carouselItems = images.map((image, i) =>
				<BlockImage desktop={image.image_url_desktop} mobile={image.image_url_mobile} link_url={image.link_url} credit={image.image_credit} key={i} />
			)
			return (
				<div className="block-image-carousel row">
					<div className="image-carousel">
						<div className="inner">
							{carouselItems.length ?
							<Carousel 
								items={carouselItems} 
								isInfinite={true} 
								hasNextPrev={true}
								arrows="black" />
							: null}
						</div>
					</div>
				</div>
			)
		}
	}
}