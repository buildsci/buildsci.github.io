import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EventsCarousel from "../components/EventsCarousel";
import events from "../data/events.js";
import ReactGA from "react-ga";

import { Message, Solutions, Features } from "../components/Home";
import { Divider } from "../components/Misc";
import Header from "../components/Header";
import Footer from "../components/Footer";

import data from "../data/";

ReactGA.initialize("UA-138046178-1");
const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh"
	},
	content: {
		flex: "1 0 auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			padding: 0
		}
	},
	mainCard: {
		maxWidth: 800
	}
}));
function App() {
	const classes = useStyles();

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [window.location.pathname]);

	return (
		<div className={classes.root}>
			<Header />
			<main className={classes.content}>
				<EventsCarousel events={events} title="BuildSci Events" />
				<br />
				<Card className={classes.mainCard} elevation={0}>
					<CardContent>
						<Message message={data.message} />
						<Divider />
						<Solutions solutions={data.solutions} />
						<Divider />
						<Features features={data.features} />
					</CardContent>
				</Card>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
