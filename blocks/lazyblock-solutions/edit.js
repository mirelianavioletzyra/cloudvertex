/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls, PanelBody, SelectControl } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { gradientLabels } from 'path/to/lazyblock/plugin/gradientLabels';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {Object} [props.attributes]
 * @param {string} [props.setAttributes]
 * @param {string} [props.isSelected]
 * @return {WPElement}               Element to render.
 */
const Edit = (props) => {
    const { attributes, setAttributes } = props;

    // Update the title attribute when the input field changes
    const onChangeTitleHandler = (newTitle) => {
        setAttributes({ title: newTitle });
    };

    // Update the sub_heading attribute when the input field changes
    const onChangeSubHeadingHandler = (newSubHeading) => {
        setAttributes({ sub_heading: newSubHeading });
    };

    // Update the solution attribute when the input field changes
    const onChangeSolutionHandler = (newSolution, index) => {
        const updatedSolutions = [...attributes.solution];
        updatedSolutions[index] = newSolution;
        setAttributes({ solution: updatedSolutions });
    };

    // Add a new solution item
    const addSolutionHandler = () => {
        const newSolution = { icon: { url: '' }, solution_name: '' };
        setAttributes({ solution: [...attributes.solution, newSolution] });
    };

    // Remove a solution item
    const removeSolutionHandler = (index) => {
        const updatedSolutions = [...attributes.solution];
        updatedSolutions.splice(index, 1);
        setAttributes({ solution: updatedSolutions });
    };

    const gradientOptions = Object.entries(gradientLabels).map(([value, label]) => ({
        label: __(label, 'your-text-domain'),
        value,
    }));    

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
            <InspectorControls>
            <PanelBody title={__('Settings', 'your-text-domain')}>
                <SelectControl
                    label={__('Gradient', 'your-text-domain')}
                    value={attributes.gradient}
                    options={gradientOptions}
                    onChange={onChangeGradientHandler}
                />
            </PanelBody>
            </InspectorControls>
            </InspectorControls>
            <div className="solutions-block">
                <h2>{attributes.title}</h2>
                <h3>{attributes.sub_heading}</h3>
                {attributes.solution.map((solution, index) => (
                    <div key={index} className="solution bg-white rounded-lg">
                        <input
                            type="text"
                            value={solution.solution_name}
                            onChange={(event) =>
                                onChangeSolutionHandler(
                                    { ...solution, solution_name: event.target.value },
                                    index
                                )
                            }
                        />
                        <input
                            type="text"
                            value={solution.icon.url}
                            onChange={(event) =>
                                onChangeSolutionHandler(
                                    { ...solution, icon: { url: event.target.value } },
                                    index
                                )
                            }
                        />
                        <button onClick={() => removeSolutionHandler(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={addSolutionHandler}>Add Solution</button>
        </div>
    );
};

export default Edit;