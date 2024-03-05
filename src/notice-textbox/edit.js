import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const {
		//name,
		copy,
	} = attributes;
	// const onChangeName = ( newName ) => {
	// 	setAttributes( { name: newName } );
	// };
	const onChangeCopy = ( newCopy ) => {
		setAttributes( { copy: newCopy } );
	};
	return (
		<div { ...useBlockProps() }>
			<RichText
				placeholder={ __( 'Notice copy', 'notice-text' ) }
				tagName="p"
				onChange={ onChangeCopy }
				value={ copy }
				// remove bold, alignment, italic formatting ect
				// allowedFormats={["anchor"]}
			/>
		</div>
	);
}
