const DAY1 = "4th May";
const DAY2 = "5th May";

export const categories = [
  "Cultural",
  "Technical",
  "Esports",
  "Sports",
  "Mini Events",
];

export const eventCodes = {
  cultural: {
    "Cosplay - Solo": "CULT_CS",
    "Cosplay - Duo": "CULT_CD",
    "Cosplay - Trio": "CULT_CT",
    "Cosplay - Group": "CULT_CG",
    "Hip-Hop International India": "CULT_HH",
    Ritzy: "CULT_RITZY",
    Rockville: "CUL_RV",
    "Voice of Ekarikthin": "CULT_VOE",
    "Dance to Groove - Solo": "CULT_DTGS",
    "Dance to Groove - Crew": "CULT_DTGC",
  },
  technical: {
    "Mud Race": "TEC_MR",
    "Pick N Place": "TEC_PNP",
    CodeCast: "TEC_CC",
    "Web Design": "TEC_WD",
    "Logo Designing": "TEC_LD",
    "CIVIL WITH CIVICUS": "TEC_CWC",
    Stockraze: "TEC_STK",
  },
  esports: {
    COD: "ESP_COD",
    BGMI: "ESP_BGMI",
    CSGO: "ESP_CSGO",
    "DOTA 2": "ESP_DOTA",
    "Mobile legends": "ESP_ML",
  },
  sports: {
    "Table Tennis": "SPT_TT",
    Volleyball: "SPT_VOL",
    Rodies: "SPT_RDS",
    "Gully Cricket": "SPT_GC",
    Chess: "SPT_CH",
    Futsal: "SPT_FTSL",
    Badminton: "SPT_BD",
  },
  "mini events": {
    Virgowords: "MNE_VIR",
    "Quiz Buzz": "MNE_QB",
  },
};

export const eventCost = {
  CULT_CS: 400,
  CULT_CD: 700,
  CULT_CT: 1000,
  CULT_CG: 1300,
  CULT_HH: 589,
  CULT_RITZY: 500,
  CUL_RV: 2500,
  CULT_VOE: 300,
  CULT_DTGS: 200,
  CULT_DTGC: 800,
  TEC_MR: 0,
  TEC_PNP: 0,
  TEC_CC: 0,
  TEC_WD: 150,
  TEC_LD: 0,
  TEC_CWC: 0,
  TEC_STK: 0,
  ESP_COD: 500,
  ESP_BGMI: 250,
  ESP_CSGO: 350,
  ESP_DOTA: 500,
  ESP_ML: 500,
  SPT_TT: 350,
  SPT_VOL: 600,
  SPT_RDS: 150,
  SPT_GC: 500,
  SPT_CH: 200,
  SPT_FTSL: 500,
  SPT_BD: 500,
  MNE_VIR: 0,
  MNE_QB: 0,
};

export const indEventCodes = Object.keys(eventCost);

const getEventCost = (category, event) =>
  eventCost[eventCodes[category.toLowerCase()][event]];

