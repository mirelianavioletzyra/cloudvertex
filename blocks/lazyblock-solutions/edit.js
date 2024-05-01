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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
    const onChangesolutionHandler = (newsolution, index) => {
        const updatedsolutions = [...attributes.solution];
        updatedsolutions[index] = newsolution;
        setAttributes({ solution: updatedsolutions });
    };

    // Add a new solution item
    const addsolutionHandler = () => {
        const newsolution = { icon: { url: '' }, solution_name: '' };
        setAttributes({ solution: [...attributes.solution, newsolution] });
    };

    // Remove a solution item
    const removesolutionHandler = (index) => {
        const updatedsolutions = [...attributes.solution];
        updatedsolutions.splice(index, 1);
        setAttributes({ solution: updatedsolutions });
    };

    // Update the gradientClass attribute when the select field changes
    const onChangeGradientClassHandler = (newGradientClass) => {
        setAttributes({ gradientClass: newGradientClass });
    };

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                {/* Add controls for title, sub_heading, and gradientClass here */}
                <PanelBody title={__('Settings', 'your-text-domain')}>
                    <SelectControl
                        label={__('Gradient Class', 'your-text-domain')}
                        value={attributes.gradientClass}
                        options={[
                            { label: __('Gradient 1', 'your-text-domain'), value: 'gradient-1' },
                            { label: __('Gradient 2', 'your-text-domain'), value: 'gradient-2' },
                            { label: __('Gradient 3', 'your-text-domain'), value: 'gradient-3' },
                            // Add more gradient options as needed
                        ]}
                        onChange={onChangeGradientClassHandler}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="solutions-block">
                <h2>{attributes.title}</h2>
                <h3>{attributes.sub_heading}</h3>
                {attributes.solution.map((solution, index) => (
                    <div key={index} className="solution">
                        <input
                            type="text"
                            value={solution.solution_name}
                            onChange={(event) =>
                                onChangesolutionHandler(
                                    { ...solution, solution_name: event.target.value },
                                    index
                                )
                            }
                        />
                        <input
                            type="text"
                            value={solution.icon.url}
                            onChange={(event) =>
                                onChangesolutionHandler(
                                    { ...solution, icon: { url: event.target.value } },
                                    index
                                )
                            }
                        />
                        <button onClick={() => removesolutionHandler(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={addsolutionHandler}>Add solution</button>
        </div>
    );
};

export default Edit;