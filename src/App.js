import React, { Component, useEffect } from "react";
import "./App.css";
import { makeStyles, useTheme } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Carousel from "./Carousel.js";
import events from "./events.js";
import ReactGA from "react-ga";
ReactGA.initialize("UA-138046178-1");
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	content: {
		margin: theme.spacing.unit * 2
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
	homeContent: {
		width: "100%"
	},
	homeCard: {
		width: "100%"
		// minHeight: 200
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
	const theme = useTheme();
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [window.location.pathname]);
	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				className={classes.top}
			>
				<Toolbar className={classes.bar}>
					<img
						className={classes.headerImage}
						src={process.env.PUBLIC_URL + "/images/banner.png"}
						alt=""
					/>
					<span style={{ flex: 1 }} />

					<Typography
						style={{
							color: "grey",
							fontFamily: "cursive",
							textShadow: `2px 2px 5px ${
								theme.palette.secondary["400"]
								}`
						}}
					>
						Let us be your next indisposable team member!
					</Typography>
				</Toolbar>
			</AppBar>
			<main className={classes.content}>
				<Grid
					container
					direction="column"
					justify="flex-start"
					alignItems="center"
					spacing={1}
				>
					<Grid
						item
						xs={12}
						md={8}
						lg={6}
						className={classes.homeCard}
					>
						<Carousel events={events} />
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
						lg={6}
						className={classes.homeCard}
					>
						<Card className={classes.homeCard}>
							<CardHeader
								className={classes.thinCardHeader}
								title="Our Story"
							/>
							<CardContent>
								<Typography variant="body2">
									BuildSci was launched in 2019 by three
									University of Maryland scientists,
									engineers, and entrepreneurs with the aim to
									reduce the inefficiencies embedded in the
									cumbersome process of energy audits and
									retrofits for building porfolio managers.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
						lg={6}
						className={classes.homeCard}
					>
						<Card className={classes.homeCard}>
							<CardHeader
								className={classes.thinCardHeader}
								title="Contact Us"
							/>
							<CardContent>
								<Typography>
									Email: <a href="">buildsciinc@gmail.com</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</main>
		</div>
	);
}

export default App;
