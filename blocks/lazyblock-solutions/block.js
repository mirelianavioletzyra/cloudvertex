/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('lazycatcustomblocks/solutions-block', {
    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save,

    attributes: {
        title: {
            type: 'string',
            default: 'solutions',
        },
        sub_heading: {
            type: 'string',
            default: 'What we offer',
        },
        solution: {
            type: 'array',
            default: [
                {
                    icon: { url: '' },
                    solution_name: 'solution 1',
                },
                {
                    icon: { url: '' },
                    solution_name: 'solution 2',
                },
                {
                    icon: { url: '' },
                    solution_name: 'solution 3',
                },
            ],
        },
        gradientClass: {
            type: 'string',
            default: 'gradient-1',
        },
    },
});