
import { createTheme, ThemeProvider  } from "@mui/system";

const theme = createTheme({
    typography: {
        fontFamily: 'Urbanist',
    },
})

export default function Theme(props){
    return(
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}
