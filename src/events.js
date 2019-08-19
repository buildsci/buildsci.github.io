const events = [
	{
		title: "BuildSci Analyst",
		text: `The BuildSci Analyst is a platform for facility mangers to “train” buildings to be better versions of themselves.
			 This approach allows for the strategic investment of resources, financial and human, into targeted and sustained improvements of a building portfolio. 
			 Importantly, the platform also provides the intangible benefit of engaging stakeholders around common goals.`,
		date: new Date(),
		imagePath: "images/building_puzzle.png"
	},
	{
		title: "MII Award",
		text: `BuildSci team members were awarded a Phase I Maryland Innovation Initiative Fund award.
			The focus of this award was on technoogy validation and market assessment.
			The project demonstrated value of BuildSci Analyst in real world scenarios across the building portfolios of three partner institutions.`,
		date: new Date(2018, 5, 29),
		imagePath: "images/events/mii_logo.png"
	},
	{
		title: "Data Management Award",
		text: `BuildSci Analyst was honored with an Innovation Award for Higher Ed Energy Data Management.
		The award was presented to at the Smart Energy Decisions Innovation Summit in Houston, Texas.
		The Innovation Awards program recognizes individual and collective efforts of large electric power users, 
		their suppliers, and their utilities in support of the energy transformation currently taking place.`,
		actions: [],
		date: new Date(2019, 2, 13),
		imagePath: "images/events/sed_awards_2019.png"
	}
]
	// .sort((a, b) => b.date - a.date)
	.map((event, i) => ({ ...event, id: i }));

export default events;
