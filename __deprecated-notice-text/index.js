import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'blox/notice-textbox', {
	title: __( 'Heading Of Notice', 'notice-text' ),
	description: __( 'An exttra notice', 'notice-text' ),
	icon: 'admin-users',
	parent: [ 'blox/notice-text' ],
	supports: {
		//  disable block-editor features
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	edit: Edit,
	save: Save,
} );
