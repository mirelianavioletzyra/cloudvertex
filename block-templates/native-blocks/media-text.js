(function(wp) {
    var addCustomClassToBlocks = wp.hooks.addFilter(
        'blocks.getSaveElement',
        'my-theme/custom-class',
        function(element, blockType, attributes) {
            if (blockType.name !== 'core/paragraph') {
                return element;
            }

            // Check if children are array and clone element accordingly
            const children = Array.isArray(element.props.children) 
                ? element.props.children 
                : [element.props.children];

            // Clone the element with the new class
            return wp.element.cloneElement(element, { className: 'text-gray-950' }, children);
        }
    );
})(window.wp);
