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
                    customClassName = 'custom-media-text-class'; // Custom class for media text
                    break;
                case 'core/heading':
                    // Apply different classes based on heading level
                    switch (attributes.level) {
                        case 1:
                            customClassName = 'custom-h1-class';
                            break;
                        case 2:
                            customClassName = 'custom-h2-class';
                            break;
                        case 3:
                            customClassName = 'custom-h3-class';
                            break;
                        case 4:
                            customClassName = 'custom-h4-class';
                            break;
                        case 5:
                            customClassName = 'custom-h5-class';
                            break;
                        case 6:
                            customClassName = 'custom-h6-class';
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
