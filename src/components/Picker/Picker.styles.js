import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    Picker: {
        width: 100,
        height: 100,
        background: ({color}) => [`linear-gradient( 0.425turn, black, ${color})`, "black"],
    }
})

export default useStyles;