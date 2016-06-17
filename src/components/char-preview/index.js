import CharPreview from './char-preview';
import { connect } from 'react-redux';
import { getCodePoint, isCodePointValid } from '../../reducers';

const mapStateToProps = (state) => ({
	codePoint: getCodePoint(state),
	isValid: isCodePointValid(state),
});

const CharPreviewContainer = connect(
	mapStateToProps
)(CharPreview);

export default CharPreviewContainer;
