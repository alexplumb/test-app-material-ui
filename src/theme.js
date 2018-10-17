/*
Some Notes:
============================================================

https://material-ui.com/customization/themes/

Material-UI Default theme object for override reference:
https://material-ui.com/customization/default-theme/

============================================================
*/
import { createMuiTheme } from '@material-ui/core/styles';

const spacing = {
  unit: 8,
};

export const Theme = createMuiTheme({
  spacing,
  palette: {
    primary: {
      light: '#434343',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#eee',
      main: '#bdbdbd',
      dark: '#888',
      contrastText: '#fff',
    },
    error: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'neuzeit-grotesk',
    headline: {
      fontFamily: 'neuzeit-grotesk',
    },
    subheading: {
      fontFamily: 'neuzeit-grotesk',
      color: '#434343',
    },
    caption: {
      fontFamily: 'neuzeit-grotesk',
    },
    display4: {
      fontFamily: 'termina-n6,sans-serif',
      fontSize: '30px',
      color: '#fff',
    },
    display3: {
      fontFamily: 'termina-n6,sans-serif',
      color: '#434343',
    },
    display2: {
      fontFamily: 'termina-n6,sans-serif',
    },
    display1: {
      fontFamily: 'termina-n6,sans-serif',
    },
    body1: {
      color: '#434343',
    },
    body2: {
      color: '#262626',
    },
  },
  overrides: {
    MuiList: {
      padding: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 14,
      },
    },
    MuiIconButton: {
      root: {
        minWidth: 36,
      },
      colorSecondary: {
        '&:hover': {
          color: '#DDD',
        },
      },
    },
    MuiBadge: {
      colorSecondary: {
        backgroundColor: '#ff0000',
        border: '1px solid #000',
        transform: 'scale(0.8)',
        top: -5,
        right: -8,
      },
    },
    MuiToolbar: {
      dense: {
        padding: 0,
      },
    },
    MuiButton: {
      label: {
        '& > .material-icons:first-child': {
          marginRight: spacing.unit,
        },
        '& > .material-icons:last-child': {
          marginLeft: spacing.unit,
        },
      },
    },
    MuiInputLabel: {
      root: {
        '& > svg': {
          display: 'none',
        },
      },
      shrink: {
        '& > svg': {
          display: 'inline-block',
        },
      },
    },
    MuiCardMedia: {
      root: {
        height: 300,
        backgroundPosition: 'top',
      },
    },
    MuiListItemText: {
      root: {
        paddingRight: spacing.unit * 10,
      },
    },
  },
});
