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

    // Update the service attribute when the input field changes
    const onChangeServiceHandler = (newService, index) => {
        const updatedServices = [...attributes.service];
        updatedServices[index] = newService;
        setAttributes({ service: updatedServices });
    };

    // Add a new service item
    const addServiceHandler = () => {
        const newService = { icon: { url: '' }, service_name: '' };
        setAttributes({ service: [...attributes.service, newService] });
    };

    // Remove a service item
    const removeServiceHandler = (index) => {
        const updatedServices = [...attributes.service];
        updatedServices.splice(index, 1);
        setAttributes({ service: updatedServices });
    };

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                {/* Add controls for title and sub_heading here */}
            </InspectorControls>
            <div className="services-block">
                <h2>{attributes.title}</h2>
                <h3>{attributes.sub_heading}</h3>
                {attributes.service.map((service, index) => (
                    <div key={index} className="service">
                        <input
                            type="text"
                            value={service.service_name}
                            onChange={(event) =>
                                onChangeServiceHandler(
                                    { ...service, service_name: event.target.value },
                                    index
                                )
                            }
                        />
                        <input
                            type="text"
                            value={service.icon.url}
                            onChange={(event) =>
                                onChangeServiceHandler(
                                    { ...service, icon: { url: event.target.value } },
                                    index
                                )
                            }
                        />
                        <button onClick={() => removeServiceHandler(index)}>Remove</button>
                    </div>
                ))}
                </div>
            <button onClick={addServiceHandler}>Add Service</button>
        </div>
    );
};

export default Edit;