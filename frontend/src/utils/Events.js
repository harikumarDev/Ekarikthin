export const events = {
  cultural: [
    {
      event: "Cosplay - Solo",
      category: "Cultural",
      date: "2020-06-01",
      time: "10:00",
      price: 100,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "CUL1",
    },
    {
      event: "Cosplay - Group",
      category: "Cultural",
      date: "2020-06-01",
      time: "10:00",
      price: 280,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "CUL2",
    },
  ],
  technical: [
    {
      event: "Debugging",
      category: "Technical",
      date: "2020-06-01",
      time: "10:00",
      price: 320,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "TEC1",
    },
    {
      event: "Coding",
      category: "Technical",
      date: "2020-06-01",
      time: "10:00",
      price: 260,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "TEC2",
    },
  ],
  esports: [
    {
      event: "PUBG",
      category: "Cultural",
      date: "2020-06-01",
      time: "10:00",
      price: 500,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "ESP1",
    },
    {
      event: "BGMI",
      category: "Cultural",
      date: "2020-06-01",
      time: "10:00",
      price: 250,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "ESP2",
    },
  ],
  sports: [
    {
      event: "Crkt",
      category: "Cultural",
      date: "2020-06-01",
      time: "10:00",
      price: 150,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "SPR1",
    },
    {
      event: "Ftbl",
      category: "Cultural",
      date: "2020-06-01",
      time: "10:00",
      price: 240,
      image: "https://i.ibb.co/qxXxXxq/cosplay.jpg",
      eventCode: "SPR2",
    },
  ],
};

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
