import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    ColorTooltip: {
        position: "absolute",
        translate: "transform(10px, 10px)",
        pointerEvents: "none",
        width: 30,
        height: 30,
        border: "1px solid black",
    }
})

export default useStyles;