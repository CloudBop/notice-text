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
		icon: {
			src: 'format-aside',
			foreground: '#0084ff',
			background: '#e1e1e1',
		},
		variations: [
			{
				name: 'blox/warning-text',
				title: __( 'Warning Text Box' ),
				// icon: 'warning',
				icon: {
					src: 'warning',
					foreground: '#ff9100',
					background: '#e1e1e1',
				},
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
				icon: {
					src: 'dismiss',
					foreground: '#f65858',
					background: '#e1e1e1',
				},
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
				// icon: 'yes',
				icon: {
					src: 'yes',
					// (
					// 	<svg
					// 		version="1.1"
					// 		viewBox="0 0 500 500"
					// 		preserveAspectRatio="xMinYMin meet"
					// 	>
					// 		<circle cx="250" cy="250" r="200" />
					// 	</svg>
					// )
					background: '#e1e1e1',
					foreground: '#24a729',
				},

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
						'blox/notice-textbox',
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
