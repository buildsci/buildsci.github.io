import React, { useEffect, Children } from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MaterialDivider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useCardStyles = makeStyles(theme => ({
	background: {
		// backgroundColor: "#e8e8e8"
	},
	backgroundImage: {
		backgroundImage: `url(${process.env.PUBLIC_URL + "/images/waves.png"})`,
		backgroundRepeat: "repeat",
		backgroundSize: "auto"
	}
}));
function BackgroundCard(props) {
	const classes = useCardStyles();
	const { children } = props;
	return (
		<Card
			className={clsx(classes.background, classes.backgroundImage)}
			elevation={0}
		>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
const useDivStyles = makeStyles(theme => ({
	hr: {
		backgroundColor: process.env.REACT_APP_THEME_ACCENT_COLOR,
		height: 3
	},
	smallMargin: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
}));

function Divider() {
	const classes = useDivStyles();
	return (
		<MaterialDivider
			variant="middle"
			className={clsx(classes.hr, classes.smallMargin)}
		/>
	);
}
export { Divider, BackgroundCard };
