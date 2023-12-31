import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: "#19857b"
        },
        error: {
            main: red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    background: "#4a148c"
                }
            }
        }
    }
});

export default darkTheme;