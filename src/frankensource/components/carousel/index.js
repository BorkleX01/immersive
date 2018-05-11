import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Swipeable from 'react-swipeable'

import ArrowNext_black from '../../images/chevron-right.svg'
import ArrowPrev_black from '../../images/chevron-left.svg'
import ArrowNext_white from '../../images/chevron-right-white.svg'
import ArrowPrev_white from '../../images/chevron-left-white.svg'

class Carousel extends React.Component {
	constructor(props) {
		super(props)

		const defaults = {
			// Option props
			id: 'example-carousel',
			isInfinite: true,
			items: [],
			transitionDuration: 500,
			hasPager: true,
			hasNextPrev: true,
			slidesToShow: {
				xs: 1,
				sm: 1,
				md: 1,
				lg: 1
			},
			// Internal state
			currentDir: null,
			activeSlide: 0,
			itemCount: 0,
			isFirst: true,
			isLast: false,
			isTransitioning: false
		}

		const counts = {
			itemCount: props.items.length
		}

		this.state = {...defaults, ...props, ...counts}

		this.transitionCarousel = this.transitionCarousel.bind(this)
		this.updateCarousel = this.updateCarousel.bind(this)
		this.nextSlide = this.nextSlide.bind(this)
		this.prevSlide = this.prevSlide.bind(this)
		this.getVisibleSlides = this.getVisibleSlides.bind(this)
	}

	componentDidMount() {
		this.updateCarousel()
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			...this.state, 
			...nextProps,
			itemCount: nextProps.items.length
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		if ( this.state.isTransitioning && !nextState.isTransitioning ){
			return false
		}
		return true
	}

	componentDidUpdate(prevProps, prevState) {
		this.updateCarousel()
		if ( prevState.activeSlide !== this.state.activeSlide ){
			this.transitionCarousel()
		}
	}

	transitionCarousel() {
		const { id, transitionDuration, currentDir } = this.state
		
		const carousel = document.getElementById(id)
	
		// Apply transition classes
		carousel.classList.add('transitioning')
		carousel.classList.add(currentDir)

		setTimeout(() => {
			carousel.classList.remove('transitioning')
			carousel.classList.remove('next')
			carousel.classList.remove('prev')
			carousel.classList.remove('jump')

			this.setState({
				isTransitioning: false
			})
		}, transitionDuration)
	}

	updateCarousel() {
		const { id, itemCount, activeSlide, isInfinite, isFirst, isLast, currentDir, transitionDuration } = this.state

		const carousel = document.getElementById(id)
		const carouselWidth = carousel.offsetWidth
		const carouselInner = carousel.querySelector('.carousel-inner')
		const carouselSlides = carouselInner.getElementsByClassName('carousel-slide')

		// Get infinite carousel elements
		const carouselInfinite = carouselInner.querySelectorAll('.carousel-infinite')
		const carouselInfiniteSlides = carouselInner.querySelectorAll('.carousel-infinite-left .carousel-slide-clone')

		// Set visible slides for current breakpoint, fall back to max if less than defined
		const slides = this.getVisibleSlides()

		// Calculate width of carousel inner and slides
		const slideWidth = carouselWidth / slides
		const carouselInnerWidth = slideWidth * itemCount

		// Calculate width of inifinite slides containers
		const carouselInfiniteWidth = carouselInfiniteSlides ? slideWidth * carouselInfiniteSlides.length : 0

		// Set width of inner
		carouselInner.style.width = `${carouselInnerWidth}px`

		// Set width of slides
		for ( let i = 0; i < carouselSlides.length; i++ ) {
			carouselSlides[i].style.width = `${slideWidth}px`
		}


		// Set width of infinite slide containers
		carouselInfinite[0].style.width = `${carouselInfiniteWidth}px`
		carouselInfinite[1].style.width = `${carouselInfiniteWidth}px`

		// Calculate translate offset
		var translation = -(activeSlide * slideWidth)

		if ( isInfinite ) {
			translation = -(activeSlide * slideWidth)

			if ( currentDir === 'next' && isFirst ) {
				
				translation = -(itemCount * slideWidth)
				carouselInner.style.transform = `translate(${translation}px,0px)`
				carouselInner.style.webkitTransform = `translate(${translation}px,0px)`

				setTimeout(() => {
					carouselInner.style.transform = `translate(0px,0px)`
					carouselInner.style.webkitTransform = `translate(0px,0px)`
				}, transitionDuration)

			} else if ( currentDir === 'prev' && isLast ) {
				
				translation = slideWidth
				carouselInner.style.transform = `translate(${translation}px,0px)`
				carouselInner.style.webkitTransform = `translate(${translation}px,0px)`

				setTimeout(() => {
					carouselInner.style.transform = `translate(-${slideWidth * activeSlide}px,0px)`
					carouselInner.style.webkitTransform = `translate(-${slideWidth * activeSlide}px,0px)`
				}, transitionDuration)

			}
		}

		carouselInner.style.transform = `translate(${translation}px,0px)`
		carouselInner.style.webkitTransform = `translate(${translation}px,0px)`
	}

	nextSlide() {
		const { activeSlide, itemCount, isLast, isInfinite, isTransitioning } = this.state
		
		const slides = this.getVisibleSlides()

		if ( !isTransitioning ){
			if ( isLast ) {
				if ( isInfinite ){
					this.setState({
						activeSlide: 0,
						currentDir: 'next',
						isFirst: true,
						isLast: false,
						isTransitioning: true
					})
				}
			} else {
				if ( isInfinite || activeSlide < Math.floor(itemCount / slides) ) {
					this.setState({
						activeSlide: activeSlide + 1,
						currentDir: 'next',
						isFirst: false,
						isLast: activeSlide + 1 === itemCount - 1 ? true : false,
						isTransitioning: true
					})
				}
			}
		}
	}

