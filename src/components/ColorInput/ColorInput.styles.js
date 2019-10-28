import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    ColorInput: {
        display: 'flex',
        justifyContent:"center",
        alignItems:"center",
        width: 100,
        height: 50,
        border: "1px solid black",
        padding: [4, 6],
        "& input": {
            fontSize: 8,
            width: "100%"
        }
    }
})

export default useStyles;