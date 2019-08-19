import React, { useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Carousel from "./Carousel.js";
import events from "./events.js";
import ReactGA from "react-ga";
import Flyer from './Flyer.svg'
ReactGA.initialize("UA-138046178-1");
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	content: {
		margin: theme.spacing.unit * 2,
		marginTop: 0
	},
	top: {
		height: 80,
		backgroundColor: theme.palette.primary["400"]
	},
	bar: {
		backgroundColor: "rgba(255,255,255,0.8)",
		[theme.breakpoints.up("md")]: {
			paddingLeft: theme.spacing.unit * 30,
			paddingRight: theme.spacing.unit * 30
		}
	},
	pageImageContainer: {
		margin: 'auto',
		width: '100%',
		height: '100%',
		maxWidth: 780
	},
	pageImage: {
		width: '100%',
		height: '100%'
	},
	homeContent: {
		width: "100%"
	},
	homeCard: {
		width: "100%",
		minHeight: 200,
		maxWidth: 780
	},
	header: {
		width: "100%",
		display: "flex",
		justifyContent: "center"
	},
	thinCardHeader: { paddingBottom: 0 },
	headerImage: {
		height: 50
	}
}));
function App() {
	const classes = useStyles();

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [window.location.pathname]);
	return (
		<div className={classes.root}>
			<main className={classes.content}>
				<div className={classes.pageImageContainer}>
					<img src={Flyer} className={classes.pageImage} />
				</div>
				<div className={classes.pageImageContainer}>
					<Divider variant='middle' style={{ marginTop: 8, marginBottom: 8 }} />
					<Typography variant='h4' gutterBottom>BuildSci Events</Typography>
					<Carousel events={events} />
				</div>

			</main>
		</div>
	);
}

export default App;
