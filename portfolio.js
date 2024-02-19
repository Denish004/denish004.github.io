import emoji from "react-easy-emoji";

export const greetings = {
	name: "Denish Suhagiya",
	title: "Denish Suhagiya",
	description:
		"I build stuff that people use",
	resumeLink: "https://drive.google.com/file/d/1kKeBAmrJZXcHCEcbUTWNhwj6FnIEiTJz/view?usp=drive_link",
};

export const openSource = {
	githubUserName: "Denish004",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/denish.suhagiya.3/",
	instagram: "https://www.instagram.com/denish__suhagiya/",
	twitter: "https://twitter.com/DenishSuhagiya",
	github: "https://github.com/Denish004",
	linkedin: "https://www.linkedin.com/in/denish-suhagiya-411508250/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"With the goal of exploring every corner of Computer Science, I am executing an infinite loop of learning:",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS-3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "SASS",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "ReactJs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "ReactNative",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "SQL-Databases",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "MongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		
		
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
		
		{
			skillName: "CPP",
			fontAwesomeClassname: "vscode-icons:file-type-cpp",
		},
		{
			skillName: "C",
			fontAwesomeClassname: "vscode-icons:file-type-c",
		},
		
		
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		weight: 1,
		schoolName: "Veermata Jijabai technological Institute",
		subHeader: "Bachelor of Technology in Computer Science",
		duration: "Nov 2023 - present",
		descBullets: [
			"8.55 of 10.00 GPA upto 2th Semester",
			"Web developer core committee member at GDSC VJTI.",
			
		],
// 		desc: "",
// 		descBullets: [
// 			""
// 		],
	},
	{
		schoolName: "Sardar Vallabhbhai Patel Vidyalaya and Jr. College",
		subHeader: "Higher Secondary School (HSC)",
		duration: "August 2020 - May 2022",
		
		descBullets: [
			"89.4% Overall",
			"Specialization in Computer Science"
		],
	},
	{
		schoolName: "Shanti Nagar High School",
		subHeader: "Maharashtra State Board of Secondary and Higher Secondary Education ",
		duration: "Till April 2020",	
		desc: "Ranked 3 in the entire school.",
		descBullets: [
			
			"94% Overall"
		],
	},
];

export const experience = [
	{
		role: "Technical Team member",
		bgColor: "#A33E81",
		company: "Digital VJTI committee",
		companylogo: "/img/icons/common/digital-vjti-logo.png",
		date: "Dec 2022 – July 2023",
		// desc: "Optimized Performance and Developed features for the web and native application for the company using ReactNative, NodeJS, MongoDB, GCloud, Firebase and more.",
		descBullets: [
			"As a committee member, I have worked with basic HTML and CSS on their website and understood the basics of web development."
		],
	},
	// {
	// 	role: "Student Developer",
	// 	bgColor: "#FCBC05",
	// 	company: "Google Summer of Code @ Joomla!",
	// 	companylogo: "/img/icons/common/gsoc.png",
	// 	companylogo2: "/img/icons/common/joomla.png",
	// 	date: "May 2021 – Aug 2021",
	// 	desc: "What began with understanding the existing features of Joomla core phased into me enhancing them. This experience helped me learn the art of reading code and documentation that is overlooked by many. Being a long-established content management system, Joomla is written in legacy technologies which made my job equally challenging and interesting.",
	// 	descBullets: [
	// 		"Introduced 4 enhancements to the Joomla! core",
	// 		"Enhanced the UX of placing modules and selecting their positions.",
	// 		"Implemented workflows for Modules.",
	// 		"Refactored the MVC of Articles and Featured Articles to increase re-usability of components.",
	// 	]
	// },
	{
		role: "Web Developer Core committee member",
		company: "GDSC VJTI",
		bgColor: "#0C0C0C",
		companylogo: "/img/icons/common/gdsc-logo.jpg",
		date: "Nov 2023 – present",
		// desc: "A contactless dining application for restaurants. The application is built using ReactJs, NodeJS, MongoDB and deployed using AWS.",
		descBullets: [
			" As a committee member, I will conducting workshops, events for the juniors in our college very soon.",
			" I have also been part of a collaborative project where i have been assigned the task to make GDSC web page.",
		]
	},
	// {
	// 	role: "Web Development Intern",
	// 	bgColor: "#F3F3ED",
	// 	company: "NK Learnicare",
	// 	companylogo: "/img/icons/common/nk.jpeg",
	// 	date: "Jan 2015 – Sep 2015",
	// 	desc: "My work was mainly for a sister company, WriteSoft where I made websites for Freelance Clients. I built projects in a team of 4 where I was the FullStack developer.",
	// 	descBullets: [
	// 		"Developed a bulk SMS and email portal with credit system that can be distributed by Merchants to their organization users",
	// 		"Worked in a team of 4, directly reported to the Project Manager, and was a part of the sales Pitches."
	// 	]
	// },
];

