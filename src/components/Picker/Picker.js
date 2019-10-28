import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './Picker.styles'

const Picker = props => {
    const classes = useStyles(props);
    return (
        <div className={classes.Picker} id="picker">
            
        </div>
    )
}

Picker.propTypes = {
    color: PropTypes.string,
}

Picker.defaultProps = {
    color: "red"
}

export default Picker
