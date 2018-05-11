import React from 'react'
import BlockText from '../blocks/text.js'
import BlockVideo from '../blocks/video.js'
import BlockAd from '../blocks/ad.js'
import BlockQuiz from '../blocks/quiz.js'
import BlockImageCarousel from '../blocks/image-carousel.js'
import BlockTwoImageOneQuote from '../blocks/TwoImageOneQuote.js'
import BlockFootnote from '../blocks/footnote.js'

export default class PostBody extends React.Component {

	render() {
		const { post_content } = this.props.postData.acf

		var blocks = post_content.map((block, i) => {
			switch ( block.content_type ) {
				case 'type-text':
					
					return <BlockText 
						content={block.text_content} 
						background_color={block.top_color}
						font_color={block.font_color}
						key={i} />

				case 'type-video-feature':
					
					return <BlockVideo 
						video_type={block.video_type}
						video_poster={block.video_poster}
						video_id={block.video_type === 'youtube' ? block.youtube_video_id : block.brightcove_video_id}
						video_title={block.video_title}
						isFeature={true}
						videoKey={i}
						key={i} />
				case 'type-two-image':

					return <BlockTwoImageOneQuote
						first_image={block.first_image}
						second_image={block.second_image}
						caption={block.caption}
						caption_location={block.caption_location}
						top_color={block.top_color} 
						bottom_color={block.bottom_color} 
						caption_color={block.caption_color}
						theID={"id" + i}
						key={i} />

				case 'type-ad':

					return <BlockAd 
						ad_image={block.ad_image} 
						ad_image_mobile={block.ad_image_mobile}
						ad_link={block.ad_link}
						top_color={block.top_color}
						bottom_color={block.bottom_color}
						key={i} />

				case 'type-quiz':
					
					return <BlockQuiz 
						quiz_url={block.quiz_url}
						quiz_tag={block.quiz_tag}
						block_key={i}
						key={i} />

				case 'type-video':
				
					return <BlockVideo 
						video_type={block.video_type}
						video_poster={block.video_poster}
						video_id={block.video_type === 'youtube' ? block.youtube_video_id : block.brightcove_video_id}
						video_mp4={block.video_mp4}
						video_ogg={block.video_ogg}
						video_webm={block.video_webm}
						video_title={block.video_title}
						isFeature={false}
						videoKey={i}
						key={i} />

				case 'type-image-carousel':

					return <BlockImageCarousel 
						images={block.image_carousel}
						key={i} 
						id={'post-image-carousel-' + i} />

				case 'type-footnote':

					return <BlockFootnote
						content={block.text_content}
						key={i} />

				default:
					return null
			}
		})

		return (
			<div className="post-body">
				{blocks}
			</div>
		)
	}
}