export const projects = [
	{
		name: "RentEase",
		stacks: ["Javscript","HTML", "CSS", "React", "Node JS", "Express Js", "Mongo DB", "Postman API"],
		descBullets: [
			"Spearheaded the development of RentEase, increasing website efficiency by 20% through the integration of cloudinary for optimized image storage.",
"Implemented user-centric features, such as a landlord dashboard for property management and a tenant interface for seamless transactions, enhancing overall platform efficiency.",
" Leveraged AI technology to deliver personalized property recommendations to users, resulting in a increase in user engagement and browsing efficiency.",
" Developed a robust payment system enabling tenants to manage rent payments securely, reducing transaction latency by 15% and improving payment processing efficiency.",
" Implemented a real-time chat system using socket.io and webRTC, facilitating direct communication between users and landlords within the platform, reducing response times by 40%.",
" Deployed an AI chatbot as a user-friendly guide, improving user support efficiency by 64% and enhancing the overall browsing and transaction experience"
			],
	},

	{
		name: "Karigar",
		stacks: ["Javscript","HTML", "CSS", "React", "Node JS", "Express Js", "Mongo DB", "BootStrap","Fast API"],
		descBullets: [
			"Pioneered the development of an innovative platform, revolutionizing artisanal visibility and significantly helping in enhancing sales efficiency.",
			"Implemented an advanced NLP model, empowering artisans to craft captivating captions and blogs, thereby enriching product presentation and appeal.",
			 "Elevated user experience with a sophisticated recommendation model, streamlining product discovery and reducing latency times by an impressive 30% through tailored product suggestions.",
			"Leveraged cutting-edge Explainable AI algorithms to meticulously analyze customer data, resulting in precise audience segmentation which will increase the conversion rates.",
			"Applied sophisticated Reinforcement Learning techniques to meticulously refine digital marketing strategies, leading to a boost in community engagement through highly targeted campaigns.",
			"Empowered artisans with actionable market insights via a comprehensive feedback system, facilitating strategic decision-making and continual improvement."
			],
	},

	{
		name: "Student Dropout Analysis",
		stacks: ["Javscript","HTML", "CSS", "React", "Node JS", "Express Js", "Mongo DB", "Postman API"],
		descBullets: [
			"Data-Driven Decision Making: Employ dynamic pie charts and bar graphs using google charts to visually represent student dropout rates.",
			" Inclusive Education: Analyze gender and caste-based dropout trends for equality.",
			" Inclusive Education: Analyze gender and caste-based dropout trends for equality.",
			" Red List Creation: The government can place a school on the red list if it fails to adhere to the prescribed instructions.",
			" Location-Based Solutions: Heat maps to target areas with higher dropout rates.",
			" Solution Book: A book containing solutions to common dropout causes. So by utilizing it school can prevent dropouts at their level."
			],
	},

	// {
	// 	name: "Simulation of Distributed Architecture on a Single Node using Nodes emulated by Docker",
	// 	stacks: ["Docker", "Rust"],
	// 	descBullets: [
	// 		"Simulation of a multi node system using Linux’s namespaces through containers using Docker.", 
	// 		"Map reduce execution time for word count was optimized from 96s for a single node to 48s for emulated multi-node.",
	// 		"Can be configured to run other related big data algorithms that use a master-slave node architecture."
	// 	],
	// 	github: "https://github.com/YatharthVyas/MapReduce-with-Docker",
	// },
	// {
	// 	name: "Network Simulator",
	// 	stacks: ["Svelte", "SVG.js", "Vis.js", "JSON"],
	// 	desc: "This is a simple in browser network simulator, which can be used to visualize network graph and run specific logic code on packets.",
	// 	descBullets: [
	// 		"Developed an in-browser network simulator that visualizes network graphs and runs specific logic code on handling packet transfer.",
	// 		"Incorporated a flexible packet handling logic for each network node based on user-input JavaScript methods.",
	// 		"Implementation of logic and packet queue of any given node is customizable by the user, which means that this can be used to simulate any network algorithm which can be coded using Javascript.",
	// 	],
	// 	link: "https://yjdoc2.github.io/Network-Simulator/",
	// 	github: "https://github.com/YatharthVyas/Network-Simulator",

	// }, 
	// {
	// 	name: "8086 Emulator Web",
	// 	stacks: ["ReactJs", "Web Assembly", "Rust"],
	// 	descBullets: [
	// 		"Developed a platform-independent web interface that works offline as a PWA. Registered as a Copyright under Government of India.",
	// 		"Attracted 50k+ unique clicks from Google Search with 26.8% CTR and used in many Indian and European university classrooms.",
	// 		"Emulates Intel 8086 instruction set and provides an interactive interpreter to run programs in native syntax line by line.",
	// 		"Error reporting & handling, code highlighting, and code execution is supported.",
	// 		"Runs without any backend/server and is completely client-side with zero hosting and maintainance required.",
	// 	],
	// 	link: "https://yjdoc2.github.io/8086-emulator-web/",
	// 	github: "https://github.com/YatharthVyas/8086-emulator-web-1",
	// },
	// {
	// 	name: "Digit Recognizer",
	// 	stacks: ["Web Assembly", "Rust", "JavaScript", "HTML-Canvas"],
	// 	descBullets: [
	// 		"Neural Network in Rust from scratch and trained over MNIST data, accuracy in the range of 95 to 96%",
	// 		"Compiled the Neural Network in Rust to Web Assembly and implemented a GUI interface to input to the digits drawing using canvas drawing.",
	// 		"The grayscale pixels are pre-processed in frontend, and fed to the Web Assembly for prediction."
	// 	],
	// 	github: "https://github.com/YatharthVyas/Rust-NN-Web-1",
	// 	link: "http://rust-nn-web.herokuapp.com/",
	// },
	// {
	// 	name: "CodeBook",
	// 	stacks: ["Flask", "Python", "Jinja", "HTML-CSS", "JavaScript", "Bootstrap"],
	// 	descBullets: [
	// 		"Compilation, Execution, and evaluation of user submitted code.",
	// 		"Users can also post questions and solutions to the community",
	// 		"Users can follow other coders and get a personalized feed of their activity",
	// 	],
	// 	github: "https://github.com/YatharthVyas/CodeBook",
	// },
];

