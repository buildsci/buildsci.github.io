import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "./icon.png";
import accentImg from "./skyline.png";
const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2)
	},
	toolbar: {
		minHeight: 98,
		alignItems: "flex-start",
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2)
	},
	wordMark: {
		display: "flex",
		alignItems: "center"
	},

	logo: {
		height: 48
	},
	title: {
		flexGrow: 1,
		alignSelf: "flex-end"
	},
	appbarImage: {
		height: 104,
		marginBottom: -16,
		marginRight: -24,
		marginTop: -8,
		[theme.breakpoints.down("xs")]: {
			display: "none"
		}
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<AppBar position="static" elevation={0}>
			<Toolbar className={classes.toolbar}>
				<Grid container direction="columnn">
					<Grid item xs={12}>
						<div className={classes.wordMark}>
							<img src={logo} alt="logo" className={classes.logo} />
							<Typography
								component={"span"}
								className={classes.title}
								variant="h3"
								noWrap
							>
								BuildSci
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12}>
						<Typography>Building | Sustainable | Savings</Typography>
					</Grid>
				</Grid>
				<img src={accentImg} alt="" className={classes.appbarImage} />
			</Toolbar>
		</AppBar>
	);
}
/* imporve Image
https://stackoverflow.com/questions/19761202/css3-transform-skew-one-side
https://css-tricks.com/the-shapes-of-css/
 */
