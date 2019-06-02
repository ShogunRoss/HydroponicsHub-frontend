import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
			main: '#66bb6a',
			light: '#98ee99',
			dark: '#338a3e',
    },
    secondary: {
			main: '#dce775',
			light: '#ffffa6',
			dark: '#a8b545',
    },
    error: {
      main: red.A400,
    },
    background: {
			default: '#e5e5e5',
    },
	},
	typography: {
		useNextVariants: true,
		fontWeightRegular: 'normal',
		fontWeightBold: 'bold',
		fontFamily: [
			'Montserrat',
			'Roboto',
			'Arial',
			'sans-serif',
		].join(',')
	},
});

export default theme;
