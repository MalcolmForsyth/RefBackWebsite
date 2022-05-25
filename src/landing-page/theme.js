import { createTheme } from "@mui/material/styles";
import { green, grey, red } from '@mui/material/colors';

const rawTheme = createTheme({
    palette: {
        primary: {
            light: '#e9ecea',
            main: '#cdcdcd',
            dark: '#9c9c9c',
        },
        secondary: {
            light: '#fff5f8',
            main: '#329ff2',
            dark: '#1678c1',
        },
        warning: {
            main: '#7dd0e2',
            dark: '#5a97a4',
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, 
        fontWeightRegular: 400, 
        fontWeightMedium: 700, 
    },
});

const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
};

const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
        ...rawTheme.palette.background,
        default: rawTheme.palette.common.white,
        placeholder: grey[200],
        },
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 60,
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48,
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42,
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 36,
        },
        h5: {
            ...rawTheme.typography.h5,
            fontSize: 20,
            fontWeight: rawTheme.typography.fontWeightLight,
        },
        h6: {
            ...rawTheme.typography.h6,
            ...fontHeader,
            fontSize: 18,
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            fontSize: 18,
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16,
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 14,
        },
    },
};

export default theme;