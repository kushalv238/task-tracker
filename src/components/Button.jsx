import PropTyepes from 'prop-types'

const Button = ( {color, text, onClick} ) => {
    return(
        <button onClick={onClick} style={ {backgroundColor: color} } className='btn'>{text}</button>
    );
}

Button.defaultProps = {
    color: 'black'
}

Button.propTyepes = {
    text: PropTyepes.string,
    color: PropTyepes.string,
    onClick: PropTyepes.func
}

export default Button;