export const research = [
	// {
	// 	name: "Simple Network Simulator",
	// 	feedback:
	// 		"This paper has been accepted by 'IEEE 2022 7th International Conference for Convergence in Technology (I2CT), Pune' which has Ei Compendex and Scopus Indexing. It is about the implementation of a fully customizable network simulator that can be programmed using Javascript and JSON. It is designed to help researchers and professors in teaching concepts of Networks and Cyber Security with animated packet transfer",
	// },
	// {
	// 	name: "Simulation of a Distributed Architecture on a Single System using Nodes emulated by Docker containers:",
	// 	feedback:
	// 	"I'm a part of a group researching the simulation of a multi-node system using Linux’s namespaces through containers using Docker. Results obtained proved an optimization from 98 seconds on a single node to 45 seconds in a simulated multi-node configuration. The paper for the same is currently under work"
	// },
	// {
	// 	name: "Emulating Intel's 8086 Microprocessor using Rust and WASM",
	// 	feedback:
	// 	"This study presents various advantages of emulating an 8086 microprocessor using Rust and WASM and describes the technology and architecture involved behind one. The paper is currently under review."
	// },
	// {
	// 	name: "Infant Emotion Detection using a live audio-visual stream",
	// 	feedback:
	// 	"Currently Ongoing: We are working on a research project to detect emotions of infants. It involves gathering and merging several unique datasets followed by a meticulous process of analysis and interpretation involved due to the sensitive nature of the data."
	// }
	{
		name:"No research experience",
		feedback:""
	}
];