export const events = {
  cultural: [
    {
      event: "Cosplay - Solo",
      category: categories[0],
      price: getEventCost(categories[0], "Cosplay - Solo"),
      image: "/posters/cosplay.webp",
      description:
        "The face not tell the mood, but the costume will - Exceptional Service with unique fashion - Be someone's perfectly imperfect",
      date: DAY1,
      day: 1,
      time: "10:00 AM",
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Dance to Groove - Solo",
      category: categories[0],
      price: getEventCost(categories[0], "Dance to Groove - Solo"),
      image: "/posters/dancetogroove.webp",
      description: "Keep the stage on FIRE",
      date: DAY1,
      day: 1,
      time: "10:00 AM",
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Dance to Groove - Crew",
      category: categories[0],
      price: getEventCost(categories[0], "Dance to Groove - Crew"),
      image: "/posters/dancetogroove.webp",
      description: "Keep the stage on FIRE",
      date: DAY2,
      day: 2,
      time: "10:00 AM",
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Hip-Hop International India",
      category: categories[0],
      time: "10:00 AM",
      price: getEventCost(categories[0], "Hip-Hop International India"),
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      description: "It is  an audition for the Hip-Hop in North East area",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Ritzy",
      category: categories[0],
      time: "10:00 AM",
      price: getEventCost(categories[0], "Ritzy"),
      image: "/posters/ritzy.webp",
      description: "Beauty is not flawless - It shines even through your flaws",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Rockville",
      category: categories[0],
      time: "10:00 AM",
      price: getEventCost(categories[0], "Rockville"),
      image: "/posters/rockville.webp",
      description: "Soul meets Music",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Cosplay - Duo",
      category: categories[0],
      price: getEventCost(categories[0], "Cosplay - Duo"),
      image: "/posters/cosplay.webp",
      description:
        "The face not tell the mood, but the costume will - Exceptional Service with unique fashion - Be someone's perfectly imperfect",
      date: DAY1,
      day: 1,
      time: "10:00 AM",
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Voice of Ekarikthin",
      category: categories[0],
      time: "10:00 AM",
      price: getEventCost(categories[0], "Voice of Ekarikthin"),
      image: "/posters/voe.webp",
      description:
        "When words fail, Music speaks. Showcase your talent through your voice on the stage of Ekarikthin. A platform for pitch perfect melodies and rhythm.",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Cosplay - Trio",
      category: categories[0],
      price: getEventCost(categories[0], "Cosplay - Trio"),
      image: "/posters/cosplay.webp",
      description:
        "The face not tell the mood, but the costume will - Exceptional Service with unique fashion - Be someone's perfectly imperfect",
      date: DAY2,
      day: 2,
      time: "10:00 AM",
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Cosplay - Group",
      category: categories[0],
      time: "10:00 AM",
      price: getEventCost(categories[0], "Cosplay - Group"),
      image: "/posters/cosplay.webp",
      description:
        "Cosplay which is the showcase of costumes of characters from different animes and films will showcase their acts and performances up on stage with a handsome price on the line",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  technical: [
    {
      event: "Mud Race",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "Mud Race"),
      image: "/posters/mudrace.webp",
      description: "Let's go Robo Racing",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "CodeCast",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "CodeCast"),
      image: "/posters/codecast.webp",
      description:
        "Make it work, make it right, make it fast. CodeCast is a coding competition held on CodeChef. Please register it through codechef.com",
      date: DAY2,
      day: 2,
      venue: "Online",
    },
    {
      event: "Web Design",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "Web Design"),
      image: "/posters/webdesign.webp",
      description:
        "Design the Template in HTML & CSS. We will provide you with a design template and you have to design your website according to the given template.",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Logo Designing",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "Logo Designing"),
      image: "/posters/logodesign.webp",
      description:
        "Make it work, make it right, make it fast. CodeCast is a coding competition held on CodeChef. Please register it through codechef.com",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Pick N Place",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "Pick N Place"),
      image: "/posters/picknplace.webp",
      description: "Push or Pick but Place",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "CIVIL WITH CIVICUS",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "CIVIL WITH CIVICUS"),
      image: "/posters/civil.webp",
      description:
        "Presentation on Construction wastages and their Management with Urban and Rural development",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Stockraze",
      category: categories[1],
      time: "10:00 AM",
      price: getEventCost(categories[1], "Stockraze"),
      image: "/posters/stockraze.webp",
      description: "Show your trading skill without risking your real money",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  esports: [
    {
      event: "COD",
      category: categories[2],
      time: "10:00 AM",
      price: getEventCost(categories[2], "COD"),
      image: "/posters/cod.webp",
      description: "Escape Actuality & Play Call Of Duty.",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "BGMI",
      category: categories[2],
      time: "10:00 AM",
      price: getEventCost(categories[2], "BGMI"),
      image: "/posters/bgmi.webp",
      description: "Just play your best, and forget the rest.",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "CSGO",
      category: categories[2],
      time: "10:00 AM",
      price: getEventCost(categories[2], "CSGO"),
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      description:
        "COUNTER STRIKE - GLOBAL OFFENSIVE: Diffuse the bomb with your team",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "DOTA 2",
      category: categories[2],
      time: "10:00 AM",
      price: getEventCost(categories[2], "DOTA 2"),
      image: "/posters/dota.webp",
      description: "Play with the best to be the best!",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Mobile legends",
      category: categories[2],
      time: "10:00 AM",
      price: getEventCost(categories[2], "Mobile legends"),
      image: "/posters/mobilelegends.webp",
      description: "Nothing last forever, we can change the future (alucard)",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  sports: [
    {
      event: "Badminton",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Badminton"),
      image: "/posters/badminton.webp",
      description: "BADMINTON",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Table Tennis",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Table Tennis"),
      image: "/posters/tabletennis.webp",
      description:
        "Leave your worries at the table - Don't tap it just smash it",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Volleyball",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Volleyball"),
      image: "/posters/volleyball.webp",
      description: "Join the club… And be part of volleyball history",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Rodies",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Rodies"),
      image: "/posters/rodies.webp",
      description:
        "In this event , a group of contestants travel to different destinations and participate in various tasks that challenge their physical, social and mental strength",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Gully Cricket",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Gully Cricket"),
      image: "/posters/cricket.webp",
      description:
        "Never let it rest, until your good is better and your better is best. United we play, United we win!",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Chess",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Chess"),
      image: "/posters/chess.webp",
      description: "MOVE IN SILENCE ONLY SPEAK WHEN IT'S TIME TO SAY CHECKMATE",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Futsal",
      category: categories[3],
      time: "10:00 AM",
      price: getEventCost(categories[3], "Futsal"),
      image: "/posters/futsal.webp",
      description: "The game of the century",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  "mini events": [
    {
      event: "Virgowords",
      category: categories[4],
      time: "10:00 AM",
      price: getEventCost(categories[4], "Virgowords"),
      image: "/posters/virgowords.webp",
      description:
        "To stimulate the awareness of technical & non-technical advancements an article writing competition will be conducted. The main objective of the article writing competition is to evaluate and to check the knowledge of candidates about specific topics and the way they describe the same in writing. Topic of Virgowords(Article Writing Competition) will be provided within the 5 disciplines namely Social Sciences ,Culture ,technical ,economical and current advancement in industry",
      date: DAY2,
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Quiz Buzz",
      category: categories[4],
      time: "10:00 AM",
      price: getEventCost(categories[4], "Quiz Buzz"),
      image: "/posters/quizbuzz.webp",
      description:
        "Quiz Buzz is an event conducted as part of Ekarikthin 2022, NIT Nagaland. Ekarikthin is a techno-cultural fest of NIT Nagaland that is conducted annually. If you are a Science nerd - then show off your knowledge by participating in the Science and Technology quiz. Mind-boggling problems from a wide range of topics will be included. Put on your thinking caps and indulge yourself in these questions. This contest has two rounds Elimination and Final  . People who are selected in the elimination will go to the finals. It's an individual participation event. A wide range of questions is asked from Maths, Physics, Chemistry to Astronomy and Robotics",
      date: DAY1,
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
  ],
};

const allEventsList = [];

for (let i = 0; i < categories.length; i++) {
  allEventsList.push(...events[categories[i].toLowerCase()]);
}

export const allEvents = allEventsList;
