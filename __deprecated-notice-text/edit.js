import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { name, bio } = attributes;
	const onChangeName = ( newName ) => {
		setAttributes( { name: newName } );
	};
	const onChangeBio = ( newBio ) => {
		setAttributes( { bio: newBio } );
	};
	return (
		<div { ...useBlockProps() }>
			<RichText
				placeholder={ __( 'Notice Heading', 'notice-text' ) }
				onChange={ onChangeName }
				value={ name }
				tagName="span"
				// remove bold, alignment, italic formatting ect
				// allowedFormats={[]}
			/>
			<RichText
				placeholder={ __( 'Notice copy', 'notice-text' ) }
				tagName="p"
				onChange={ onChangeBio }
				value={ bio }
				// remove bold, alignment, italic formatting ect
				// allowedFormats={[]}
			/>
		</div>
	);
}
