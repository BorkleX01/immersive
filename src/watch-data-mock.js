//derived from v2 menu data
export const editionArray = (function() {
    
    var menuObjects =
        [
            {"id" : 0 , "object_slug" : "home" ,  title: "Home" , Show: "no"},
            {"id" : 0 , "object_slug" : "jaeger" ,  title: "Jaeger LeCoultre" , Show: "no"},
            {"id" : 0 , "object_slug" : "editors-letter" ,  title: "Editor's Letter" , Show: "no"},

            // {"id" : 0 , "object_slug" : "contents" ,  title: "Contents", Show: "no"},
            {"id" : 0 , "object_slug" : "green-shoots" ,  title: "Green Shoots"},
            {"id" : 0 , "object_slug" : "what-about-smart-watches" ,  title: "What About Smart Watches?"},
            {"id" : 0 , "object_slug" : "time-to-get-personal" ,  title: "Time to get personal", Show: "yes"},
            {"id" : 0 , "object_slug" : "high-end-on-a-high" ,  title: "High-end on a High"},
            {"id" : 0 , "object_slug" : "richemont-royalty-ramps-up-on-retail" ,  title: "Richemont Royalty Ramps up Retail"},
            {"id" : 0 , "object_slug" : "twenty-tempting-tickers" ,  title: "Twenty Tempting Tickers"},
            {"id" : 0 , "object_slug" : "ahead-of-the-curve" ,  title: "Ahead of the Curve"},
            {"id" : 0 , "object_slug" : "dressing-the-wrist" ,  title: "Dressing the Wrist"},
            {"id" : 0 , "object_slug" : "vintage-allure" ,  title: "Vintage Allure"},
            {"id" : 0 , "object_slug" : "heritage-listed" ,  title: "Heritage Listed"},
            {"id" : 0 , "object_slug" : "what-to-bet-on" ,  title: "What to Bet On"},
            {"id" : 0 , "object_slug" : "inside-story" ,  title: "Inside Story"},
            {"id" : 0 , "object_slug" : "youre-not-going-out-like-that" ,  title: "You're not Going Out In That"},
            {"id" : 0 , "object_slug" : "stockists" ,  title: "Stockists"},
				// {"id" : 0 , "object_slug" : "teaser" ,  title: "Teaser"},
            {"id" : 0 , "object_slug" : "home" ,  title: "Home" , Show: "no"}
        ]

    menuObjects.map((item, key)=>{
        item.order = key+1
    })
    return menuObjects
})()

//derived from posts
export const pageArray = [
    {"slug" : "green-shoots",
     "acf" : {"hero" : {"full_width_hero": false}},
     "title": {
         "rendered": "Green shoots"
     }},
    {"slug" : "home"},
    {"slug" : "jaeger"},
    {"slug" : "editors-letter"},
    {"slug" : "what-about-smart-watches"},
    {"slug" : "time-to-get-personal"},
    {"slug" : "high-end-on-a-high"},
    {"slug" : "richemont-royalty-ramps-up-on-retail"},
    {"slug" : "twenty-tempting-tickers"},
    {"slug" : "ahead-of-the-curve"},
    {"slug" : "dressing-the-wrist"},
    {"slug" : "vintage-allure"},
    {"slug" : "heritage-listed"},
    {"slug" : "what-to-bet-on"},
     {"slug" : "inside-story"},
    {"slug" : "youre-not-going-out-like-that"},
     {"slug" : "stockists"}
    // {"slug" : "epilogue"}]
    // {"slug" : "teaser"}
    ]


export const path = '/watch'

const editionArray_ibm = {
    "ID": 11,
    "name": "Edition",
    "slug": "edition",
    "description": "",
    "count": 14,
    "items": [{
        "id": 1077,
        "order": 1,
        "parent": 0,
        "title": "index",
        "url": "http://immersive/ibm-accelerating-intelligence/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "no",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 645,
        "object": "post",
        "object_slug": "ibm-accelerating-intelligence",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1078,
        "order": 2,
        "parent": 0,
        "title": "Listing",
        "url": "http://immersive/listing/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "no",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 644,
        "object": "post",
        "object_slug": "listing",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1066,
        "order": 3,
        "parent": 0,
        "title": "A future fuelled by data",
        "url": "http://immersive/a-future-fuelled-by-data/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 646,
        "object": "post",
        "object_slug": "a-future-fuelled-by-data",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1074,
        "order": 4,
        "parent": 0,
        "title": "Humans will always make better critical decisions",
        "url": "http://immersive/humans-will-always-make-better-critical-decisions/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 647,
        "object": "post",
        "object_slug": "humans-will-always-make-better-critical-decisions",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1067,
        "order": 5,
        "parent": 0,
        "title": "Dr Watson",
        "url": "http://immersive/dr-watson-eases-the-pressure/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 648,
        "object": "post",
        "object_slug": "dr-watson-eases-the-pressure",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1075,
        "order": 6,
        "parent": 0,
        "title": "IBM Watson CTO Rob high bets big on future of voice technology",
        "url": "http://immersive/ibm-watson-cto-rob-high-bets-big-on-future-of-voice-technology/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 649,
        "object": "post",
        "object_slug": "ibm-watson-cto-rob-high-bets-big-on-future-of-voice-technology",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1070,
        "order": 7,
        "parent": 0,
        "title": "How ibm?s watson went from winning jeopardy! To treating cancer",
        "url": "http://immersive/how-ibms-watson-went-from-winning-jeopardy-to-treating-cancer/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 946,
        "object": "post",
        "object_slug": "how-ibms-watson-went-from-winning-jeopardy-to-treating-cancer",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1081,
        "order": 8,
        "parent": 0,
        "title": "Today with Watson",
        "url": "http://immersive/today-with-watson/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 309,
        "object": "post",
        "object_slug": "today-with-watson",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1076,
        "order": 9,
        "parent": 0,
        "title": "IBM?s Watson supercomputer leading charge into early melanoma detection",
        "url": "http://immersive/ibms-watson-supercomputer-leading-charge-into-early-melanoma-detection/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 942,
        "object": "post",
        "object_slug": "ibms-watson-supercomputer-leading-charge-into-early-melanoma-detection",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1084,
        "order": 10,
        "parent": 0,
        "title": "Woodside retains corporate memory using cognitive computing",
        "url": "http://immersive/woodside-retains-corporate-memory-using-cognitive-computing/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 203,
        "object": "post",
        "object_slug": "woodside-retains-corporate-memory-using-cognitive-computing",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1080,
        "order": 11,
        "parent": 0,
        "title": "The Making of Art with Watson",
        "url": "http://immersive/the-making-of-art-with-watson/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 253,
        "object": "post",
        "object_slug": "the-making-of-art-with-watson",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1079,
        "order": 12,
        "parent": 0,
        "title": "Promontory Financial Group and IBM tie up to apply artificial intelligence to bank regulation",
        "url": "http://immersive/promontory-financial-group-and-ibm-tie-up-to-apply-artificial-intelligence-to-bank-regulation/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 242,
        "object": "post",
        "object_slug": "promontory-financial-group-and-ibm-tie-up-to-apply-artificial-intelligence-to-bank-regulation",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1082,
        "order": 13,
        "parent": 0,
        "title": "Westpac, ANZ, Scentre, IBM endorse blockchain, making bank guarantees obsolete",
        "url": "http://immersive/westpac-anz-scentre-ibm-endorse-blockchain-making-bank-guarantees-obsolete/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "yes",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 235,
        "object": "post",
        "object_slug": "westpac-anz-scentre-ibm-endorse-blockchain-making-bank-guarantees-obsolete",
        "type": "post_type",
        "type_label": "Article"
    }, {
        "id": 1068,
        "order": 14,
        "parent": 0,
        "title": "First Ad",
        "url": "http://immersive/ad-page/",
        "attr": "",
        "target": "",
        "theImageID": false,
        "Show": "no",
        "classes": "",
        "xfn": "",
        "description": "",
        "object_id": 153,
        "object": "post",
        "object_slug": "ad-page",
        "type": "post_type",
        "type_label": "Article"
    }],
    "meta": {
        "links": {
            "collection": "http://immersive/wp-json/wp/v2/menus/",
            "self": "http://immersive/wp-json/wp/v2/menus/11"
        }
    }
}

