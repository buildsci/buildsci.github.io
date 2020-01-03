import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
const useStyles = makeStyles(theme => ({
	coloring: {
		backgroundColor: theme.palette.secondary[500],
		color: theme.palette.secondary.contrastText
	},
	footer: {
		flexShrink: 0,
		display: "flex",
		justifyContent: "flex-end"
	},
	footerText: {
		color: theme.palette.text.hint,
		"&:hover": {
			textDecoration: "none"
		}
	},
	"@media print": {
		footer: { display: "none!important" }
	}
}));

export default function Footer(props) {
	const classes = useStyles();
	return (
		<footer>
			<Toolbar className={clsx(classes.footer, classes.coloring)}>
				<Grid container direction="row" justify="space-between" spacing={1}>
					<Grid item xs={4}>
						<Typography align="center">BuildSci Inc.</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography align="center">
							<Link href="mailto:someone:buildsciinc@gmail.com" color="inherit">
								buildsciinc@gmail.com
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography align="center">www.buildsci.com</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</footer>
	);
}
