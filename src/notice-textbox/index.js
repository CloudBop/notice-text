import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'blox/notice-textbox', {
	title: __( 'Notice Textbox', 'notice-text' ),
	description: __( 'An notice textbox', 'notice-text' ),
	icon: 'editor-paragraph',
	parent: [ 'blox/notice-text' ],
	supports: {
		//  disable block-editor features
		reusable: false,
		html: false,
	},
	attributes: {
		copy: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: 'Here is some copy regarding the notice content.',
		},
	},
	example: {
		attributes: {
			copy: 'This is some text!',
		},
	},
	edit: Edit,
	save: Save,
} );
