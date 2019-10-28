import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    ColorTooltip: {
        position: "absolute",
        top: props => props.y,
        left: props => props.x,
        translate: "transform(10px, 10px)",
        pointerEvents: "none",
        width: 30,
        height: 30,
        border: "1px solid black",
        background: props => props.color,

    }
})

export default useStyles;