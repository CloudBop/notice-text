/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
// import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ [
					[ 'core/heading', { placeholder: 'Lorem ipsum...' } ],
					[ 'core/paragraph', { placeholder: 'Lorem ipsum...' } ],
				] }
				template={ [ [ 'core/heading' ], [ 'core/paragraph' ] ] }
				// template={[
				// 	// array of arrays
				// 	['notice-text'],
				// 	['blocks-course/team-member'],
				// 	['blocks-course/team-member'],
				// 	//
				// ]}

				//  hook into array and provide block-attributes
				// template={[
				// 	//
				// 	[
				// 		'blox/notice-textbox',
				// 		// block attributes
				// 		{
				// 			name: 'Further information',
				// 			bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cumque labore fugit, illo cupiditate error fuga voluptates in, tempora odit voluptatibus. Excepturi minus et dolore consequatur perferendis quas saepe quia.',
				// 		},
				// 	]
				// ]}
				//
				// templateLock={'all'} // || "insert"
			/>
		</div>
	);
}
