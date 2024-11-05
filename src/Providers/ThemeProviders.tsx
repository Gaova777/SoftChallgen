import { CssBaseline,ThemeProvider as Theme } from "@mui/material";
import { generateTheme } from "@/Theme";
import {FC} from "react";

declare module "@mui/material/styles" {
    interface Theme {
        sizes:{
            header:{
                height:number;
                realHeight:number;
            }
        }
    }
}

type TThemeProvier = FC<{
    children: React.ReactNode
}>;

const ThemeProvider: TThemeProvier = ({ children }) => {
    return (
        <Theme theme={generateTheme()}>
            <CssBaseline />
            {children}
        </Theme>
    );
};

export default ThemeProvider;