(function(wp) {
    wp.hooks.addFilter(
        'blocks.getSaveElement',
        'my-theme/custom-class', 
        function(element, blockType, attributes) {
            let customClassName = '';

            switch (blockType.name) {
                case 'core/paragraph':
                    customClassName = 'text-gray-800'; // Custom class for paragraphs
                    break;
                case 'core/media-text':
                    customClassName = 'px-0 py-8'; // Custom class for media text
                    break;
                case 'core/heading':
                    // Apply different classes based on heading level
                    switch (attributes.level) {
                        case 1:
                            customClassName = 'text-3xl font-medium text-fuchsia-500';
                            break;
                        case 2:
                            customClassName = 'text-2xl font-medium text-fuchsia-500';
                            break;
                        case 3:
                            customClassName = 'text-xl font-medium text-fuchsia-500';
                            break;
                        case 4:
                            customClassName = 'text-lg font-medium text-fuchsia-500';
                            break;
                        case 5:
                            customClassName = 'text-regular font-medium text-fuchsia-500';
                            break;
                        case 6:
                            customClassName = 'text-sm font-medium text-fuchsia-500';
                            break;
                    }
                    break;
                case 'core/button':
                    customClassName = 'custom-button-class'; // Custom class for button
                    break;
                case 'core/image':
                    customClassName = 'custom-image-class'; // Custom class for image
                    break;
                // Add more cases as needed for other blocks

                // How many native blocks are there? 
                // https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#native-blocks
                // Ok so this is the full list https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
                // I'd like to have a list of all the blocks that are available in the editor as a case in this function so I can add classes to anything easily. Please help me do this by adding each type of block (minus what we already did) as a case to this function the same way as above.

                // I'm going to add a few more cases to this function to help you get started.
                case 'core/quote':
                    customClassName = 'custom-quote-class'; // Custom class for quote
                    break;
                case 'core/separator':
                    customClassName = 'custom-separator-class'; // Custom class for separator
                    break;
                case 'core/cover':
                    customClassName = 'custom-cover-class'; // Custom class for cover
                    break;
                case 'core/gallery':
                    customClassName = 'custom-gallery-class'; // Custom class for gallery
                    break;
                case 'core/list':
                    customClassName = 'custom-list-class'; // Custom class for list
                    break;
                case 'core/quote':
                    customClassName = 'custom-quote-class'; // Custom class for quote
                    break;
                case 'core/table':
                    customClassName = 'custom-table-class'; // Custom class for table
                    break;
                case 'core/verse':
                    customClassName = 'custom-verse-class'; // Custom class for verse
                    break;
                case 'core/audio':
                    customClassName = 'custom-audio-class'; // Custom class for audio
                    break;
                case 'core/button':
                    customClassName = 'custom-button-class'; // Custom class for button
                    break;
                case 'core/column':
                    customClassName = 'custom-column-class'; // Custom class for column
                    break;
                case 'core/columns':
                    customClassName = 'custom-columns-class'; // Custom class for columns
                    break;
                case 'core/file':
                    customClassName = 'custom-file-class'; // Custom class for file
                    break;
                case 'core/image':
                    customClassName = 'custom-image-class'; // Custom class for image
                    break;
                case 'core/paragraph':
                    customClassName = 'custom-paragraph-class'; // Custom class for paragraph
                    break;
                case 'core/preformatted':
                    customClassName = 'custom-preformatted-class'; // Custom class for preformatted
                    break;
                case 'core/pullquote':
                    customClassName = 'custom-pullquote-class'; // Custom class for pullquote
                    break;
                case 'core/shortcode':
                    customClassName = 'custom-shortcode-class'; // Custom class for shortcode
                    break;
                case 'core/spacer':
                    customClassName = 'custom-spacer-class'; // Custom class for spacer
                    break;
                case 'core/subhead':
                    customClassName = 'custom-subhead-class'; // Custom class for subhead
                    break;
                case 'core/text-columns':
                    customClassName = 'custom-text-columns-class'; // Custom class for text-columns
                    break;
                case 'core/video':
                    customClassName = 'custom-video-class'; // Custom class for video
                    break;
                case 'core/archives':
                    customClassName = 'custom-archives-class'; // Custom class for archives
                    break;
                case 'core/audio':
                    customClassName = 'custom-audio-class'; // Custom class for audio
                    break;
                case 'core/calendar':
                    customClassName = 'custom-calendar-class'; // Custom class for calendar
                    break;
                case 'core/categories':
                    customClassName = 'custom-categories-class'; // Custom class for categories
                    break;
                case 'core/latest-comments':
                    customClassName = 'custom-latest-comments-class'; // Custom class for latest-comments
                    break;
                case 'core/latest-posts':
                    customClassName = 'custom-latest-posts-class'; // Custom class for latest-posts
                    break;
                    // Social blocks start
                case 'core/rss':
                    customClassName = 'custom-rss-class'; // Custom class for rss
                    break;
                case 'core/search':
                    customClassName = 'custom-search-class'; // Custom class for search
                    break;
                case 'core/tag-cloud':
                    customClassName = 'custom-tag-cloud-class'; // Custom class for tag-cloud
                    break;
                case 'core/text':
                    customClassName = 'custom-text-class'; // Custom class for text
                    break;
                case 'core-embed/facebook':
                    customClassName = 'custom-facebook-class'; // Custom class for facebook
                    break;
                case 'core-embed/instagram':
                    customClassName = 'custom-instagram-class'; // Custom class for instagram
                    break;
                case 'core-embed/twitter':
                    customClassName = 'custom-twitter-class'; // Custom class for twitter
                    break;
                case 'core-embed/wordpress':
                    customClassName = 'custom-wordpress-class'; // Custom class for wordpress
                    break;
                case 'core-embed/youtube':
                    customClassName = 'custom-youtube-class'; // Custom class for youtube
                    break;
                case 'core-embed/vimeo':
                    customClassName = 'custom-vimeo-class'; // Custom class for vimeo
                    break;
                case 'core-embed/soundcloud':
                    customClassName = 'custom-soundcloud-class'; // Custom class for soundcloud
                    break;
                case 'core-embed/spotify':
                    customClassName = 'custom-spotify-class'; // Custom class for spotify
                    break;
                case 'core-embed/flickr':
                    customClassName = 'custom-flickr-class'; // Custom class for flickr
                    break;
                case 'core-embed/imgur':
                    customClassName = 'custom-imgur-class'; // Custom class for imgur
                    break;
                case 'core-embed/animoto':
                    customClassName = 'custom-animoto-class'; // Custom class for animoto
                    break;
                case 'core-embed/cloudup':
                    customClassName = 'custom-cloudup-class'; // Custom class for cloudup
                    break;
                case 'core-embed/collegehumor':
                    customClassName = 'custom-collegehumor-class'; // Custom class for collegehumor
                    break;
                case 'core-embed/dailymotion':
                    customClassName = 'custom-dailymotion-class'; // Custom class for dailymotion
                    break;
                case 'core-embed/funnyordie':
                    customClassName = 'custom-funnyordie-class'; // Custom class for funnyordie
                    break;
                case 'core-embed/hulu':
                    customClassName = 'custom-hulu-class'; // Custom class for hulu
                    break;
                case 'core-embed/imgur':
                    customClassName = 'custom-imgur-class'; // Custom class for imgur
                    break;
                case 'core-embed/issuu':
                    customClassName = 'custom-issuu-class'; // Custom class for issuu
                    break;
                case 'core-embed/kickstarter':
                    customClassName = 'custom-kickstarter-class'; // Custom class for kickstarter
                    break;
                case 'core-embed/meetup-com':
                    customClassName = 'custom-meetup-com-class'; // Custom class for meetup-com
                    break;
                case 'core-embed/mixcloud':
                    customClassName = 'custom-mixcloud-class'; // Custom class for mixcloud
                    break;
                case 'core-embed/photobucket':
                    customClassName = 'custom-photobucket-class'; // Custom class for photobucket
                    break;
                case 'core-embed/polldaddy':
                    customClassName = 'custom-polldaddy-class'; // Custom class for polldaddy
                    break;
                case 'core-embed/reddit':
                    customClassName = 'custom-reddit-class'; // Custom class for reddit
                    break;
                case 'core-embed/reverbnation':
                    customClassName = 'custom-reverbnation-class'; // Custom class for reverbnation
                    break;
                case 'core-embed/screencast':
                    customClassName = 'custom-screencast-class'; // Custom class for screencast
                    break;
                case 'core-embed/scribd':
                    customClassName = 'custom-scribd-class'; // Custom class for scribd
                    break;
                case 'core-embed/slideshare':
                    customClassName = 'custom-slideshare-class'; // Custom class for slideshare
                    break;
                case 'core-embed/smugmug':
                    customClassName = 'custom-smugmug-class'; // Custom class for smugmug
                    break;
                case 'core-embed/speaker':
                    customClassName = 'custom-speaker-class'; // Custom class for speaker
                    break;
                case 'core-embed/ted':
                    customClassName = 'custom-ted-class'; // Custom class for ted
                    break;
                case 'core-embed/tumblr':
                    customClassName = 'custom-tumblr-class'; // Custom class for tumblr
                    break;
                case 'core-embed/videopress':
                    customClassName = 'custom-videopress-class'; // Custom class for videopress
                    break;
                case 'core-embed/wordpress-tv':
                    customClassName = 'custom-wordpress-tv-class'; // Custom class for wordpress-tv
                    break;
                case 'core-embed/amazon-kindle':
                    customClassName = 'custom-amazon-kindle-class'; // Custom class for amazon-kindle
                    break;
                case 'core-embed/amazon':
                    customClassName = 'custom-amazon-class'; // Custom class for amazon
                    break;
                case 'core-embed/anchor':
                    customClassName = 'custom-anchor-class'; // Custom class for anchor
                    break;
                case 'core-embed/cloudup':
                    customClassName = 'custom-cloudup-class'; // Custom class for cloudup
                    break;
                case 'core-embed/crowdsignal':
                    customClassName = 'custom-crowdsignal-class'; // Custom class for crowdsignal
                    break;
                case 'core-embed/dailymotion':
                    customClassName = 'custom-dailymotion-class'; // Custom class for dailymotion
                    break;
                case 'core-embed/flickr':
                    customClassName = 'custom-flickr-class'; // Custom class for flickr
                    break;
                case 'core-embed/imgur':
                    customClassName = 'custom-imgur-class'; // Custom class for imgur
                    break;
                case 'core-embed/issuu':
                    customClassName = 'custom-issuu-class'; // Custom class for issuu
                    break;
                case 'core-embed/kickstarter':
                    customClassName = 'custom-kickstarter-class'; // Custom class for kickstarter
                    break;
                case 'core-embed/meetup-com':
                    customClassName = 'custom-meetup-com-class'; // Custom class for meetup-com
                    break;
                case 'core-embed/mixcloud':
                    customClassName = 'custom-mixcloud-class'; // Custom class for mixcloud
                    break;
                case 'core-embed/polldaddy':
                    customClassName = 'custom-polldaddy-class'; // Custom class for polldaddy
                    break;
                case 'core-embed/reddit':
                    customClassName = 'custom-reddit-class'; // Custom class for reddit
                    break;
                case 'core-embed/reverbnation':
                    customClassName = 'custom-reverbnation-class'; // Custom class for reverbnation
                    break;
                case 'core-embed/screencast':
                    customClassName = 'custom-screencast-class'; // Custom class for screencast
                    break;
            }

            if (customClassName) {
                const existingClasses = element.props.className || '';
                const newClassNames = `${existingClasses} ${customClassName}`.trim();

                return wp.element.cloneElement(element, { className: newClassNames });
            }

            return element;
        }
    );
})(window.wp);
