import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import format from "date-fns/format";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews, { interval: 8000 });

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 800
	},
	header: {
		display: "flex",
		alignItems: "center",
		// height: 50,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(0),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2)
		// paddingLeft: theme.spacing( 4),
		// backgroundColor: theme.palette.background.default
	},
	img: {
		height: 255,
		display: "block",
		maxWidth: 400,
		overflow: "hidden",
		width: "100%"
	},
	buildingAvatar: {
		/*SCale Image to fit*/
		objectFit: "fill",
		objectPosition: "center",
		/* Center the image within the element */
		maxHeight: 160,
		maxWidth: "100%",
		boxSizing: "content-box"
	},
	thinCardHeader: { paddingBottom: 0 }
}));

function EventsCarousel(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { events, title, elevation = 0 } = props;
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = events.length;

	function handleNext() {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	}

	function handleBack() {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	}

	function handleStepChange(step) {
		setActiveStep(step);
	}

	return (
		<div className={classes.root}>
			<Card elevation={elevation}>
				<Typography variant="h4" gutterBottom className={classes.header}>
					{title}
				</Typography>
				<CardHeader
					className={classes.thinCardHeader}
					title={events[activeStep].title}
					subheader={
						events[activeStep].date && (
							<Typography variant="caption" style={{ color: "grey" }}>
								{format(events[activeStep].date, "MMMM DD, YYYY")}
							</Typography>
						)
					}
				/>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					interval={8000}
					enableMouseEvents
				>
					{props.events.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<CardContent>
									<Grid container direction="row" spacing={2}>
										{step.imagePath && (
											<Grid item xs={4}>
												<img
													className={classes.buildingAvatar}
													src={process.env.PUBLIC_URL + step.imagePath}
													alt={step.title}
												/>
											</Grid>
										)}
										<Grid item xs={8}>
											<Typography variant="body1">{step.text}</Typography>
										</Grid>
									</Grid>
								</CardContent>
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					className={classes.mobileStepper}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Card>
		</div>
	);
}
EventsCarousel.defaultProps = {
	events: []
};
export default EventsCarousel;
