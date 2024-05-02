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
                    case 'core/query':
                        switch (attributes.blockType) {
                            case 'core/post-template':
                                customClassName = 'custom-post-template-class';
                                break;
                        }
                    break;
                case 'core/button':
                    customClassName = 'custom-button-class'; // Custom class for button
                    break;
                case 'core/image':
                    customClassName = 'custom-image-class'; // Custom class for image
                    break;
                case 'core/query-title':
                    customClassName = 'text-3xl font-medium text-fuchsia-500';
                    break;
                default:
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
