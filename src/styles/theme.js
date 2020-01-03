import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import blueGrey from "@material-ui/core/colors/blueGrey";
import yellow from "@material-ui/core/colors/yellow";
import { primary, secondary, accent } from "./palette";
let theme = createMuiTheme({
	typography: {
		fontFamily: "'Lato', sans-serif",
		useNextVariants: true,
		h5: {
			fontWeight: 500,
			fontSize: 26,
			letterSpacing: 0.5
		}
	},
	palette: {
		primary: primary,
		secondary: secondary,
		info: accent,
		accent,
		background: {
			// default: "#e8e8e8!important"
		}
	},
	shape: {
		borderRadius: 8
	}
});

theme = {
	...theme,
	overrides: {
		MuiDrawer: {
			paper: {
				backgroundColor: theme.palette.primary["200"] //"#18202c"
			}
		},
		MuiButton: {
			label: {
				textTransform: "initial"
			},
			contained: {
				boxShadow: "none",
				"&:active": {
					boxShadow: "none"
				}
			}
		},
		// MuiTabs: {
		// 	root: {
		// 		marginLeft: theme.spacing.unit
		// 	},
		// 	indicator: {
		// 		height: 3,
		// 		borderTopLeftRadius: 3,
		// 		borderTopRightRadius: 3,
		// 		backgroundColor: theme.palette.common.white
		// 	}
		// },
		// MuiTab: {
		// 	root: {
		// 		textTransform: "initial",
		// 		margin: "0 16px",
		// 		minWidth: 0,
		// 		[theme.breakpoints.up("md")]: {
		// 			minWidth: 0
		// 		}
		// 	},
		// 	labelContainer: {
		// 		padding: 0,
		// 		[theme.breakpoints.up("md")]: {
		// 			padding: 0
		// 		}
		// 	}
		// },
		// https://mui-treasury.com/components/tabs
		MuiTabs: {
			root: {
				width: "100%",
				// borderRadius: 8,
				// background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
				// padding: 10,
				boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)"
			},
			indicator: {
				height: "100%",
				// borderRadius: 8,
				backgroundColor: "rgba(255, 255, 255, .2)"
			}
		},
		MuiTab: {
			root: {
				textTransform: "initial",
				margin: "0 16px",
				minWidth: 0,
				"@media (min-width:960px)": {
					minWidth: 0
				}
			},
			label: {
				fontWeight: "normal",
				letterSpacing: 0.5,
				color: "#ffffff"
			},
			labelContainer: {
				paddingLeft: 10,
				paddingRight: 10
			}
		},
		MuiIconButton: {
			root: {
				padding: theme.spacing(1)
			}
		},
		MuiTooltip: {
			tooltip: {
				borderRadius: 4
			}
		},
		MuiDivider: {
			root: {
				backgroundColor: theme.palette.primary["400"] //"#404854"
			}
		},
		MuiListItemText: {
			primary: {
				fontWeight: theme.typography.fontWeightMedium
			}
		},
		MuiListItemIcon: {
			root: {
				color: "inherit",
				marginRight: 0,
				"& svg": {
					fontSize: 20
				}
			}
		},
		MuiAvatar: {
			root: {
				width: 32,
				height: 32
			}
		}
	},
	props: {
		MuiTab: {
			disableRipple: true
		}
	},
	mixins: {
		...theme.mixins,
		toolbar: {
			minHeight: 62 //48
		}
	}
};
export default theme;
