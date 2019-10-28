import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Swatch: {
        width: 100,
        height: 50,
        background: ({color}) => color,
        border: "1px solid black"
    }
})

export default useStyles;