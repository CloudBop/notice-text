/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './notice-textbox'; //no longer import this component
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from '../block.json';
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(
	metadata.name,
	// 'notice-text',
	// 'notice-text' ||
	// 'blox/notice-text'
	{
		/**
		 * @see ./edit.js
		 */
		edit: Edit,

		/**
		 * @see ./save.js
		 */
		save,

		variations: [
			{
				name: 'blox/warning-text',
				title: __( 'Warning Text Box' ),
				icon: 'warning',
				attributes: {
					className: 'is-style-warning',
				},

				// icon: 'format-quote',
				isActive: ( blockAttributes, variationAttributes ) => {
					return (
						variationAttributes?.className ===
						blockAttributes.className
					);
				},
				innerBlocks: [
					[
						'core/heading',
						{ level: 3, content: 'A heading for the notice.' },
					],
					[
						'blox/notice-textbox',
						{
							copy: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero expedita nemo unde. At esse deserunt laboriosam ducimus officiis, a, tenetur harum ipsum molestiae maiores alias praesentium, id nam quam?',
						},
					],
				],
			},
			{
				name: 'blox/error-text',
				title: __( 'Error Text Box' ),
				icon: 'dismiss',
				attributes: {
					className: 'is-style-error',
				},

				// icon: 'format-quote',
				isActive: ( blockAttributes, variationAttributes ) => {
					return (
						variationAttributes?.className ===
						blockAttributes.className
					);
				},
				innerBlocks: [
					[
						'core/heading',
						{ level: 3, content: 'A heading for the notice.' },
					],
					[
						'blox/notice-textbox',
						{
							copy: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero expedita nemo unde. At esse deserunt laboriosam ducimus officiis, a, tenetur harum ipsum molestiae maiores alias praesentium, id nam quam?',
						},
					],
				],
			},
			{
				name: 'blox/important-text',
				title: __( 'Important Text Box' ),
				icon: 'yes',
				attributes: {
					className: 'is-style-important',
				},

				// icon: 'format-quote',
				isActive: ( blockAttributes, variationAttributes ) => {
					return (
						variationAttributes?.className ===
						blockAttributes.className
					);
				},
				innerBlocks: [
					[
						'core/heading',
						{ level: 3, content: 'A heading for the notice.' },
					],
					[
						'notice-text/warning',
						{
							copy: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero expedita nemo unde. At esse deserunt laboriosam ducimus officiis, a, tenetur harum ipsum molestiae maiores alias praesentium, id nam quam?',
						},
					],
				],
			},
		],
		transforms: {
			// from another block to text-block
			from: [
				{
					//  type errorbox and then press enter to create a new block
					type: 'enter',
					regExp: /noticebox/i,
					transform: () => {
						return createBlock( metadata.name, {
							// variant: 'notice-text/error'
							// shadow: true,
							// gradient: 'red-to-blue',
						} );
					},
				},
			],
		},
	}
);
