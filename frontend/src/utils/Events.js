const DAY1 = "4th May";
const DAY2 = "5th May";

export const categories = ["Cultural", "Technical", "Esports", "Sports"];

export const eventCodes = {
  cultural: {
    "Cosplay - Solo": "CUL1",
    "Cosplay - Group": "CUL2",
  },
  technical: {
    Debugging: "TEC1",
    Coding: "TEC2",
  },
  esports: {
    PUBG: "ESP1",
    BGMI: "ESP2",
  },
  sports: {
    Crkt: "SPR1",
    Ftbl: "SPR2",
  },
};

export const eventCost = {
  CUL1: 100,
  CUL2: 280,
  TEC1: 320,
  TEC2: 260,
  ESP1: 500,
  ESP2: 250,
  SPR1: 150,
  SPR2: 240,
};

export const indEventCodes = Object.keys(eventCost);

const getEventCost = (category, event) =>
  eventCost[eventCodes[category.toLowerCase()][event]];

export const events = {
  cultural: [
    {
      event: "Cosplay - Solo",
      category: categories[0],
      date: DAY1,
      time: "10:00 AM",
      price: getEventCost(categories[0], "Cosplay - Solo"),
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "CUL1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Cosplay - Group",
      category: categories[0],
      date: DAY2,
      time: "10:00 AM",
      price: getEventCost(categories[0], "Cosplay - Group"),
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "CUL2",
      description: "Frontend templates design using HTML and CSS",
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Cosplay - Group",
      category: categories[0],
      date: DAY2,
      time: "10:00 AM",
      price: getEventCost(categories[0], "Cosplay - Group"),
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "CUL2",
      description: "Frontend templates design using HTML and CSS",
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  technical: [
    {
      event: "Debugging",
      category: categories[1],
      date: DAY1,
      time: "10:00 AM",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "TEC1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Debugging",
      category: categories[1],
      date: DAY1,
      time: "10:00 AM",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "TEC1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Coding",
      category: categories[1],
      date: DAY2,
      time: "10:00 AM",
      price: 260,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "TEC2",
      description: "Frontend templates design using HTML and CSS",
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  esports: [
    {
      event: "PUBG",
      category: categories[2],
      date: DAY1,
      time: "10:00 AM",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "ESP1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "PUBG",
      category: categories[2],
      date: DAY1,
      time: "10:00 AM",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "ESP1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "BGMI",
      category: categories[2],
      date: DAY2,
      time: "10:00 AM",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "ESP2",
      description: "Frontend templates design using HTML and CSS",
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
  sports: [
    {
      event: "Crkt",
      category: categories[3],
      date: DAY1,
      time: "10:00 AM",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "SPR1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Crkt",
      category: categories[3],
      date: DAY1,
      time: "10:00 AM",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "SPR1",
      description: "Frontend templates design using HTML and CSS",
      day: 1,
      venue: "Bamboo Clasroom - 2",
    },
    {
      event: "Ftbl",
      category: categories[3],
      date: DAY2,
      time: "10:00 AM",
      price: 240,
      image:
        "https://images.unsplash.com/photo-1648688356431-00e58d0149fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
      eventCode: "SPR2",
      description: "Frontend templates design using HTML and CSS",
      day: 2,
      venue: "Bamboo Clasroom - 2",
    },
  ],
};

const allEventsList = [];

for (let i = 0; i < categories.length; i++) {
  allEventsList.push(...events[categories[i].toLowerCase()]);
}

export const allEvents = allEventsList;
