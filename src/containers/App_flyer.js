import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "../components/EventsCarousel";
import events from "../data/events.js";
import ReactGA from "react-ga";
import Message, { Divider } from "../components/Message";

import data from "../data/";

ReactGA.initialize("UA-138046178-1");
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	content: {
		margin: theme.spacing(2),
		marginTop: 0
	},
	top: {
		height: 80,
		backgroundColor: theme.palette.primary["400"]
	},
	bar: {
		backgroundColor: "rgba(255,255,255,0.8)",
		[theme.breakpoints.up("md")]: {
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4)
		}
	},
	header: {
		margin: "auto",
		width: "100%",
		height: "100%",
		maxWidth: 780
	},
	footer: {
		margin: "auto",
		width: "100%",
		height: "100%",
		maxWidth: 780
	},
	pageContainer: {
		margin: "auto",
		width: "100%",
		height: "100%",
		maxWidth: 780,
		marginBottom: theme.spacing(1)
	},
	pageImage: {
		width: "100%",
		height: "100%"
	},
	bodyImage: {
		width: "100%",
		height: "100%",
		borderRadius: theme.shape.borderRadius
	},
	homeContent: {
		width: "100%"
	},
	homeCard: {
		width: "100%",
		minHeight: 200,
		maxWidth: 780,
		padding: theme.spacing(1),
		"&:last-child": {
			paddingBottom: theme.spacing(1)
		}
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
	console.log(process.env);
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [window.location.pathname]);
	return (
		<div className={classes.root}>
			<main className={classes.content}>
				<div className={classes.pageContainer}>
					<img
						src={process.env.PUBLIC_URL + "/images/header.jpg"}
						className={classes.pageImage}
					/>
				</div>

				<div className={classes.pageContainer}>
					<Carousel events={events} title="BuildSci Events" />
				</div>
				<div className={classes.pageContainer}>
					<Card>
						<CardContent className={classes.homeCard}></CardContent>
					</Card>
				</div>

				<div className={classes.pageContainer}>
					<Card>
						<CardContent className={classes.homeCard}>
							<img
								src={process.env.PUBLIC_URL + "/images/body.jpg"}
								className={classes.bodyImage}
							/>
						</CardContent>
					</Card>
				</div>
				<div className={classes.pageContainer}>
					<img
						src={process.env.PUBLIC_URL + "/images/footer.jpg"}
						className={classes.pageImage}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
