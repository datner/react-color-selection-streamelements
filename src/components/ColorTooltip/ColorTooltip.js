import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import useStyles from './ColorTooltip.styles'

const ColorTooltip = ({ active, ...props }) => {
    const classes = useStyles(props);
    return (
        ReactDOM.createPortal(
            active ?
                <div className={classes.ColorTooltip} /> : null,
            document.body
        )
    )
}

ColorTooltip.propTypes = {
    active: PropTypes.bool.isRequired,
}

ColorTooltip.defaultProps = {}

export default ColorTooltip
