import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './ColorInput.styles'

const ColorInput = props => {
    const classes = useStyles();
    return (
        <div className={classes.ColorInput}>
            <input type="text" name="color" id="hstString"/>
        </div>
    )
}

ColorInput.propTypes = {}

ColorInput.defaultProps = {}

export default ColorInput
