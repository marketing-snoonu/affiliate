import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, Arial',
    },
    palette: {
        type: 'light',
        primary: {
            main: "#DA0217",
        },
        secondary: {
            main: "#000000",
        },
        background: {
            default: "#F1F2F4"
        },
        text: {
            primary: "#DA0217",
            secondary: "#000000",
            // paragraph: "#454545",
        },
    }
});

theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    // fontSize: '3.5rem',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '4.7rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '5.3rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '6rem',
    },
};

theme.typography.h2 = {
    fontSize: '2.375rem',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '2.375rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '2.9rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '3.3rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '3.75rem',
    },
};

theme.typography.h3 = {
    fontSize: '2rem',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.75rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '2.25rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '3rem',
    },
};

theme.typography.h4 = {
    fontSize: '1.5625rem',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.5625rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.8rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '2rem',
    },
};

theme.typography.h5 = {
    fontSize: '1.25rem',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '1.5rem',
    },
};

theme.typography.h6 = {
    fontSize: '1.125rem',
    [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.125rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '1.25rem',
    },
};

export default theme;