export const pageArray_ibm = [{
    "id": 946,
    "date": "2017-11-08T21:42:43",
    "date_gmt": "2017-11-08T10:42:43",
    "guid": {
        "rendered": "https://dev-immersive.pantheonsite.io/?p=946"
    },
    "modified": "2017-11-08T21:42:43",
    "modified_gmt": "2017-11-08T10:42:43",
    "slug": "how-ibms-watson-went-from-winning-jeopardy-to-treating-cancer",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/how-ibms-watson-went-from-winning-jeopardy-to-treating-cancer/",
    "title": {
        "rendered": "How ibm?s watson went from winning jeopardy! To treating cancer"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 5,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "BEVERLEY HEAD",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>After Watson won the Jeopardy! game show in 2011, IBM received calls from doctors. They were swamped by the amount of medical literature and research being published but wanted to make sure they gave patients the most effective treatment based on current wisdom.</p>\n<p class=\"nope\">\n<style>#block0, #block1, .nope{padding-bottom:0!important;margin-bottom:0;} #block3 h3{margin-top:0;}#block0 p{    margin-left: -10px;margin-right: -10px;}@media screen and (max-width: 800px){#block0 p{    margin-left: 0;margin-right: 0;}</style></p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Rob High, chief technology officer for IBM Watson, calculated that if a doctor read every article published every week, just in their field, it would take 160 hours a week. ?There are only 168 hours in a week,? he says.</p>\n<p>Working with the Memorial Sloan Kettering Cancer Centre, IBM developed Watson Oncology, which is starting to be deployed internationally. It provides support to doctors as they diagnose and treat patients, analysing vast swaths of research and published papers and leveraging micro-segmentation to tailor treatment recommendations for individual patients.</p>\n<p>?<a href=\"http://www.afr.com/news/special-reports/the-cognitive-era/why-cognitive-computing-is-a-growth-engine-for-businesses-20160620-gpn2hv\">Cognitive computing</a>?is about amplifying human cognition. They don?t do your thinking for you, they do your research for you so you can do your job better; that could be as mundane as asking a question or as profound as recommending the right treatment,? says High.</p>\n",
            "small_heading": "Could Watson help?",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "text",
            "content": "<p>In a corporate setting?<a href=\"http://www.afr.com/x/gpn9i5\">asking a question</a>?and getting an accurate and contextually relevant answer can also prove powerful.</p>\n<p>?Imagine you?re in a conference room, you?re trying to make a decision about what new product to put out or what market to invest in. If you had a cognitive system at your disposal, you could just say, ?What were the sales of smartphones in Queensland in the fourth quarter of last year???</p>\n<p>The cognitive platform would hear the question, understand the nuance, and reply without anyone having to fire up a laptop or search a database, allowing a much more informed decision to be taken on the spot.</p>\n<p>While IBM is developing solutions for particular market segments using Watson, it?s also made the platform available to independent developers who can use the services and engines to build their own systems.</p>\n<p>In the future, all cognitive systems are likely to be much richer and more valuable. High says quantum computing could affect the speed of processing while the advent of neuromorphic chips, which are available in experimental quantities, is likely to deliver significant gains.</p>\n<p>?Cognitive computing is based on deep learning neural nets which have some degree of similarity with how the human brain functions. But the neural nets are very basic compared with human neural systems: we currently use one sort of neuron, one type of synapse; the human brain has at least 150 different types of neuron,? he says.</p>\n",
            "small_heading": "Understand the nuance",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "text",
            "content": "<p>In time, systems currently tuned for inductive reasoning ? where the answer to a question exists somewhere in the knowledge base and can be served ?up?with a degree of probability ? could be extended to tackle more deductive reasoning. This will have particular value in healthcare and finance and, further out, High says, systems could be tuned for abductive reasoning. ?These are all forms of reasoning intended to help humans do their jobs.?</p>\n<p>And in time will the computers actually take those jobs? ?We have to think about the future, but I don?t think we are at any risk of this technology taking on a life of its own.?</p>\n",
            "small_heading": "Degree of probability",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }],
        "letter_repeater": false,
        "hero": {
            "ID": 947,
            "id": 947,
            "title": "IMB-image-Story5",
            "filename": "IMB-image-Story5-1.jpg",
            "url": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story5-2",
            "date": "2017-11-08 10:41:52",
            "modified": "2017-11-08 10:41:55",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story5-1-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "full_width_hero": true,
        "sub_title": "How ibm?s watson went from winning jeopardy! To treating cancer",
        "text_color": "#ffffff",
        "excerpt": "A combination of powerful new technologies will free.",
        "sub_excerpt": "This story was originally published in Boss magazine in June 2016.",
        "radial_background": true,
        "radial_background_from": "#292e31",
        "radial_background_to": "#292e31",
        "next_post": {
            "ID": 309,
            "post_author": "1",
            "post_date": "2017-08-20 21:35:54",
            "post_date_gmt": "2017-08-20 11:35:54",
            "post_content": "",
            "post_title": "Today with Watson",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "today-with-watson",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:13:39",
            "post_modified_gmt": "2017-11-08 10:13:39",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/the-making-of-art-with-watson-copy/",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "page_background": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/how-ibms-watson-went-from-winning-jeopardy-to-treating-cancer/",
        "og_tags": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/946"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/5"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=946"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/946/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=946"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=946"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=946"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 942,
    "date": "2017-11-08T21:39:39",
    "date_gmt": "2017-11-08T10:39:39",
    "guid": {
        "rendered": "https://dev-immersive.pantheonsite.io/?p=942"
    },
    "modified": "2017-11-08T21:39:39",
    "modified_gmt": "2017-11-08T10:39:39",
    "slug": "ibms-watson-supercomputer-leading-charge-into-early-melanoma-detection",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/ibms-watson-supercomputer-leading-charge-into-early-melanoma-detection/",
    "title": {
        "rendered": "IBM?s Watson supercomputer leading charge into early melanoma detection"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 5,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "Yolanda Redrup",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>IBM is breaking ground in the early detection of skin cancer using its supercomputer Watson, potentially saving the federal government hundreds of millions of dollars. The tech giant has partnered with skin cancer detection program MoleMap and the Melanoma Institute of Australia to teach the computer how to recognise cancerous skin lesions.</p>\n<p>The initial focus is on the early detection of melanomas, which are the rarest but most deadly type of skin cancer, and make up just 2 per cent of diagnoses but 75 per cent of skin cancer deaths.</p>\n<p>IBM vice-president and lab director of IBM Research Australia, Joanna Batstone, told?AFR Weekend?her colleagues, including?melanoma research manager Rahil Garnavi, had so far fed 41,000 melanoma images into the system with accompanying clinician notes and it had a 91 per cent accuracy at detecting skin cancers.</p>\n<p>The Watson supercomputer uses machine learning algorithms in conjunction with image recognition technology to detect patterns in the moles.</p>\n<p>&#8220;Today, if you have a skin lesion, a clinician&#8217;s accuracy is about 60 per cent. If you use a high-powered DermaScope [a digital microscope], a trained clinician can identify with 80 per cent accuracy,&#8221; said Ms Batstone.</p>\n<p>&#8220;We want to achieve 90 per cent accuracy for all data and we also want it to do more than just say yes or no in regards to whether or not it&#8217;s cancerous, we want it to be able to identify what type of skin cancer it is, or if it&#8217;s another type of skin disease.&#8221;</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "image_caption",
            "the_image": {
                "ID": 943,
                "id": 943,
                "title": "700017512WT010_MoleMap_AFR_",
                "filename": "IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1.jpg",
                "url": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "MELBOURNE, AUSTRALIA - MARCH 10: IBM melanoma research manager Rahil Garnavi (L) and MoleMap Australia diagnosing dermatologist Dr Martin Haskettpose for a photo on March 10, 2017 in Melbourne, Australia. Skin cancer (Photo by Wayne Taylor/Fairfax Media)",
                "name": "700017512wt010_molemap_afr_-2",
                "date": "2017-11-08 10:38:08",
                "modified": "2017-11-08 10:38:12",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 5184,
                "height": 3456,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-300x200.jpg",
                    "medium-width": 300,
                    "medium-height": 200,
                    "medium_large": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-768x512.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 512,
                    "large": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-1024x683.jpg",
                    "large-width": 1024,
                    "large-height": 683,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-24x16.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 16,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-36x24.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 24,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/11/IBM-melanoma-research-manager-Rahil-Garnavi-L-and-MoleMap-Australia-diagnosing-dermatologist-Dr-Martin-Haskett.-The-two-firms-are-collaborating-on-early-detection-of-skin-cancer.-1-48x32.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 32
                }
            },
            "caption": "IBM melanoma research manager Rahil Garnavi (L) and MoleMap Australia diagnosing dermatologist Dr Martin Haskett. The two firms are collaborating on early detection of skin cancer. <b>Wayne Taylor</b>",
            "section_colour": "#ffffff",
            "caption_color": "#000000"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Australian and New Zealanders have the highest rates of skin cancer in the world. In 2016 there were more than 13,000 new cases of melanoma skin cancer.</p>\n<p>Of those with melanoma, there were almost 1800 deaths, making up 3.8 per cent of all cancer deaths in Australia in 2016.</p>\n<p>Non-melanoma skin cancers alone are estimated to cost the government more than $703 million a year, according to 2010 research using medicare data.</p>\n<p>Martin Haskett from MoleMap said diagnoses rates of skin cancer were relatively stable, with a slight decrease in younger people thanks to sun avoidance education campaigns. &#8220;It occurs more frequently in older people and we&#8217;re in a situation where the population is ageing. The older population has not been exposed to the sun protection campaigns and as you get older your immune system performs differently and is less capable,&#8221; Dr Haskett said.</p>\n<p>But even in younger generations, awareness does not always equate to action. Olympic swimmer Mack Horton had a skin cancer scare last year after a doctor watching TV saw an odd looking mole on him while he was racing and alerted the team doctor. &#8220;With young people in general a tan is still seen as cool,&#8221; he said.</p>\n<p>&#8220;When they pulled me aside and notified me I didn&#8217;t think much of it&#8230; but eight weeks later I got it checked and they said they&#8217;d have to take it out that day and then they said they would rush the results and that&#8217;s when it dawned on me how serious it was.&#8221; IBM is setting up a free skin check event at Sydney&#8217;s Bondi Beach over the weekend. Beach goers will be able to stand in front of a smart mirror created by IBM that takes in their visual appearance and asks them questions about their age, family history and behavioural patterns. Within minutes it then generates a report on that individual&#8217;s skin cancer risk. MoleMap will also be checking people&#8217;s moles for free.</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }],
        "letter_repeater": false,
        "hero": {
            "ID": 944,
            "id": 944,
            "title": "IMB-image-Story8",
            "filename": "IMB-image-Story8-1.jpg",
            "url": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story8-2",
            "date": "2017-11-08 10:38:43",
            "modified": "2017-11-08 10:38:47",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/11/IMB-image-Story8-1-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "full_width_hero": true,
        "sub_title": "IBM?s Watson supercomputer leading charge into early melanoma detection",
        "text_color": "#ffffff",
        "excerpt": "A combination of powerful new technologies will free business from drudgery and drive greater value.",
        "sub_excerpt": "",
        "radial_background": true,
        "radial_background_from": "#18b3c7",
        "radial_background_to": "#18b3c7",
        "next_post": {
            "ID": 253,
            "post_author": "1",
            "post_date": "2017-08-19 08:01:42",
            "post_date_gmt": "2017-08-18 22:01:42",
            "post_content": "",
            "post_title": "The Making of Art with Watson",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "the-making-of-art-with-watson",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:17:06",
            "post_modified_gmt": "2017-11-08 10:17:06",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=253",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "page_background": false,
        "canonical_url": "",
        "og_tags": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/942"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/5"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=942"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/942/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=942"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=942"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=942"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 309,
    "date": "2017-08-20T21:35:54",
    "date_gmt": "2017-08-20T11:35:54",
    "guid": {
        "rendered": "http://localhost/the-making-of-art-with-watson-copy/"
    },
    "modified": "2017-11-08T21:13:39",
    "modified_gmt": "2017-11-08T10:13:39",
    "slug": "today-with-watson",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/today-with-watson/",
    "title": {
        "rendered": "Today with Watson"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "video",
            "video": "https://www.youtube.com/watch?v=wr7tnZLVcvA&feature=youtu.be",
            "poster": {
                "ID": 896,
                "id": 896,
                "title": "video-vg-1024x522",
                "filename": "video-vg-1024x522.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "video-vg-1024x522-4",
                "date": "2017-11-08 10:13:16",
                "modified": "2017-11-08 10:13:19",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 1024,
                "height": 522,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-300x153.jpg",
                    "medium-width": 300,
                    "medium-height": 153,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-768x392.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 392,
                    "large": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-1024x522.jpg",
                    "large-width": 1024,
                    "large-height": 522,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-24x12.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 12,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-36x18.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 18,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-48x24.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 24
                }
            },
            "video_title": "Watson at work: <br />\r\nHealthcare",
            "background_color": ""
        }],
        "hero": {
            "ID": 897,
            "id": 897,
            "title": "IMB-image-Story10",
            "filename": "IMB-image-Story10.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story10-2",
            "date": "2017-11-08 10:13:32",
            "modified": "2017-11-08 10:16:48",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "sub_title": "TODAY WITH WATSON",
        "text_color": "#ffffff",
        "excerpt": "",
        "sub_excerpt": "",
        "radial_background": true,
        "radial_background_from": "#000000",
        "radial_background_to": "#000000",
        "next_post": {
            "ID": 203,
            "post_author": "1",
            "post_date": "2017-08-18 17:51:43",
            "post_date_gmt": "2017-08-18 07:51:43",
            "post_content": "",
            "post_title": "Woodside retains corporate memory using cognitive computing",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "woodside-retains-corporate-memory-using-cognitive-computing",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:46:45",
            "post_modified_gmt": "2017-11-08 10:46:45",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=203",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "page_background": false,
        "full_width_hero": true,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/today-with-watson/",
        "og_tags": false,
        "styles": "",
        "html": "",
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/309"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=309"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/309/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=309"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=309"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=309"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 253,
    "date": "2017-08-19T08:01:42",
    "date_gmt": "2017-08-18T22:01:42",
    "guid": {
        "rendered": "http://localhost/?page_id=253"
    },
    "modified": "2017-11-08T21:17:06",
    "modified_gmt": "2017-11-08T10:17:06",
    "slug": "the-making-of-art-with-watson",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/the-making-of-art-with-watson/",
    "title": {
        "rendered": "The Making of Art with Watson"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "video",
            "video": "https://www.youtube.com/watch?v=eAo9oy9D-JU",
            "poster": {
                "ID": 900,
                "id": 900,
                "title": "video-vg-1024x522-2-1",
                "filename": "video-vg-1024x522-2-1.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "video-vg-1024x522-2-1-2",
                "date": "2017-11-08 10:16:32",
                "modified": "2017-11-08 10:16:35",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 1024,
                "height": 522,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-300x153.jpg",
                    "medium-width": 300,
                    "medium-height": 153,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-768x392.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 392,
                    "large": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-1024x522.jpg",
                    "large-width": 1024,
                    "large-height": 522,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-24x12.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 12,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-36x18.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 18,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522-2-1-48x24.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 24
                }
            },
            "video_title": "What's Watson<br />\r\nWorking on Today?",
            "background_color": ""
        }],
        "hero": {
            "ID": 897,
            "id": 897,
            "title": "IMB-image-Story10",
            "filename": "IMB-image-Story10.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story10-2",
            "date": "2017-11-08 10:13:32",
            "modified": "2017-11-08 10:16:48",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story10-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "sub_title": "The Making of Art  with Watson",
        "text_color": "#ffffff",
        "excerpt": "",
        "sub_excerpt": "",
        "radial_background": true,
        "radial_background_from": "#000000",
        "radial_background_to": "#000000",
        "next_post": {
            "ID": 242,
            "post_author": "1",
            "post_date": "2017-08-19 07:19:58",
            "post_date_gmt": "2017-08-18 21:19:58",
            "post_content": "",
            "post_title": "Promontory Financial Group and IBM tie up to apply artificial intelligence to bank regulation",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "promontory-financial-group-and-ibm-tie-up-to-apply-artificial-intelligence-to-bank-regulation",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:45:23",
            "post_modified_gmt": "2017-11-08 10:45:23",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=242",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "page_background": false,
        "full_width_hero": true,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/the-making-of-art-with-watson/",
        "og_tags": false,
        "styles": "",
        "html": "",
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/253"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=253"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/253/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=253"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=253"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=253"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 242,
    "date": "2017-08-19T07:19:58",
    "date_gmt": "2017-08-18T21:19:58",
    "guid": {
        "rendered": "http://localhost/?page_id=242"
    },
    "modified": "2017-11-08T21:45:23",
    "modified_gmt": "2017-11-08T10:45:23",
    "slug": "promontory-financial-group-and-ibm-tie-up-to-apply-artificial-intelligence-to-bank-regulation",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/promontory-financial-group-and-ibm-tie-up-to-apply-artificial-intelligence-to-bank-regulation/",
    "title": {
        "rendered": "Promontory Financial Group and IBM tie up to apply artificial intelligence to bank regulation"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "Geoff Winestock",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>Like parking?inspectors, the guys who make sure banks are meeting regulatory standards?are often not well regarded. They make no money for the bank and just slow other people&#8217;s work.</p>\n<p>That, however, creates an opportunity for?Jeffrey Carmichael, former?head of the banking industry watchdog the Australian Regulation Authority, who is now part of?a new IBM venture that is trying to apply artificial?intelligence and machine learning to the ever-more-expensive task of helping banks comply with tonnes of regulation on consumer protection and the like.</p>\n<p>In what they claim is?a quantum leap for &#8220;reg-tech&#8221; (the kid brother of &#8220;fintech&#8217;), in September IBM?bought a well connected Washington-based global advisory firm called Promontory Financial Group, of which Carmichael is Australasian chief executive.</p>\n<p>The idea is to blend the access and?knowledge?of?Promontory&#8217;s team of?former?top banking regulators like Carmichael with?IBM&#8217;s artificial intelligence technology known as &#8220;Watson&#8221;. If it works it will cut bank compliance costs without cutting corners.</p>\n<p>&#8220;If you have a good AI program, it can do the bulk of the repetitive checking work,&#8221; Carmichael told?The Australian Financial Review. &#8220;But that is not where it ends; there needs to be an extra layer of checking by humans on the computer. At the moment, that layer is massive because there is not enough technology being used.&#8221;</p>\n<p>Until now IBM has used Watson&#8217;s AI technology for marketing stunts like beating the US contestants of the quiz show?Jeopardy!?More practical applications have been slow in areas like handling customer calls and business strategy.</p>\n<p>But Alistair Rennie, general manager solutions for IBM?Analytics, says in a phone interview that?it will be great for banking regulation. It can &#8220;ingest&#8221; both structured information and unstructured information such as regulations, newspaper articles, handwriting and even photos. &#8220;Watson will find inferences in the data that may never occur to a professional who doesn&#8217;t have the bandwidth to digest all the data,&#8221; Rennie says.</p>\n<p>One big application could be policing anti-money laundering and so-called &#8220;know your client&#8221; rules. Bad guys could be caught by cross-checks of handwriting or photos and other suspicious signs.</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "two_images_one_quote",
            "image_one": {
                "ID": 902,
                "id": 902,
                "title": "eugene-smaller",
                "filename": "eugene-smaller.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/eugene-smaller.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "eugene-smaller-2",
                "date": "2017-11-08 10:18:14",
                "modified": "2017-11-08 10:18:15",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 486,
                "height": 648,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/eugene-smaller-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/eugene-smaller-225x300.jpg",
                    "medium-width": 225,
                    "medium-height": 300,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/eugene-smaller.jpg",
                    "medium_large-width": 486,
                    "medium_large-height": 648,
                    "large": "http://immersive/wp-content/uploads/2017/08/eugene-smaller.jpg",
                    "large-width": 486,
                    "large-height": 648,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/eugene-smaller-18x24.jpg",
                    "menu-24x24-width": 18,
                    "menu-24x24-height": 24,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/eugene-smaller-27x36.jpg",
                    "menu-36x36-width": 27,
                    "menu-36x36-height": 36,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/eugene-smaller-36x48.jpg",
                    "menu-48x48-width": 36,
                    "menu-48x48-height": 48
                }
            },
            "image_two": {
                "ID": 903,
                "id": 903,
                "title": "watson2-smaller",
                "filename": "watson2-smaller.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/watson2-smaller.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "watson2-smaller-2",
                "date": "2017-11-08 10:18:29",
                "modified": "2017-11-08 10:18:30",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 582,
                "height": 437,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/watson2-smaller-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/watson2-smaller-300x225.jpg",
                    "medium-width": 300,
                    "medium-height": 225,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/watson2-smaller.jpg",
                    "medium_large-width": 582,
                    "medium_large-height": 437,
                    "large": "http://immersive/wp-content/uploads/2017/08/watson2-smaller.jpg",
                    "large-width": 582,
                    "large-height": 437,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/watson2-smaller-24x18.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 18,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/watson2-smaller-36x27.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 27,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/watson2-smaller-48x36.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 36
                }
            },
            "second_image_caption": "Jeffrey Carmichael. Chief Executive Officer, Promontory Financial Group Australasia (left) and Eugene Ludwig, ?Founder and Chief Executive Officer at Promontory Financial Group (right)",
            "width": "100%",
            "quote": "Watson will find <br />\r\ninferences in the data <br />\r\nthat may never occur <br />\r\nto a professional",
            "section_colour": "#ffffff"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>IBM already has a bank regulatory software team here and it could soon start using Watson. Carmichael says in Australia, Watson?could scrutinise?home loan applications to reduce the risk of systematic?lying by mortgage brokers to get around prudential rules. It could also check that financial advisers are not pushing bad investment strategies to maximise their own commissions rather than meet clients&#8217; needs.</p>\n<p>&#8220;Where the technology comes in is making sure that those making the loans have complied with the regulations,&#8221; says Carmichael. &#8220;In the advice area, which has been an issue in Australia, there is a similar process whereby people make decisions that must conform with regulations,?and you need to monitor?them almost through to the end to make sure that the regulations are being considered at all points.&#8221;</p>\n<p>In both Australia and?the US, Promontory?knows how hard it can be to satisfy regulators. The company?paid a $US15 million ($19.5 million)?settlement to the state of New York last year in connection with reports it wrote for British bank Standard Chartered Bank about the bank&#8217;s anti-money laundering policies which were allegedly &#8220;watered down&#8221;. In Australia, Promontory is monitoring?CBA&#8217;s controversial program reviewing the 10,000 cases of bad financial advice?that have?been at the centre of calls for a royal commission into banks.</p>\n<p>In the US, it has been suggested that a big reason?IBM bought Promontory is to convince regulators to accept Watson as an alternative to old-fashioned human scrutiny. Promontory&#8217;s global chief executive and founder, Eugene Ludwig, used to be Comptroller of the Currency in the US, the equivalent of APRA.</p>\n<p>Ludwig told the?Financial Review?that Watson was exactly what was?needed to fight bad practices in banking:?&#8221;This is a step function opportunity to avoid the kind of mistakes that we have seen in the papers.&#8221;</p>\n<p>Carmichael agrees that convincing regulators to accept Watson?is an issue, but says it should sell itself because it cuts errors. &#8220;You need to be able to establish to both the regulators and the people whose liability is on the loan that the checking is accurate. The value of the AI program is that it learns and can be checked against a human on a regular basis,&#8221; Carmichael says.</p>\n",
            "small_heading": "Systematic lying",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }],
        "hero": {
            "ID": 904,
            "id": 904,
            "title": "IMB-image-Story9-2",
            "filename": "IMB-image-Story9-2.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story9-2-2",
            "date": "2017-11-08 10:19:10",
            "modified": "2017-11-08 10:19:13",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 2900,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-290x300.jpg",
                "medium-width": 290,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-768x794.jpg",
                "medium_large-width": 768,
                "medium_large-height": 794,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-990x1024.jpg",
                "large-width": 990,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story9-2-46x48.jpg",
                "menu-48x48-width": 46,
                "menu-48x48-height": 48
            }
        },
        "sub_title": "Promontory Financial Group and IBM tie up to apply artificial intelligence to bank regulation",
        "text_color": "#454545",
        "excerpt": "Cognitive computing: man and machine in partnership",
        "sub_excerpt": "This story was originally published in Boss magazine in June 2016.",
        "radial_background": true,
        "next_post": {
            "ID": 235,
            "post_author": "1",
            "post_date": "2017-08-19 07:12:49",
            "post_date_gmt": "2017-08-18 21:12:49",
            "post_content": "",
            "post_title": "Westpac, ANZ, Scentre, IBM endorse blockchain, making bank guarantees obsolete",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "westpac-anz-scentre-ibm-endorse-blockchain-making-bank-guarantees-obsolete",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:45:52",
            "post_modified_gmt": "2017-11-08 10:45:52",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=235",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "page_background": false,
        "full_width_hero": false,
        "radial_background_from": "#abd8de",
        "radial_background_to": "#abd8de",
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/promontory-financial-group-and-ibm-tie-up-to-apply-artificial-intelligence-to-bank-regulation/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/242"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=242"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/242/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=242"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=242"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=242"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 235,
    "date": "2017-08-19T07:12:49",
    "date_gmt": "2017-08-18T21:12:49",
    "guid": {
        "rendered": "http://localhost/?page_id=235"
    },
    "modified": "2017-11-08T21:45:52",
    "modified_gmt": "2017-11-08T10:45:52",
    "slug": "westpac-anz-scentre-ibm-endorse-blockchain-making-bank-guarantees-obsolete",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/westpac-anz-scentre-ibm-endorse-blockchain-making-bank-guarantees-obsolete/",
    "title": {
        "rendered": "Westpac, ANZ, Scentre, IBM endorse blockchain, making bank guarantees obsolete"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "James Frost",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>A consortium of banks, a global technology company and Australia&#8217;s largest shopping centre owner have used?distributed ledger technology or blockchain?to make paper-based bank guarantees worth tens of billions obsolete.</p>\n<p>Proof of concept was completed last month in a trial run by ANZ, Westpac, IBM and Scentre Group that leveraged the same technology that underpins?controversial digital currency bitcoin?to provide bank guarantees for commercial lease holders.</p>\n<p>Participants say it is only a matter of time before the technology is rolled out more broadly, disrupting other industries such as insurance?that rely heavily on paper-based documents.</p>\n<p>Scentre chief financial officer Mark Bloom was optimistic about the efficiencies that could be harnessed by the technology and described the present process as cumbersome and labour intensive.</p>\n<p>&#8220;An update of the decades-old process for issuing, tracking and claiming on guarantees is long overdue,&#8221; Mr Bloom said. &#8220;In any given year we are negotiating with in excess of 2000 leases and putting new guarantees in place.&#8221;</p>\n<p>Scentre has a market capitalisation of $20 billion and owns 59 Westfield shopping centres across Australia and New Zealand. It has 11,500 tenants, many of whom required bank guarantees to secure leases of between three and six months in its premium shopping centres.</p>\n<p>A paper-based guarantee is typically a single sheet of paper with a bank letterhead that is stored in a safe. Among the details it contains are an amount of money the bank is guaranteeing, an expiry date, a customer name, a beneficiary and purpose.</p>\n<p>Bank guarantees are amended often and can be forged. They can take anywhere from a day to more than a week to be issued. Experts say there is no way of accurately measuring how many billions of bank guarantees are out there.</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "image_caption",
            "the_image": {
                "ID": 906,
                "id": 906,
                "title": "Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683",
                "filename": "Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "Westfield Shopping Centre in Sydney CBD, Pitt Street. Generic shops, retail, mall. Wednesday 4th June 2014 AFR photo Louie Douvis",
                "name": "scentre-which-owns-59-westfield-shopping-centres-across-australia-and-new-zealand-believes-blockchain-could-improve-efficiency-and-cut-costs-1024x683-2",
                "date": "2017-11-08 10:20:28",
                "modified": "2017-11-08 10:20:31",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 1024,
                "height": 683,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-300x200.jpg",
                    "medium-width": 300,
                    "medium-height": 200,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-768x512.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 512,
                    "large": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-1024x683.jpg",
                    "large-width": 1024,
                    "large-height": 683,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-24x16.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 16,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-36x24.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 24,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/Scentre-which-owns-59-Westfield-shopping-centres-across-Australia-and-New-Zealand-believes-blockchain-could-improve-efficiency-and-cut-costs.-1024x683-48x32.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 32
                }
            },
            "caption": "Scentre, which owns 59 Westfield shopping centres across Australia and New Zealand, believes blockchain could improve efficiency and cut costs.\r\n<br/><b>- Louie Douvis</b>",
            "section_colour": "#f58220",
            "caption_color": "#ffffff"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Westpac&#8217;s general manager of corporate and institutional banking Andrew McDonald said a fully digital solution using distributed ledger technology would remove the prospect of fraud and reduce the risks of human error that flow from paper-based processes.</p>\n<p>&#8220;Next steps involve encouraging all industry players to adopt this technology so we can better protect and save money for our customers. Beyond that there is no reason why this couldn&#8217;t be applied across other industries,&#8221; Mr McDonald said.</p>\n<p>Participants will release a proof of concept white paper on Monday that will detail how the trial worked. Experts say they need industry-wide support for the initiative to be viable.</p>\n<p>ANZ&#8217;s general manager of wholesale digital banking Nigel Dobson said the group was aiming to run a bigger trial involving multiple landlords before the end of the year. He said the technology has obvious applications in other aspects of commercial property management as well as the insurance industry.</p>\n<p>&#8220;Think of all the other documents that flow through a retailer and a property manager such as the lease and the insurance and other adjacent documentation. We think there are applications in the insurance industry too,&#8221; he said.</p>\n<p>&#8220;There is significant overlap here with the insurance industry if you think about it. They are both paper based, they both get regularly amended and so on. We believe that what we&#8217;ve learned can be picked up and lifted into a broker and insurer scenario, we are looking to kick that off soon.&#8221;</p>\n<p>ANZ drew on its experience working with 28 banks including US banking giant Wells Fargo?around using the technology to reconcile payments and potentially disrupt the global payment settlement engine known as Swift. While hopes are high following the breakthrough, the process of commercialisation will be much more complicated and expensive.</p>\n<p>IBM made a dedicated team of researchers and developers available to the project to design, develop, test and deploy the prototype.</p>\n<p>Over a period of six weeks the participants were able to prove that the creation, amendment, issuance, validation and reporting of bank guarantees was possible.</p>\n<p>IBM Research Australia&#8217;s vice-president and lab director Dr Joanna Batstone said the potential was enormous.</p>\n<p>&#8220;The business use case demonstrates the opportunity to lift efficiency and transparency for all parties involved. We believe blockchain can potentially drive productivity across all Australian industries.&#8221;</p>\n<p>Scentre&#8217;s Mr Bloom said the company aimed to be much more customer focused and had embraced innovation and partnerships.</p>\n<p>&#8220;We are trying to foster innovation in every aspect of what we do,&#8221; Mr Bloom said.</p>\n",
            "small_heading": "'Obvious applications'",
            "section_colour": "#f58220",
            "text_colour": "#ffffff",
            "heading_colour": "#ffffff"
        }],
        "hero": {
            "ID": 907,
            "id": 907,
            "title": "IMB-image-Story11",
            "filename": "IMB-image-Story11.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story11-2",
            "date": "2017-11-08 10:21:11",
            "modified": "2017-11-08 10:21:13",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story11-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "sub_title": "Westpac, ANZ, Scentre, IBM endorse blockchain, making bank guarantees obsolete",
        "text_color": "#ffffff",
        "excerpt": "A combination of powerful new technologies will free business from drudgery and drive greater value",
        "sub_excerpt": "",
        "radial_background": true,
        "radial_background_from": "#1bbcd0",
        "radial_background_to": "#1bbcd0",
        "next_post": false,
        "page_background": false,
        "full_width_hero": true,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/westpac-anz-scentre-ibm-endorse-blockchain-making-bank-guarantees-obsolete/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/235"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=235"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/235/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=235"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=235"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=235"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 203,
    "date": "2017-08-18T17:51:43",
    "date_gmt": "2017-08-18T07:51:43",
    "guid": {
        "rendered": "http://localhost/?page_id=203"
    },
    "modified": "2017-11-08T21:46:45",
    "modified_gmt": "2017-11-08T10:46:45",
    "slug": "woodside-retains-corporate-memory-using-cognitive-computing",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/woodside-retains-corporate-memory-using-cognitive-computing/",
    "title": {
        "rendered": "Woodside retains corporate memory using cognitive computing"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "story_by": "BEVERLEY HEAD",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>Woodside is Australia?s largest independent oil and gas company. For more than 60 years it?s been a critical thread in the nation?s fabric: if its gas doesn?t arrive promptly in Perth to fuel power generation the city goes dark in two days.</p>\n<p>The company no longer relies purely on gas and oil for its success, however; it relies on data. According to Woodside senior vice-president and chief technology officer Shaun Gregory: ?Our people understand that data is king, that knowledge is king.? However; it used to be a burden, he says.</p>\n<p>The problem Woodside experienced will resonate with many organisations: it had plenty of data, but making sense of it felt like trying to drink from a fire hose. A year after deploying a cognitive platform much of Woodside?s data has been ingested by the system and is now available across the organisation.</p>\n<p>The impact is particularly stark for Woodside?s new recruits. One of the seven Watson platforms in use at Woodside draws on the contents of 28,000 project documents, each at least 100 pages long.</p>\n<p>?It?s how we bring 30 years of projects to the surface for the 100 graduates that we recruit every year. We?re only 3500 employees and it?s an ageing industry, so how do we maintain the knowledge?</p>\n<p>?You become an instant expert on plant that we built 10 years ago. You can ask a highly technical question and it will give you the answer; you don?t have to try to book a meeting, try to find the person who built it, who?s probably retired.</p>\n<p>?This is enabling graduates and young professionals. They would normally have to wait 10 years for those skills,? says Gregory, adding that?the?platform is driving cultural change across the business.</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "video",
            "video": "https://www.youtube.com/watch?v=YGAAfxUczxg",
            "poster": {
                "ID": 909,
                "id": 909,
                "title": "video-vg",
                "filename": "video-vg.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/video-vg.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "video-vg-2",
                "date": "2017-11-08 10:22:29",
                "modified": "2017-11-08 10:22:32",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 7467,
                "height": 3808,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/video-vg-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/video-vg-300x153.jpg",
                    "medium-width": 300,
                    "medium-height": 153,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/video-vg-768x392.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 392,
                    "large": "http://immersive/wp-content/uploads/2017/08/video-vg-1024x522.jpg",
                    "large-width": 1024,
                    "large-height": 522,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/video-vg-24x12.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 12,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/video-vg-36x18.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 18,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/video-vg-48x24.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 24
                }
            },
            "video_title": "Watson At work:<br />\r\nEnergy<br />\r\n",
            "background_color": "#ffffff"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Russ Potapinski, Woodside?s head of cognitive science, cites an example of how it works. In June, Woodside and its partner, Mitsui, announced approval for the $US1.9 billion Greater Enfield Project, which is expected to deliver its first oil in?2019.</p>\n<p>A day after that announcement Potapinski demonstrated how an engineer could question Watson about the fluid capacity of the field based on past experience. A couple of responses emerged, with weightings to identify which the system believed were most useful.</p>\n<p>The engineer sees the answer, but also has access to source documents for additional validation. If the response is right, the engineer clicks on a ?thumbs-up? icon which feeds into the system?s machine-learning algorithms.</p>\n<p>Potapinski says that the machine learning capabilities mean that over three months the platform has lifted its performance from a one in 20 success rate to one in four. And the platform will continue to grow as Woodside adds a further 12,000 documents.</p>\n<p>Gregory says that the next quantum leap will come when the company integrates its cognitive computing platforms with its analytics platform which records data from 200,000 sensors.</p>\n<p>?When we bring them together, that?s when we really start to transform,? he says.</p>\n",
            "small_heading": "Machine learning",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }],
        "hero": {
            "ID": 910,
            "id": 910,
            "title": "IMB-image-Story7",
            "filename": "IMB-image-Story7.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story7-2",
            "date": "2017-11-08 10:22:57",
            "modified": "2017-11-08 10:23:00",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story7-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "sub_title": "Woodside retains corporate memory using cognitive computing",
        "text_color": "#454545",
        "excerpt": "A combination of powerful new technologies will free.",
        "sub_excerpt": "This story was originally published in Boss magazine in June 2016.",
        "radial_background": true,
        "next_post": {
            "ID": 942,
            "post_author": "5",
            "post_date": "2017-11-08 21:39:39",
            "post_date_gmt": "2017-11-08 10:39:39",
            "post_content": "",
            "post_title": "IBM?s Watson supercomputer leading charge into early melanoma detection",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "ibms-watson-supercomputer-leading-charge-into-early-melanoma-detection",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:39:39",
            "post_modified_gmt": "2017-11-08 10:39:39",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "https://dev-immersive.pantheonsite.io/?p=942",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "page_background": false,
        "radial_background_from": "#65bde9",
        "radial_background_to": "#65bde9",
        "full_width_hero": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/woodside-retains-corporate-memory-using-cognitive-computing/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/203"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=203"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/203/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=203"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=203"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=203"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 153,
    "date": "2017-08-17T15:00:49",
    "date_gmt": "2017-08-17T05:00:49",
    "guid": {
        "rendered": "http://localhost/?post_type=adpagespost_type&#038;p=153"
    },
    "modified": "2017-11-10T16:14:20",
    "modified_gmt": "2017-11-10T05:14:20",
    "slug": "ad-page",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/ad-page/",
    "title": {
        "rendered": "First Ad"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "styles": "#one{\r\n    margin-top: 115px;max-width:90%; max-height: 90vh; display: block;\r\n}\r\n\r\n#two{\r\n    margin: 115px auto 0;max-width:90%; max-height: 90vh; display: none;\r\n}\r\n\r\n@media screen and (max-width: 1100px){\r\n    #one{display: none;}\r\n    #two{display: block;}\r\n}\r\n\r\n@media screen and (max-height: 800px){\r\n    #one, #two{\r\n        margin: 55px auto 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 900px){\r\n    #two{\r\n        margin-top: 55px;\r\n    }\r\n}",
        "html": "<span>\r\n<!--<a href=\"http://ibm.com/au/you\"  target=\"_blank\">-->\r\n<a href=\"http://bs.serving-sys.com/serving/adServer.bs?cn=trd&mc=click&pli=22311238&PluID=0&ord=[timestamp]\" target=\"_blank\">\r\n<img src=\"/wp-content/uploads/2017/11/ibm-ad-landscape-1.jpg\" alt=\"IBM\" id=\"one\">\r\n<img src=\"/wp-content/uploads/2017/11/ibm-ad-portrait-1.jpg\" alt=\"IBM\" id=\"two\">\r\n</a>\r\n</span>",
        "hero": false,
        "sub_title": "",
        "text_color": "#454545",
        "excerpt": "",
        "radial_background": false,
        "next_post": false,
        "page_background": false,
        "sub_excerpt": "",
        "story_by": "",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": false,
        "full_width_hero": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/ad-page/",
        "og_tags": false,
        "ab_description": "",
        "background_module": {
            "background_type": {
                "value": "color",
                "label": "Single Colour"
            },
            "background_colour": "#ffffff",
            "background_image": false,
            "background_video_wp": false,
            "background_video_yt": "",
            "bg_vimeo_vid": ""
        },
        "background_gradient": {
            "background_gradient_type": "top_left",
            "bg_gradient_colour": "#000000",
            "bg_gradient_transparency": "#000000"
        },
        "text_module": {
            "mod_heading": "",
            "mod_copy": "",
            "mod_bg_color": "",
            "mod_bg_alpha": "0",
            "mod_top_design_element_colour": ""
        },
        "ab_page_gui_colours": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/153"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=153"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/153/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=153"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=153"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=153"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 649,
    "date": "2017-08-15T09:08:51",
    "date_gmt": "2017-08-14T23:08:51",
    "guid": {
        "rendered": "http://localhost/?page_id=73"
    },
    "modified": "2017-11-08T21:47:22",
    "modified_gmt": "2017-11-08T10:47:22",
    "slug": "ibm-watson-cto-rob-high-bets-big-on-future-of-voice-technology",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/ibm-watson-cto-rob-high-bets-big-on-future-of-voice-technology/",
    "title": {
        "rendered": "IBM Watson CTO Rob high bets big on future of voice technology"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "sub_title": "Ibm watson cto rob high bets big on future of voice technology",
        "page_background": false,
        "hero": {
            "ID": 923,
            "id": 923,
            "title": "IMB-image-Story4",
            "filename": "IMB-image-Story4.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story4-2",
            "date": "2017-11-08 10:26:01",
            "modified": "2017-11-08 10:26:04",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story4-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "excerpt": "A combination of powerful new technologies will free business from drudgery and drive greater value.",
        "next_post": {
            "ID": 946,
            "post_author": "5",
            "post_date": "2017-11-08 21:42:43",
            "post_date_gmt": "2017-11-08 10:42:43",
            "post_content": "",
            "post_title": "How ibm?s watson went from winning jeopardy! To treating cancer",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "how-ibms-watson-went-from-winning-jeopardy-to-treating-cancer",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:42:43",
            "post_modified_gmt": "2017-11-08 10:42:43",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "https://dev-immersive.pantheonsite.io/?p=946",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "radial_background": true,
        "radial_background_to": "#121d17",
        "story_by": "Yolanda Redrup",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>Global technology giant IBM is betting its future on the idea that humans will soon be talking to machines as the primary interface, ploughing its research and development dollars for its high profile cognitive supercomputer Watson into further developing language recognition technologies.</p>\n<p>Speaking to The Australian Financial Review on a visit to Australia, IBM vice president and Watson chief technology officer Rob High said the multinational tech company was already well on the way to nailing the previously science fiction fantasy of holding conversations with computers. He said IBM has achieved an 85-90 per cent accuracy rate for its cognitive conversational systems to detect 52 personality traits from 300 to 500 words in English, and a similar rate for detecting emotions in the words people use.</p>\n<p>?We use a similar technique to detect emotion, which is more nely grained. It can tell if you?re angry, joyous, disgusted or sad. These different emotional traits come through in what we say, but it?s all in the way we word things. It?s not what we say, it?s how we say it,? High says. The company is trying to crack the uniquely human nature of communication, whereby the true meaning of a sentence can be very different to the words actually used.</p>\n<p>Once the software is able to interpret and react naturally to words, both spoken and written, IBM is expecting customers to be lining up with numerous uses.</p>\n<p>?I can imagine a tone checker for emails, similar to spell checker, or a tone checker for public company announcements or advertising. Then a more interesting use is how it can be used to adjust a conversation to respond based on a person?s emotional stage,? High says.</p>\n<p>He says Watson has also started to be able to detect facial expressions, in order to combine words, voice and visual interfaces to form a complete understanding of a conversation. It is also further developing Watson?s ability to understand different vocalisations of words and how that reinforces a person?s emotional meaning.</p>\n<p>But High believes 100 per cent accuracy will never be possible, saying that would effectively exceed a human?s capability to detect emotion anyway.</p>\n<p>?Frankly, I think it might be unrealistic to expect we?d get more accurate. At some point, humans themselves aren?t good at detecting these things either &#8230; it can take a real professional to get down to a deeper understanding of what we really mean,? he says.</p>\n<p>Language recognition technology is already in use in a wide range of applications from call centres to website chatbots and voice assistants like Apple?s Siri, Amazon?s Alexa and Samsung?s Bixby.</p>\n<p>Local company Appen has benefited from the surge in voice tech, providing data to nine of the world?s top 10 technology companies like Microsoft and Facebook to inform the algorithms that power voice assistants and search technology.</p>\n<p>Similarly, IBM also relies on huge amounts of data to power Watson?s learning, but High says for conversational systems to actually be useful, they also needed to be able to pull data from many sources to determine an answer. He says he believes voice assistants will evolve to become more like personal advisers, but he says ethical concerns were likely to prevent them from becoming like people ? even if the technology could get there.</p>\n<p>?The potential is there for it to advance that far &#8230; but at some level ethically, and this is important to us, no artificial intelligence should ever pretend to be a human being. The goal should never be to trick another human into thinking it?s a human,? High says.</p>\n<p>?The value from these systems is how it can augment and amplify human cognition. To help us, not to do our thinking for us &#8230; We are not looking for an artificial doctor, but for it to help us make better decisions in a way that causes us to be inspired about things we wouldn?t have thought about ourselves, or to let us understand a problem better.?</p>\n",
            "small_heading": "",
            "section_colour": "#07909f",
            "text_colour": "#ffffff",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "image_caption",
            "the_image": {
                "ID": 918,
                "id": 918,
                "title": "iphone-smaller",
                "filename": "iphone-smaller.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/iphone-smaller.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "iphone-smaller-2",
                "date": "2017-11-08 10:25:37",
                "modified": "2017-11-08 10:25:38",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 970,
                "height": 736,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/iphone-smaller-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/iphone-smaller-300x228.jpg",
                    "medium-width": 300,
                    "medium-height": 228,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/iphone-smaller-768x583.jpg",
                    "medium_large-width": 768,
                    "medium_large-height": 583,
                    "large": "http://immersive/wp-content/uploads/2017/08/iphone-smaller.jpg",
                    "large-width": 970,
                    "large-height": 736,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/iphone-smaller-24x18.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 18,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/iphone-smaller-36x27.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 27,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/iphone-smaller-48x36.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 36
                }
            },
            "caption": "",
            "section_colour": "#ffffff",
            "caption_color": "#000000"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>IBM is also investing in a number of ?blue sky? Watson projects, looking into how to create a presence for voice assistant devices in a room, even when not actively engaged in a conversation and also exploring ?deep reasoning?.</p>\n<p>Currently Siri, Alexa, Cortana and Bixby are capable of answering questions for which a factual answer already exits, such as ?what time is sunset in Melbourne tonight?? But when it comes to questions that require elaboration, or for which there is no clear answer, they founder. ?There?s a whole lot of other questions around answering deductive questions in which there isn?t an existing answer and you have to compute it,? High says.</p>\n<p>?To do that you have to know the axioms and the key considerations that are fundamental to that domain. These are all areas of interest for us, but it?s all still out there. More work needs to be done on this deep reasoning.?</p>\n<p>While devices become more useful in people?s personal lives, High also believes they will lead to huge productivity benefits in the workplace.</p>\n<p>At IBM?s research centre in Yorktown Heights, New York, it has rolled out a system known as CELIA, which is able to follow employees as they move around the campus.</p>\n<p>When an employee enters a meeting room, it knows why they?re their and suggests pulling up data on a client or project, without the staff member needing to bring their own laptop. CELIA also actively listens to the conversations taking place, and automatically displays the necessary information from a presentation, without an employee having to navigate slides.</p>\n<p>CELIA was developed as an exemplar of what Watson can do within IBM, but it has caught the attention of corporate clients and the tech giant is at various stages of developing similar systems for a range of enterprises.</p>\n<p>High says in Australia some big financial services companies have expressed interest in CELIA.</p>\n<p>?For every half hour meeting in a conference room, people spend about five to 10 minutes just doing set up and jumping between charts to find the right information, so in that scenario we?re removing at least 10 per cent of time spent in the meeting,? High says.</p>\n<p>?Much of this experience is actually informed by the consumer experience in the home. We?ve learnt what applications should look like at home and how they should behave and now we?re expecting the same thing at work.?</p>\n",
            "small_heading": "BLUE SKY PROJECTS",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }],
        "text_color": "#ffffff",
        "radial_background_from": "##121D17",
        "share_block_background": "#07909f",
        "share_block_color": "#ffffff",
        "sub_excerpt": "",
        "full_width_hero": true,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/ibm-watson-cto-rob-high-bets-big-on-future-of-voice-technology/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/649"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=649"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/649/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=649"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=649"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=649"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 648,
    "date": "2017-08-15T09:05:48",
    "date_gmt": "2017-08-14T23:05:48",
    "guid": {
        "rendered": "http://localhost/?page_id=67"
    },
    "modified": "2017-11-08T21:47:44",
    "modified_gmt": "2017-11-08T10:47:44",
    "slug": "dr-watson-eases-the-pressure",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/dr-watson-eases-the-pressure/",
    "title": {
        "rendered": "Dr Watson"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "sub_title": "Dr Watson eases the pressure",
        "page_background": false,
        "hero": {
            "ID": 926,
            "id": 926,
            "title": "IMB-image-Story3",
            "filename": "IMB-image-Story3.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story3-2",
            "date": "2017-11-08 10:27:49",
            "modified": "2017-11-08 10:27:51",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story3-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "excerpt": "Cognitive computing is supporting doctors treating cancer patients.",
        "next_post": {
            "ID": 649,
            "post_author": "1",
            "post_date": "2017-08-15 09:08:51",
            "post_date_gmt": "2017-08-14 23:08:51",
            "post_content": "",
            "post_title": "IBM Watson CTO Rob high bets big on future of voice technology",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "ibm-watson-cto-rob-high-bets-big-on-future-of-voice-technology",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:47:22",
            "post_modified_gmt": "2017-11-08 10:47:22",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=73",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "radial_background": true,
        "radial_background_to": "#ffffff",
        "story_by": "Beverley Head",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>Each year, the Icon Group provides 200,000 cancer treatments, but the stress on patients from regional areas can often be much higher than for those living in major towns and cities.</p>\n<p>Icon Group wants to change this and has looked to IBM Watson for Oncology to bring global cancer treatment expertise, backed by the latest research, into the hands of its oncologists across Australia.</p>\n<p>Trained by specialists at Memorial Sloan Kettering hospital, Watson for Oncology ingests research and reports about cancer and treatments. Clinicians can then search it for evidence-based treatment plans. Icon Group meanwhile is localising the service to take account of access to medication and the availability of medicines through Australia?s Pharmaceutical Benefits Scheme. Although Watson won?t exclude data about overseas treatments, it will prioritise locally available treatments for Icon users. Icon digital adviser and co-founder Cathie Reid says the group?s mission is to ensure access to high-quality cancer services for more patients, closer to their homes. Reid hopes to deliver evidence-supported quality cancer care regardless of where patients live either in Australia or throughout the developing world.</p>\n<p>The application of Watson in healthcare is gathering pace internationally. One hospital was able to cut the time taken to screen patients for clinical trial eligibility by 78 per cent; in another using Watson for Genomics, the system was able to provide a report of clinically actionable insights within 10 minutes, compared with the 160 hours of human analysis required to arrive at similar conclusions for the patient.</p>\n",
            "small_heading": "",
            "section_colour": "#f58220",
            "text_colour": "#ffffff",
            "heading_colour": "#ffffff"
        }],
        "text_color": "#454545",
        "radial_background_from": "#ffffff",
        "share_block_background": "#f58220",
        "sub_excerpt": "",
        "share_block_color": "#ffffff",
        "full_width_hero": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/dr-watson-eases-the-pressure/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/648"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=648"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/648/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=648"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=648"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=648"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 647,
    "date": "2017-08-15T09:04:09",
    "date_gmt": "2017-08-14T23:04:09",
    "guid": {
        "rendered": "http://localhost/?page_id=63"
    },
    "modified": "2017-11-08T21:48:16",
    "modified_gmt": "2017-11-08T10:48:16",
    "slug": "humans-will-always-make-better-critical-decisions",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/humans-will-always-make-better-critical-decisions/",
    "title": {
        "rendered": "Humans will always make better critical decisions"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "sub_title": "Humans will always make better critical decisions",
        "page_background": false,
        "hero": {
            "ID": 932,
            "id": 932,
            "title": "IMB-image-Story2",
            "filename": "IMB-image-Story2.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story2-2",
            "date": "2017-11-08 10:31:51",
            "modified": "2017-11-08 10:31:53",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story2-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "excerpt": "Cognitive systems help people understand the world.",
        "next_post": {
            "ID": 648,
            "post_author": "1",
            "post_date": "2017-08-15 09:05:48",
            "post_date_gmt": "2017-08-14 23:05:48",
            "post_content": "",
            "post_title": "Dr Watson",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "dr-watson-eases-the-pressure",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:47:44",
            "post_modified_gmt": "2017-11-08 10:47:44",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=67",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "radial_background": true,
        "radial_background_from": "#b2b2b2",
        "radial_background_to": "#b2b2b2",
        "story_by": "Beverley Head",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>The rise of technology is not without risks. Will the robots take our jobs? Will the income tax base be eroded? Will the algorithms rampage?</p>\n<p>As the use of artificial intelligence and cognitive computing becomes more widespread, the more important conversation is around skills, trust and transparency, Kerry Purcell, managing director of IBM Australia and New Zealand, believes.</p>\n<p>Purcell says the ethical expectations are clear; organisations must know how an AI system comes to one conclusion over another and have confidence in that process.</p>\n<p>?Companies must be able to explain the foundation of their algorithms? decision-making process to help people understand and trust how AI technologies make their recommendations,? he says.</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "image_caption",
            "the_image": {
                "ID": 931,
                "id": 931,
                "title": "kerri-smaller-e1503451017865",
                "filename": "kerri-smaller-e1503451017865.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "kerri-smaller-e1503451017865",
                "date": "2017-11-08 10:28:53",
                "modified": "2017-11-08 10:28:55",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 600,
                "height": 489,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865-300x245.jpg",
                    "medium-width": 300,
                    "medium-height": 245,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865.jpg",
                    "medium_large-width": 600,
                    "medium_large-height": 489,
                    "large": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865.jpg",
                    "large-width": 600,
                    "large-height": 489,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865-24x20.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 20,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865-36x29.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 29,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/kerri-smaller-e1503451017865-48x39.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 39
                }
            },
            "caption": "Kerry Purcell, Managing Director, IBM Australia and New Zealand",
            "section_colour": "#ffffff",
            "caption_color": "#000000"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Maurice Pagnucco, head of the School of Computer Science and Engineering at the University of NSW, says technology is now accelerating to the extent that people are having to rethink what computers can and cannot do. ?The theory tells you that there are things that computers cannot do. But that theory is predicated on computers achieving precise reasoning ? but humans don?t work that way.?</p>\n<p>Business psychologist Susan Nicholson believes that it is important for organisations developing and deploying cognitive systems to ensure that they are designed to enhance rather than threaten people.</p>\n<p>Emotional intelligence, which is unique to people, remains, she says, a critical part of effective decision- making. To thrive in the evolving workplace, people must hone their creativity, demonstrate their ability to act and be prepared to accept change.</p>\n<p>Purcell adds, ?An AI system returns insights, discoveries and recommendations, but critical decisions, such as those our doctors deal with every single day, require human judgment, morals and intuition ? AI does not and will not change that.?</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": ""
        }],
        "text_color": "#ffffff",
        "share_block_background": "#ffffff",
        "sub_excerpt": "",
        "share_block_color": "#000000",
        "full_width_hero": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/humans-will-always-make-better-critical-decisions/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/647"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=647"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/647/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=647"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=647"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=647"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 646,
    "date": "2017-08-15T08:58:39",
    "date_gmt": "2017-08-14T22:58:39",
    "guid": {
        "rendered": "http://localhost/?page_id=60"
    },
    "modified": "2017-11-08T21:35:16",
    "modified_gmt": "2017-11-08T10:35:16",
    "slug": "a-future-fuelled-by-data",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/a-future-fuelled-by-data/",
    "title": {
        "rendered": "A future fuelled by data"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "sub_title": "A future fuelled by data",
        "page_background": false,
        "hero": {
            "ID": 937,
            "id": 937,
            "title": "IMB-image-Story1",
            "filename": "IMB-image-Story1.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-story1-2",
            "date": "2017-11-08 10:34:41",
            "modified": "2017-11-08 10:34:44",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 3000,
            "height": 3000,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-300x300.jpg",
                "medium-width": 300,
                "medium-height": 300,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-768x768.jpg",
                "medium_large-width": 768,
                "medium_large-height": 768,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-1024x1024.jpg",
                "large-width": 1024,
                "large-height": 1024,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-24x24.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 24,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-36x36.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 36,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Story1-48x48.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 48
            }
        },
        "excerpt": "A combination of powerful new technologies will free business from drudgery and drive greater value.",
        "next_post": {
            "ID": 647,
            "post_author": "1",
            "post_date": "2017-08-15 09:04:09",
            "post_date_gmt": "2017-08-14 23:04:09",
            "post_content": "",
            "post_title": "Humans will always make better critical decisions",
            "post_excerpt": "",
            "post_status": "publish",
            "comment_status": "closed",
            "ping_status": "closed",
            "post_password": "",
            "post_name": "humans-will-always-make-better-critical-decisions",
            "to_ping": "",
            "pinged": "",
            "post_modified": "2017-11-08 21:48:16",
            "post_modified_gmt": "2017-11-08 10:48:16",
            "post_content_filtered": "",
            "post_parent": 0,
            "guid": "http://localhost/?page_id=63",
            "menu_order": 0,
            "post_type": "post",
            "post_mime_type": "",
            "comment_count": "0",
            "filter": "raw"
        },
        "radial_background": true,
        "radial_background_from": "#bbeaf0",
        "radial_background_to": "#bbeaf0",
        "story_by": "Beverley Head",
        "content": [{
            "acf_fc_layout": "text",
            "content": "<p>The digital disruption rippling through business and government today is merely a curtain-raiser for what comes next. The combination of artificial intelligence (AI), blockchain technologies and quantum computing will usher in new operating models, new industries, new possibilities. The future will be fuelled by data and technologies that harvest, protect, analyse and take action based on that information.</p>\n<p>Professor Mary-Anne Williams, director of the innovation and enterprise research lab at the University of Technology, Sydney, believes that cognitive computing is already a game-changer.</p>\n<p>?Cognitive computing is able to convert vast volumes of complex data into decision-making models that can be used to take action autonomously without human oversight or intervention,? she says. ?We have seen these kinds of robust decisioning systems dominating the stock market for some time and increasingly they are being deployed in a much wider range of applications, from chatbots offering customer service to medical diagnosis and treatment recommendations, autonomous lane-changing in cars and social robots working with children and the elderly.? Williams acknowledges there are skills challenges in terms of deploying these solutions but says early experimentation is essential.</p>\n<p>?There is little advantage to being a fast follower in cognitive computing because the real value is in the experimentation and discovery phase where game- changing applications are invented and designed. It is unlikely a fast follower of cognitive computing will be able to lead in their areas of core capability.</p>\n<p>?Businesses and governments with access to data which are able to experiment with it will inevitably dominate the landscape.?</p>\n",
            "small_heading": "",
            "section_colour": "#ffffff",
            "text_colour": "#0a0a0a",
            "heading_colour": ""
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Lee Hatton, chief executive of UBank, wants to be in that cohort. She describes the bank as a fintech with a banking licence.</p>\n<p>She?s not interested in best practice: ?That?s kind of boring, we want next practice.? That?s why UBank has launched Australia?s first virtual assistant for home loans. One in 10 UBank home loan applications now begins with the IBM Watson-powered RoboChat, where customers complete a basic home loan application with the help of a virtual assistant before it?s passed to the contact centre to complete the process.</p>\n<p>?We want to make the process simpler, better and smarter for our customers but also for our bankers,? says Hatton. ?Helping customers instantly with the more common, easier questions makes the application experience better and lets our bankers spend time handling more complex questions.</p>\n<p>?Right now, RoboChat answers 75 per cent of customer questions on the first attempt,? she says, adding the goal is to get to at least 80 per cent accuracy. By using AI and cloud computing, organisations can do things faster and cheaper. ?Things that [used to] cost millions of dollars now cost hundreds,? she says.</p>\n<p>The benefits of early experimentation are also clear for blockchain or distributed ledger technology. CSIRO?s Data61 recently released a pair of reports into the technology. ?Blockchain technologies originally emerged to support new forms of digital currency, but now hold promise as a new foundation for transactions in society,? noted Data61. Among these potential uses are that it could support payments, escrow, notarisation, voting, registration and automated contracts or business processes.</p>\n<p>The reports posit four blockchain scenarios to help organisations shape their thinking about the technology that hinge around aspiration, transformation, new equilibrium and collapse.</p>\n<p>ANZ Bank is hitching itself to the transformation scenario with a blockchain trial to digitise the bank guarantee process in commercial leasing.</p>\n<p>Nigel Dobson, the bank?s general manager wholesale digital, says ANZ, Westpac, Scentre Group and IBM have proved a blockchain can digitise, manage, share, change, amend and make a claim on a bank guarantee. Ultimately he envisages a blockchain-based bank guarantee utility being developed to support all tenants, banks and property agents.</p>\n<p>Overlaid with a cognitive platform, the process would not only be streamlined, it would be far more valuable to all the participants. ?There is a lot of data we are generating here: identifying the tenant, landlord, specific lease, specific property and specific segment of that property,? says Dobson. Add in the data the banks already hold about tenants and their supply chains and, he believes, ?there is a profound opportunity to use advanced analytics and predictive modelling to give insights to the tenant, the landlord and the bank.</p>\n<p>?If you expand the scope of the network to other documents or instruments, you are probably scaling exponentially the data that you could observe and the conclusions you might draw.?</p>\n",
            "small_heading": "SIMPLER, BETTER, SMARTER",
            "section_colour": "#07909f",
            "text_colour": "#ffffff",
            "heading_colour": "#ffffff"
        }, {
            "acf_fc_layout": "One_image_one_quote",
            "the_image": {
                "ID": 934,
                "id": 934,
                "title": "first-picture-smaller",
                "filename": "first-picture-smaller.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "first-picture-smaller-2",
                "date": "2017-11-08 10:33:34",
                "modified": "2017-11-08 10:33:37",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 679,
                "height": 515,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller-300x228.jpg",
                    "medium-width": 300,
                    "medium-height": 228,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller.jpg",
                    "medium_large-width": 679,
                    "medium_large-height": 515,
                    "large": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller.jpg",
                    "large-width": 679,
                    "large-height": 515,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller-24x18.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 18,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller-36x27.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 27,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/first-picture-smaller-48x36.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 36
                }
            },
            "quote": "THERE IS A PROFOUND <br />\r\nOPPORTUNITY TO USE <br />\r\nADVANCED ANALYTICS <br />\r\nAND PREDICTIVE MODELLING.",
            "quoter": "NIGEL DOBSON, ANZ",
            "section_colour": "#ffffff"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>Financial services is just one area that blockchain will affect; supply chains, Internet of Things (IoT), risk management, digital rights management and healthcare are poised for dramatic change using blockchain networks.</p>\n<p>Michael Aaron, IBM ANZ blockchain leader, says ultimately the technology will facilitate intracompany and intercompany transactions, to promote efficiency, cut costs and enable new business models. Add into that mix quantum computing and it will be possible to do things we can?t think of now because we don?t have the computing capacity as yet to run the encryption and consensus algorithms fast enough.</p>\n<p>Quantum computing potentially opens the door for homomorphic encryption applications where work can be performed on encrypted data. This allows hyper- personalisation without sacrificing privacy. Williams agrees quantum computing will prove disruptive. ?The inescapable characteristic of a disruptive technology is that we can predict it will have a massive impact, but are not able to predict exactly how it will transform business, society and the global economy,? she says.</p>\n<p>?The most effective innovation strategy is to play and experiment, to be well placed to seize opportunities early and to shape the new paradigm to your advantage. Australia and Australian business leaders such as Telstra and CBA are working with universities and the Australian government to ensure the nation is a player in the new world order that quantum computing will create.?</p>\n<p>The team led by Michelle Simmons, Scientia Professor of Physics at the University of New South Wales and director of the Centre for Quantum Computation and Communication Technology, is focused on making reproducible, high-quality qubits (quantum bits), the building blocks of powerful quantum computers. Although commercialisation is five to10 years off, she says.</p>\n<p>Already algorithms are being conceived for quantum computing, particularly in the optimisation and machine learning space. ?There are a variety of uses in financial services, including cryptography, complex behaviour analysis, prediction and hyper-personalisation,? says Simmons.</p>\n<p>There isn?t yet a quantum computer large enough to tackle real industry and societal problems, but organisations are investing in the technology. IBM for example has built a working 16-qubit quantum system, which is available to researchers, and has plans to make a larger commercial system ? IBM Q ? available to businesses, says Dr Joanna Batstone, vice-president and lab director, IBM Research Australia, and chief technology officer for IBM ANZ.</p>\n<p>She says potential applications are diverse, including molecular simulation for drug and new materials development. Quantum will also help deliver exact solutions to problems that today?s computers can only approximate. Meshing quantum with machine learning and cognitive computing platforms, for example, could provide highly specific logistics planning, or untangle the complexity of molecular interactions leading to new medicines.</p>\n<p>?Quantum systems are designed to tackle problems that are too complex and exponential in nature for classical computing systems to handle. They give you the promise of finding a much more accurate solution in a faster time period,? says Batstone, adding that computing is now at a threshold similar to that in the 1950s, at the dawn of programmable computers.</p>\n<p>?The world we live in is a quantum world; quantum systems will enable us to understand and model the world in which we live in a fundamentally different way from the way we have been doing classical computing for the last 60 to 70 years,? she says.</p>\n",
            "small_heading": "HYPER-PERSONALISATION",
            "section_colour": "#ffffff",
            "text_colour": "#0a0a0a",
            "heading_colour": "#4f4f4f"
        }, {
            "acf_fc_layout": "two_images_one_quote",
            "image_one": {
                "ID": 935,
                "id": 935,
                "title": "brain-smaller",
                "filename": "brain-smaller.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/brain-smaller.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "brain-smaller-2",
                "date": "2017-11-08 10:33:58",
                "modified": "2017-11-08 10:34:00",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 485,
                "height": 605,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/brain-smaller-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/brain-smaller-240x300.jpg",
                    "medium-width": 240,
                    "medium-height": 300,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/brain-smaller.jpg",
                    "medium_large-width": 485,
                    "medium_large-height": 605,
                    "large": "http://immersive/wp-content/uploads/2017/08/brain-smaller.jpg",
                    "large-width": 485,
                    "large-height": 605,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/brain-smaller-19x24.jpg",
                    "menu-24x24-width": 19,
                    "menu-24x24-height": 24,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/brain-smaller-29x36.jpg",
                    "menu-36x36-width": 29,
                    "menu-36x36-height": 36,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/brain-smaller-38x48.jpg",
                    "menu-48x48-width": 38,
                    "menu-48x48-height": 48
                }
            },
            "image_two": {
                "ID": 936,
                "id": 936,
                "title": "second-picture-smaller",
                "filename": "second-picture-smaller.jpg",
                "url": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller.jpg",
                "alt": "",
                "author": "5",
                "description": "",
                "caption": "",
                "name": "second-picture-smaller-2",
                "date": "2017-11-08 10:34:09",
                "modified": "2017-11-08 10:34:10",
                "mime_type": "image/jpeg",
                "type": "image",
                "icon": "http://immersive/wp-includes/images/media/default.png",
                "width": 582,
                "height": 437,
                "sizes": {
                    "thumbnail": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller-150x150.jpg",
                    "thumbnail-width": 150,
                    "thumbnail-height": 150,
                    "medium": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller-300x225.jpg",
                    "medium-width": 300,
                    "medium-height": 225,
                    "medium_large": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller.jpg",
                    "medium_large-width": 582,
                    "medium_large-height": 437,
                    "large": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller.jpg",
                    "large-width": 582,
                    "large-height": 437,
                    "menu-24x24": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller-24x18.jpg",
                    "menu-24x24-width": 24,
                    "menu-24x24-height": 18,
                    "menu-36x36": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller-36x27.jpg",
                    "menu-36x36-width": 36,
                    "menu-36x36-height": 27,
                    "menu-48x48": "http://immersive/wp-content/uploads/2017/08/second-picture-smaller-48x36.jpg",
                    "menu-48x48-width": 48,
                    "menu-48x48-height": 36
                }
            },
            "second_image_caption": "Dr Joanna Batstone, vice-president and lab director, IBM Research Australia",
            "width": "60%",
            "quote": "Quantum systems give <br />\r\nyou the promise of <br />\r\nfinding a much more<br />\r\naccurate solutions in <br />\r\na faster time period",
            "section_colour": "#ffffff"
        }, {
            "acf_fc_layout": "text",
            "content": "<p>As well as providing cloud-based access to quantum computing to speed access and experimentation, IBM is giving access to the Watson cognitive platform via application programming interfaces (APIs).</p>\n<p>Organisations don?t have to build a cognitive solution from scratch ? instead they can plug into Watson using an API. Australian start-ups Lingmo International and Ooovuu, for example, have developed, respectively, a Watson-powered earpiece that translates spoken conversations and a video- on-demand news platform connecting viewers to content based on their preferences.</p>\n<p>Fergal Murphy, IBM business unit lead for industry platforms, says there are now 40 separate APIs covering verticals such as health, financial services, banking, insurance and wealth management, and horizontal applications such as IoT, marketing and customer engagement.</p>\n<p>In the financial sector, the ability to scale corporate knowledge and systematise regulatory compliance is driving many deployments.</p>\n<p>?Your average bank in Australia is spending hundreds of millions on regulatory compliance activities. The global banks are spending more than $1 billion a year on regulatory compliance,? says Murphy.</p>\n<p>Streamlining and scaling compliance is Promontory Group?s focus, says Dr Jeff Carmichael, its Australasian chief executive. Its specialties include anti-money-laundering and know-your-customer (AML/KYC) tasks, compliant financial advice and risk governance.</p>\n<p>The challenge for Promontory was that its human consulting services were not scalable. Having a cognitive platform such as Watson ingest the regulatory insights of its consultants allowed it to scale. ?Lots of the groundwork can be done by a good cognitive system,? says Carmichael. In 2016, Promontory was acquired by IBM. The company had already worked with Commonwealth Bank on its financial advice review program.</p>\n<p>Carmichael says manual review systems only allow a small sample of advice to be tested. ?But what if every statement of advice is reviewed? That could prevent running into a major problem two to three years down the track that costs hundreds of millions of dollars.?</p>\n<p>While such a cognitive platform remains in development, the approach will lower the cost of compliance and increase the quality of compliance, Carmichael believes. Broader societal benefits are also possible: in Singapore, IBM and Promontory are working to establish a financial crime utility leveraging both blockchain and cognitive computing technologies for AML/KYC tasks.</p>\n<p>The trifecta of cognitive computing blockchain and quantum computing will prove enormously transformative with the opportunity for significantly more streamlined and automated processing says IBM?s Murphy.</p>\n<p>?Imagine what it would be like to get an instant mortgage or an instant financial plan; that?s where I?m seeing disruption in the very near future.?</p>\n",
            "small_heading": "SCALE CORPORATE KNOWLEDGE",
            "section_colour": "#ffffff",
            "text_colour": "",
            "heading_colour": "#4f4f4f"
        }],
        "text_color": "#454545",
        "share_block_background": "#ffffff",
        "sub_excerpt": "",
        "share_block_color": "#000000",
        "full_width_hero": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/a-future-fuelled-by-data/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/646"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=646"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/646/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=646"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=646"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=646"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 645,
    "date": "2017-08-15T08:56:36",
    "date_gmt": "2017-08-14T22:56:36",
    "guid": {
        "rendered": "http://localhost/?page_id=58"
    },
    "modified": "2017-11-08T21:36:23",
    "modified_gmt": "2017-11-08T10:36:23",
    "slug": "ibm-accelerating-intelligence",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/ibm-accelerating-intelligence/",
    "title": {
        "rendered": "index"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "sub_title": "",
        "page_background": false,
        "hero": {
            "ID": 939,
            "id": 939,
            "title": "IMB-image-Hero",
            "filename": "IMB-image-Hero.jpg",
            "url": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero.jpg",
            "alt": "",
            "author": "5",
            "description": "",
            "caption": "",
            "name": "imb-image-hero-3",
            "date": "2017-11-08 10:36:05",
            "modified": "2017-11-08 10:36:06",
            "mime_type": "image/jpeg",
            "type": "image",
            "icon": "http://immersive/wp-includes/images/media/default.png",
            "width": 1866,
            "height": 1690,
            "sizes": {
                "thumbnail": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-150x150.jpg",
                "thumbnail-width": 150,
                "thumbnail-height": 150,
                "medium": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-300x272.jpg",
                "medium-width": 300,
                "medium-height": 272,
                "medium_large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-768x696.jpg",
                "medium_large-width": 768,
                "medium_large-height": 696,
                "large": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-1024x927.jpg",
                "large-width": 1024,
                "large-height": 927,
                "menu-24x24": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-24x22.jpg",
                "menu-24x24-width": 24,
                "menu-24x24-height": 22,
                "menu-36x36": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-36x33.jpg",
                "menu-36x36-width": 36,
                "menu-36x36-height": 33,
                "menu-48x48": "http://immersive/wp-content/uploads/2017/08/IMB-image-Hero-48x43.jpg",
                "menu-48x48-width": 48,
                "menu-48x48-height": 43
            }
        },
        "excerpt": "",
        "next_post": false,
        "letter_repeater": [{
            "letter": "A",
            "color": "#d14e2a"
        }, {
            "letter": "c",
            "color": "#db812d"
        }, {
            "letter": "c",
            "color": "#e6a430"
        }, {
            "letter": "e",
            "color": "#f3ca31"
        }, {
            "letter": "l",
            "color": "#64b054"
        }, {
            "letter": "e",
            "color": "#6ab58e"
        }, {
            "letter": "r",
            "color": "#144477"
        }, {
            "letter": "a",
            "color": "#1987b0"
        }, {
            "letter": "t",
            "color": "#64a2d9"
        }, {
            "letter": "i",
            "color": "#5e5686"
        }, {
            "letter": "n",
            "color": "#752b50"
        }, {
            "letter": "g",
            "color": "#e1cb69"
        }],
        "text_color": "#454545",
        "sub_excerpt": "",
        "radial_background": false,
        "full_width_hero": false,
        "story_by": "",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/ibm-accelerating-intelligence/",
        "og_tags": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/645"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=645"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/645/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=645"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=645"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=645"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}, {
    "id": 644,
    "date": "2017-08-10T08:43:23",
    "date_gmt": "2017-08-09T22:43:23",
    "guid": {
        "rendered": "http://localhost/?page_id=36"
    },
    "modified": "2017-11-08T21:37:01",
    "modified_gmt": "2017-11-08T10:37:01",
    "slug": "listing",
    "status": "publish",
    "type": "post",
    "link": "http://immersive/listing/",
    "title": {
        "rendered": "Listing"
    },
    "content": {
        "rendered": "",
        "protected": false
    },
    "excerpt": {
        "rendered": "",
        "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [17, 18],
    "tags": [],
    "acf": {
        "sub_title": "",
        "page_background": {
            "ID": 84,
            "id": 84,
            "title": "Video Type",
            "filename": "?post_type=acf-field&p=84",
            "url": false,
            "alt": "",
            "author": "1",
            "description": "a:13:{s:4:\"type\";s:6:\"select\";s:12:\"instructions\";s:0:\"\";s:8:\"required\";i:0;s:7:\"wrapper\";a:3:{s:5:\"width\";s:0:\"\";s:5:\"class\";s:0:\"\";s:2:\"id\";s:0:\"\";}s:7:\"choices\";a:3:{s:7:\"youtube\";s:7:\"Youtube\";s:10:\"brightcove\";s:10:\"Brightcove\";s:9:\"wordpress\";s:9:\"Wordpress\";}s:13:\"default_value\";a:1:{i:0;s:7:\"youtube\";}s:10:\"allow_null\";i:0;s:8:\"multiple\";i:0;s:2:\"ui\";i:0;s:4:\"ajax\";i:0;s:13:\"return_format\";s:5:\"value\";s:11:\"placeholder\";s:0:\"\";s:17:\"conditional_logic\";a:2:{i:0;a:1:{i:0;a:3:{s:5:\"field\";s:19:\"field_59910d54c93be\";s:8:\"operator\";s:2:\"==\";s:5:\"value\";s:10:\"type-video\";}}i:1;a:1:{i:0;a:3:{s:5:\"field\";s:19:\"field_59910d54c93be\";s:8:\"operator\";s:2:\"==\";s:5:\"value\";s:18:\"type-video-feature\";}}}}",
            "caption": "video_type",
            "name": "field_599293b813b0c",
            "date": "2017-11-08 09:23:40",
            "modified": "2017-11-08 09:23:40",
            "mime_type": "",
            "type": "",
            "icon": "http://immersive/wp-includes/images/media/default.png"
        },
        "hero": false,
        "excerpt": "",
        "next_post": false,
        "story_by": "",
        "share_block_background": "#ffffff",
        "share_block_color": "#000000",
        "content": false,
        "full_width_hero": false,
        "text_color": "#454545",
        "sub_excerpt": "",
        "radial_background": false,
        "canonical_url": "https://dev-ibm-ai.pantheonsite.io/listing/",
        "og_tags": false,
        "letter_repeater": false
    },
    "_links": {
        "self": [{
            "href": "http://immersive/wp-json/wp/v2/posts/644"
        }],
        "collection": [{
            "href": "http://immersive/wp-json/wp/v2/posts"
        }],
        "about": [{
            "href": "http://immersive/wp-json/wp/v2/types/post"
        }],
        "author": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/users/1"
        }],
        "replies": [{
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/comments?post=644"
        }],
        "version-history": [{
            "href": "http://immersive/wp-json/wp/v2/posts/644/revisions"
        }],
        "wp:attachment": [{
            "href": "http://immersive/wp-json/wp/v2/media?parent=644"
        }],
        "wp:term": [{
            "taxonomy": "category",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/categories?post=644"
        }, {
            "taxonomy": "post_tag",
            "embeddable": true,
            "href": "http://immersive/wp-json/wp/v2/tags?post=644"
        }],
        "curies": [{
            "name": "wp",
            "href": "https://api.w.org/{rel}",
            "templated": true
        }]
    }
}]


