import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './ColorInput.styles'

const ColorInput = ({color}) => {
    const classes = useStyles();
    console.log(color)
    return (
        <div className={classes.ColorInput}>
            <input type="text" value={color} disabled name="color" id="hstString"/>
        </div>
    )
}

ColorInput.propTypes = {}

ColorInput.defaultProps = {}

export default ColorInput