	prevSlide() {
		const { activeSlide, itemCount, isFirst, isInfinite, isTransitioning } = this.state

		if ( !isTransitioning ){
			if ( isFirst ) {
				if ( isInfinite ){
					this.setState({
						activeSlide: itemCount - 1,
						currentDir: 'prev',
						isFirst: false,
						isLast: true,
						isTransitioning: true
					})
				}
			} else {
				this.setState({
					activeSlide: activeSlide - 1,
					currentDir: 'prev',
					isFirst: activeSlide - 1 === 0 ? true : false,
					isLast: false,
					isTransitioning: true
				})
			}
		}
	}

	goToSlide(key) {
		const { activeSlide, itemCount, isTransitioning, isInfinite } = this.state

		const slides = this.getVisibleSlides()

		if ( !isTransitioning && key !== activeSlide ){
			if ( isInfinite || key < Math.floor(itemCount / slides) ) {
				this.setState({
					activeSlide: key,
					currentDir: 'jump',
					isFirst: key === 0,
					isLast: key === (itemCount - 1),
					isTransitioning: true
				})
			}
		}
	}

	handleResize() {
		this.updateCarousel()
	}

	getVisibleSlides() {
		const { breakpoints } = this.props
		const { itemCount, slidesToShow } = this.state

		var slides = itemCount > slidesToShow.xs ? slidesToShow.xs : itemCount

		if ( breakpoints.isTablet ) {
			slides = itemCount > slidesToShow.sm ? slidesToShow.sm : itemCount
		} else if ( breakpoints.isDesktop ) {
			slides = itemCount > slidesToShow.md ? slidesToShow.md : itemCount
		} else if ( breakpoints.isLarge ) {
			slides = itemCount > slidesToShow.lg ? slidesToShow.lg : itemCount
		}

		return slides
	}

	render() {
		const { id, activeSlide, isInfinite, items, transitionDuration, hasPager, hasNextPrev, arrows, itemCount } = this.state
		
		if ( !items.length ){
			return (null)
		} else {
			const visibleSlides = this.getVisibleSlides()
			var pager = []
			var itemClones = items.concat(items)

			const slides = items.map((item, i) =>
				<div className={ i === activeSlide && visibleSlides === 1 ? 'carousel-slide activeSlide' : 'carousel-slide'} key={i} data-index={i}>{item}</div>
			)

			var slideClones = itemClones.map((item, i) =>
				<div className={ i === activeSlide && visibleSlides === 1 ? 'carousel-slide carousel-slide-clone activeSlide' : 'carousel-slide carousel-slide-clone'} key={i} data-index={i}>{item}</div>
			)

			if ( hasPager && visibleSlides === 1 ){
				pager = items.map((item, i) =>
					<li key={i} className={i === activeSlide ? 'activePager' : null} onClick={() => this.goToSlide(i)}></li>
				)
			}

			var classes = `carousel${isInfinite ? ' infinite' : ''}${itemCount === 1 ? ' single' : ' not-single'}${itemCount > 0 ? ' slide-count-' + itemCount : null}${hasPager && pager.length && visibleSlides === 1 ? ' pager' : ''}`
			var innerStyle = ''

			if ( transitionDuration > 0 ){
				innerStyle = `#${id}.transitioning .carousel-inner { transition-duration: ${transitionDuration / 1000}s; }`
			}

			var prevArrow, nextArrow
			if (arrows === "black"){
				nextArrow = ArrowNext_black
				prevArrow = ArrowPrev_black
			} else {
				nextArrow = ArrowNext_white
				prevArrow = ArrowPrev_white
			}

			return (
				<div className={classes} id={id}>
					<style>{innerStyle}</style>
					<Swipeable onSwipingLeft={this.nextSlide} onSwipingRight={this.prevSlide}>
						
						<div className="carousel-controls">
							
							{hasNextPrev ?
							<div className="carousel-prev">
								<button onClick={this.prevSlide}><img src={prevArrow} alt="prev arrow" className="prev icon" /><span className="sr-only">Previous</span></button>
							</div>
							: null}
							
							{hasNextPrev ?
							<div className="carousel-next">
								<button onClick={this.nextSlide}><img src={nextArrow} alt="next arrow" className="next icon" /><span className="sr-only">Next</span></button>
							</div>
							: null}
							
							{hasPager && pager.length && visibleSlides === 1 ?
							<div className="carousel-pager" aria-hidden="true">
								<ol>{pager}</ol>
							</div>
							: null}

						</div>

						<div className="carousel-inner">
							{isInfinite ? <div className="carousel-infinite carousel-infinite-left" aria-hidden="true">{slideClones.slice(-(visibleSlides + 1))}</div> : null}
							<div className="carousel-slides">{slides}</div>
							{isInfinite ? <div className="carousel-infinite carousel-infinite-right" aria-hidden="true">{slideClones.slice(0, (visibleSlides + 1))}</div> : null}
						</div>

					</Swipeable>
				</div>
			)
		}
	}
}

Carousel.propTypes = {
	breakpoints: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	const { breakpoints } = state

	return {
		breakpoints
	}
}

export default connect(mapStateToProps)(Carousel)
