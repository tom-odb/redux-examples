const lamas = [
  {
    id: "5b6a246368ec5f302f4a1213",
    name: "Greer",
    hobbies: ["skiing", "gaming"]
  },
  {
    id: "5b6a24633c13d9ba2ad513e1",
    name: "Heidi",
    hobbies: ["reading", "surfing"]
  },
  {
    id: "5b6a2463f282acb678d520fe",
    name: "Tyler",
    hobbies: ["skiing", "reading"]
  },
  {
    id: "5b6a24639aa69a6d85c143bd",
    name: "Harriett",
    hobbies: ["surfing", "sportsing"]
  },
  {
    id: "5b6a2463cacf36dd7f28fb91",
    name: "Johns",
    hobbies: ["surfing", "reading", "skiing"]
  },
  {
    id: "5b6a24631a6ea67cbf274cca",
    name: "Golden",
    hobbies: ["surfing"]
  },
  {
    id: "5b6a2463152c76943b4e265c",
    name: "Megan",
    hobbies: ["reading"]
  },
  {
    id: "5b6a2463fec10aa4fa940065",
    name: "Dickerson",
    hobbies: ["gaming", "reading", "surfing"]
  },
  {
    id: "5b6a2463e4a64aac8d13b59c",
    name: "Schwartz",
    hobbies: ["gaming", "gaming", "skiing"]
  },
  {
    id: "5b6a24636f5cfaaa761f9adc",
    name: "Brandi",
    hobbies: ["sportsing", "skiing", "reading", "sportsing"]
  }
];

export const getLama = index => {
  const i = index > 9 ? index - 10 : index;

  return lamas[i];
};
