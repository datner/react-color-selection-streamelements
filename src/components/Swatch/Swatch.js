import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './Swatch.styles'

const Swatch = props => {
    const classes = useStyles(props);
    return (
        <div className={classes.Swatch} id="swatch">
        </div>
    )
}

Swatch.propTypes = {}

Swatch.defaultProps = {}

export default Swatch
