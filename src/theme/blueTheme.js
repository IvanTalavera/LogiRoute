import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const blueTheme = createTheme({
    palette:{
        primary:{
            main: '#2AB2BE'
        },
        secondary:{
            main:'#72ECF4'
        },
        error: {
            main: red.A400
        }
    }
})