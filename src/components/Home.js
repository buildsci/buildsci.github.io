import React, { useEffect, Children } from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

function Message(props) {
	const { message = "" } = props;
	return (
		<div>
			<Typography gutterBottom variant="h4">
				What We Do
			</Typography>
			<Typography variant="body1">{message}</Typography>
		</div>
	);
}
const useStyles = makeStyles(theme => ({
	info: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}));
function Solutions({ solutions = [] }) {
	const classes = useStyles();
	return (
		<div>
			<Grid container direction="row" spacing={1}>
				{solutions.map(({ title, text, icon }, i) => (
					<Grid key={"solution: " + i} item xs={4} className={classes.info}>
						<Fab
							
							color="secondary"
							disableRipple={true}
							disableFocusRipple={true}
							disableTouchRipple={true}
							elevation={0}
						>
							<Icon>{icon}</Icon>
						</Fab>
						<Typography variant="h5" align="center">
							{title}
						</Typography>
						<Typography variant="body1">{text}</Typography>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
function Features({ features = [] }) {
	return (
		<div>
			<Typography variant="h4">Key Features</Typography>
			<ul>
				{features.map((s, i) => (
					<li key={"feature: " + i}>{s}</li>
				))}
			</ul>
		</div>
	);
}

export { Message, Solutions, Features };
