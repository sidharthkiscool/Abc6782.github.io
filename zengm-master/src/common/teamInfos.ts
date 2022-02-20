import bySport from "./bySport";

const teamInfos: {
	[key: string]: {
		region: string;
		name: string;
		pop: number;
		colors: [string, string, string];
		jersey: string;
		latitude: number;
		longitude: number;
	};
} = {
	ATL: {
		region: "Atlanta",
		name: "Gold Club",
		pop: 5.3,
		colors: ["#5c4a99", "#f0e81c", "#211e1e"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football2",
			hockey: "hockey3",
		}),
		latitude: 33.7489954,
		longitude: -84.3879824,
	},
	BAL: {
		region: "Baltimore",
		name: "Crabs",
		pop: 2.7,
		colors: ["#89bfd3", "#7a1319", "#07364f"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football3",
			hockey: "hockey",
		}),
		latitude: 39.2903848,
		longitude: -76.6121893,
	},
	BOS: {
		region: "Boston",
		name: "Massacre",
		pop: 7.3,
		colors: ["#0d435e", "#f0494a", "#cccccc"],
		jersey: bySport({
			basketball: "jersey5",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 42.3600825,
		longitude: -71.0588801,
	},
	BKN: {
		region: "Brooklyn",
		name: "Bagels",
		pop: 21.5,
		colors: ["#034757", "#67c7e9", "#b78254"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football5",
			hockey: "hockey3",
		}),
		latitude: 40.6781784,
		longitude: -73.9441579,
	},
	CHA: {
		region: "Charlotte",
		name: "Queens",
		pop: 1.5,
		colors: ["#009e87", "#541f3e", "#ffffff"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football3",
			hockey: "hockey4",
		}),
		latitude: 35.2270869,
		longitude: -80.8431267,
	},
	CIN: {
		region: "Cincinnati",
		name: "Riots",
		pop: 1.6,
		colors: ["#000000", "#c11616", "#2966ef"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 39.1031182,
		longitude: -84.5120196,
	},
	CLE: {
		region: "Cleveland",
		name: "Curses",
		pop: 1.7,
		colors: ["#211e1e", "#f8e3cc", "#3f1c59"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football3",
			hockey: "hockey4",
		}),
		latitude: 41.49932,
		longitude: -81.6943605,
	},
	DAL: {
		region: "Dallas",
		name: "Snipers",
		pop: 6.6,
		colors: ["#be2026", "#2b2e81", "#ffffff"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 32.7766642,
		longitude: -96.7969879,
	},
	DEN: {
		region: "Denver",
		name: "High",
		pop: 2.7,
		colors: ["#2b8643", "#163a1c", "#a1d297"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football",
			hockey: "hockey",
		}),
		latitude: 39.7392358,
		longitude: -104.990251,
	},
	DET: {
		region: "Detroit",
		name: "Muscle",
		pop: 4.0,
		colors: ["#3a61b6", "#9eb7e6", "#0a1130"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 42.331427,
		longitude: -83.0457538,
	},
	HOU: {
		region: "Houston",
		name: "Apollos",
		pop: 6.2,
		colors: ["#4c91c2", "#c4c4c3", "#ffffff"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey3",
		}),
		latitude: 29.7604267,
		longitude: -95.3698028,
	},
	IND: {
		region: "Indianapolis",
		name: "Crossroads",
		pop: 1.6,
		colors: ["#e79f02", "#00246d", "#ffffff"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football5",
			hockey: "hockey3",
		}),
		latitude: 39.768403,
		longitude: -86.158068,
	},
	KC: {
		region: "Kansas City",
		name: "Sauce",
		pop: 1.6,
		colors: ["#8f2100", "#ffb500", "#d4731c"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 39.0997265,
		longitude: -94.5785667,
	},
	LA: {
		region: "Los Angeles",
		name: "Lowriders",
		pop: 15.6,
		colors: ["#00008b", "#ffaf28", "#ff24ee"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 34.0522342,
		longitude: -118.2436849,
	},
	LAE: {
		region: "Los Angeles",
		name: "Earthquakes",
		pop: 15.6,
		colors: ["#aeaeae", "#ea4b0f", "#dedddd"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football5",
			hockey: "hockey3",
		}),
		latitude: 34.0522342,
		longitude: -118.2436849,
	},
	LV: {
		region: "Las Vegas",
		name: "Blue Chips",
		pop: 2.1,
		colors: ["#1c73bb", "#ffd600", "#0c5983"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football5",
			hockey: "hockey3",
		}),
		latitude: 36.1699412,
		longitude: -115.1398296,
	},
	MEM: {
		region: "Memphis",
		name: "Blues",
		pop: 1.3,
		colors: ["#000000", "#ff6c49", "#00aedc"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football5",
			hockey: "hockey4",
		}),
		latitude: 35.1495343,
		longitude: -90.0489801,
	},
	MIA: {
		region: "Miami",
		name: "Cyclones",
		pop: 6.1,
		colors: ["#4ac1c0", "#d8519d", "#f15949"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 25.7616798,
		longitude: -80.1917902,
	},
	MIL: {
		region: "Milwaukee",
		name: "Cheesemakers",
		pop: 1.5,
		colors: ["#003600", "#fdc05f", "#007800"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football5",
			hockey: "hockey4",
		}),
		latitude: 43.0389025,
		longitude: -87.9064736,
	},
	MIN: {
		region: "Minneapolis",
		name: "Blizzard",
		pop: 2.8,
		colors: ["#8accdc", "#3d2971", "#ed9a22"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football4",
			hockey: "hockey",
		}),
		latitude: 44.977753,
		longitude: -93.2650108,
	},
	MXC: {
		region: "Mexico City",
		name: "Aztecs",
		pop: 20.5,
		colors: ["#1a9190", "#510f0f", "#eb5924"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football",
			hockey: "hockey3",
		}),
		latitude: 19.4326077,
		longitude: -99.133208,
	},
	NOL: {
		region: "New Orleans",
		name: "Bayou",
		pop: 1.1,
		colors: ["#195869", "#4edd61", "#0e3e33"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football4",
			hockey: "hockey4",
		}),
		latitude: 29.9510658,
		longitude: -90.0715323,
	},
	NYC: {
		region: "New York",
		name: "Bankers",
		pop: 21.5,
		colors: ["#1e73ba", "#ff8500", "#ffffff"],
		jersey: bySport({
			basketball: "jersey5",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 40.7127753,
		longitude: -74.0059728,
	},
	OKC: {
		region: "Oklahoma City",
		name: "66ers",
		pop: 1.4,
		colors: ["#610000", "#bbb29e", "#e4dfcf"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football4",
			hockey: "hockey",
		}),
		latitude: 35.4675602,
		longitude: -97.5164276,
	},
	ORL: {
		region: "Orlando",
		name: "Juice",
		pop: 2.2,
		colors: ["#dc5000", "#ffffff", "#0b7648"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football3",
			hockey: "hockey4",
		}),
		latitude: 28.5383355,
		longitude: -81.3792365,
	},
	PHI: {
		region: "Philadelphia",
		name: "Cheesesteaks",
		pop: 5.5,
		colors: ["#46bae6", "#ffdb33", "#d9771f"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football5",
			hockey: "hockey3",
		}),
		latitude: 39.9525839,
		longitude: -75.1652215,
	},
	PHO: {
		region: "Phoenix",
		name: "Vultures",
		pop: 4.3,
		colors: ["#d17d2a", "#231f20", "#c09867"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 33.4483771,
		longitude: -112.0740373,
	},
	PIT: {
		region: "Pittsburgh",
		name: "Rivers",
		pop: 1.7,
		colors: ["#231f20", "#fbee28", "#fbee26"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 40.4406248,
		longitude: -79.9958864,
	},
	POR: {
		region: "Portland",
		name: "Roses",
		pop: 2.0,
		colors: ["#e41d34", "#1e1e1e", "#e7a9cc"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football5",
			hockey: "hockey3",
		}),
		latitude: 45.5051064,
		longitude: -122.6750261,
	},
	SA: {
		region: "San Antonio",
		name: "Churros",
		pop: 2.0,
		colors: ["#4a2b14", "#30d9ff", "#704723"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 29.4241219,
		longitude: -98.4936282,
	},
	SAC: {
		region: "Sacramento",
		name: "Gold Rush",
		pop: 1.8,
		colors: ["#735823", "#e4c649", "#f8e19f"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football5",
			hockey: "hockey",
		}),
		latitude: 38.5815719,
		longitude: -121.4943996,
	},
	SD: {
		region: "San Diego",
		name: "Pandas",
		pop: 4.7,
		colors: ["#231f20", "#ffffff", "#b2b3b3"],
		jersey: bySport({
			basketball: "jersey5",
			football: "football4",
			hockey: "hockey4",
		}),
		latitude: 32.715738,
		longitude: -117.1610838,
	},
	TPA: {
		region: "Tampa",
		name: "Turtles",
		pop: 2.7,
		colors: ["#023a02", "#17cc21", "#eb851e"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey",
		}),
		latitude: 27.950575,
		longitude: -82.4571776,
	},
	UTA: {
		region: "Utah",
		name: "Missionaries",
		pop: 2.3,
		colors: ["#7c7c7c", "#000000", "#aea57a"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 39.3209801,
		longitude: -111.0937311,
	},
	VAN: {
		region: "Vancouver",
		name: "Whalers",
		pop: 2.3,
		colors: ["#213063", "#1ea194", "#117568"],
		jersey: bySport({
			basketball: "jersey5",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 49.2827291,
		longitude: -123.1207375,
	},
	WAS: {
		region: "Washington",
		name: "Monuments",
		pop: 6.2,
		colors: ["#213063", "#c5ae6e", "#ffffff"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 38.9072,
		longitude: -77.0369,
	},

	// 2021-05-16 - new teams

	AUS: {
		region: "Austin",
		name: "Armadillos",
		pop: 1.7,
		colors: ["#270b51", "#dedfdf", "#ae5717"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey",
		}),
		latitude: 30.267153,
		longitude: -97.7430608,
	},
	BUF: {
		region: "Buffalo",
		name: "Wings",
		pop: 1.1,
		colors: ["#07295c", "#f16229", "#d13522"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football5",
			hockey: "hockey",
		}),
		latitude: 42.8864468,
		longitude: -78.8783689,
	},
	HAW: {
		region: "Hawaii",
		name: "Honu",
		pop: 1,
		colors: ["#21655a", "#e5e1af", "#279c89"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football",
			hockey: "hockey3",
		}),
		latitude: 19.8967662,
		longitude: -155.5827818,
	},
	JAX: {
		region: "Jacksonville",
		name: "Gators",
		pop: 1.5,
		colors: ["#24d021", "#3281cc", "#29354b"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football2",
			hockey: "hockey3",
		}),
		latitude: 30.3321838,
		longitude: -81.655651,
	},
	OTT: {
		region: "Ottawa",
		name: "Spiders",
		pop: 1.5,
		colors: ["#000000", "#ffffff", "#d10600"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football3",
			hockey: "hockey",
		}),
		latitude: 45.4215296,
		longitude: -75.6971931,
	},
	SF: {
		region: "San Francisco",
		name: "Unicorns",
		pop: 6.5,
		colors: ["#676ee7", "#48edfe", "#fe696e"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football2",
			hockey: "hockey3",
		}),
		latitude: 37.7749295,
		longitude: -122.4194155,
	},
	TOR: {
		region: "Toronto",
		name: "Raccoons",
		pop: 6.6,
		colors: ["#841222", "#ffffff", "#000000"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 43.653226,
		longitude: -79.3831843,
	},
	VB: {
		region: "Virginia Beach",
		name: "Colonists",
		pop: 1.7,
		colors: ["#88bccd", "#c7741b", "#99442e"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football2",
			hockey: "hockey",
		}),
		latitude: 36.8529263,
		longitude: -75.977985,
	},

	// 2021-05-16 - relocated

	CGY: {
		region: "Calgary",
		name: "Mounties",
		pop: 1.4,
		colors: ["#ed1d3d", "#eac494", "#f2b316"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 51.0447331,
		longitude: -114.0718831,
	},
	MON: {
		region: "Montreal",
		name: "Beavers",
		pop: 4,
		colors: ["#5b352a", "#ffffff", "#967fc0"],
		jersey: bySport({
			basketball: "jersey2",
			football: "football3",
			hockey: "hockey",
		}),
		latitude: 45.5016889,
		longitude: -73.567256,
	},
	SJ: {
		region: "San Jose",
		name: "Venture Capitalists",
		pop: 6.5,
		colors: ["#0e442e", "#d75f27", "#e7d3ae"],
		jersey: bySport({
			basketball: "jersey3",
			football: "football3",
			hockey: "hockey3",
		}),
		latitude: 37.3382082,
		longitude: -121.8863286,
	},

	// 2021-05-16 - rebranded

	CHI: {
		region: "Chicago",
		name: "Whirlwinds",
		pop: 9.1,
		colors: ["#272b2a", "#84d5f4", "#84d5f4"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey4",
		}),
		latitude: 41.8781136,
		longitude: -87.6297982,
	},
	SEA: {
		region: "Seattle",
		name: "Symphony",
		pop: 3.8,
		colors: ["#47ff47", "#112e5b", "#8f8f8f"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey3",
		}),
		latitude: 47.6062095,
		longitude: -122.3320708,
	},
	STL: {
		region: "St. Louis",
		name: "Spirits",
		pop: 2.2,
		colors: ["#5385ed", "#363736", "#fe18fd"],
		jersey: bySport({
			basketball: "jersey4",
			football: "football2",
			hockey: "hockey",
		}),
		latitude: 38.6270025,
		longitude: -90.1994042,
	},
};

export default teamInfos;