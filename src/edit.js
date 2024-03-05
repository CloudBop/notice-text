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

export default function Edit( { attributes } ) {
	// console.log('attributes', attributes)
	const classes =
		//
		attributes.className
			? attributes.className
			: // expected in block.json
			  attributes?.defaultClass || 'noClass';
	return (
		<div { ...useBlockProps( { className: classes } ) }>
			<InnerBlocks
				template={ [
					[
						'core/heading',
						{ content: 'A heading for the notice.' },
					],
					[
						'blox/notice-textbox',
						{
							copy: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero expedita nemo unde. At esse deserunt laboriosam ducimus officiis, a, tenetur harum ipsum molestiae maiores alias praesentium, id nam quam?',
						},
					],
				] }
				allowedBlocks={ [ 'core/heading', 'blox/notice-textbox' ] }
			/>
		</div>
	);
}
