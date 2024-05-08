const data = [
  {
    target: 41,
    twoDarts: [
      { checkout: ["9", "D16"], note: "" },
      { checkout: ["1", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 42,
    twoDarts: [
      { checkout: ["10", "D16"], note: "" },
      { checkout: ["2", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 43,
    twoDarts: [
      { checkout: ["3", "D20"], note: "" },
      { checkout: ["11", "D16"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 44,
    twoDarts: [
      { checkout: ["4", "D20"], note: "" },
      { checkout: ["12", "D16"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 45,
    twoDarts: [
      { checkout: ["5", "D20"], note: "" },
      { checkout: ["13", "D16"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 46,
    twoDarts: [
      { checkout: ["14", "D16"], note: "" },
      { checkout: ["10", "D18"], note: "" },
      { checkout: ["6", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 47,
    twoDarts: [
      { checkout: ["7", "D20"], note: "" },
      { checkout: ["15", "D16"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 48,
    twoDarts: [
      { checkout: ["16", "D16"], note: "" },
      { checkout: ["8", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 49,
    twoDarts: [
      { checkout: ["17", "D16"], note: "" },
      { checkout: ["9", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 50,
    twoDarts: [
      { checkout: ["18", "D16"], note: "" },
      { checkout: ["T10", "D10"], note: "" },
      { checkout: ["10", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 51,
    twoDarts: [
      { checkout: ["19", "D16"], note: "" },
      { checkout: ["15", "D18"], note: "" },
      { checkout: ["11", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 52,
    twoDarts: [
      { checkout: ["20", "D16"], note: "" },
      { checkout: ["12", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 53,
    twoDarts: [
      { checkout: ["17", "D18"], note: "" },
      { checkout: ["13", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 54,
    twoDarts: [
      { checkout: ["18", "D18"], note: "" },
      { checkout: ["14", "D20"], note: "" },
    ],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 55,
    twoDarts: [{ checkout: ["15", "D20"], note: "" }],
    threeDarts: [],
    xDarts: [],
  },

  {
    target: 56,
    twoDarts: [{ checkout: ["16", "D20"], note: "" }],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 57,
    twoDarts: [{ checkout: ["17", "D20"], note: "" }],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 58,
    twoDarts: [{ checkout: ["18", "D20"], note: "" }],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 59,
    twoDarts: [{ checkout: ["19", "D20"], note: "" }],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 60,
    twoDarts: [{ checkout: ["20", "D20"], note: "" }],
    threeDarts: [],
    xDarts: [],
  },
  {
    target: 61,
    twoDarts: [
      { checkout: ["T11", "D14"], note: "If Single 11 is hit -> Go for Bull" },
    ],
    threeDarts: [
      { checkout: ["T15", "D8"], note: "If Single 15 is hit -> Go 6 then D20" },
      {
        checkout: ["25", "D18"],
        note: "Any miss surrounding the 25, will leave a 2 dart finish.",
      },
    ],
    xDarts: [],
  },
  {
    target: 62,
    twoDarts: [
      { checkout: ["T12", "D13"], note: "If Single 12 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T10", "D16"],
        note: "If Single 10 is hit -> Go 12 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 63,
    twoDarts: [
      { checkout: ["T13", "D12"], note: "If Single 13 is hit -> Go for Bull" },
    ],
    threeDarts: [
      { checkout: ["T17", "D6"], note: "If Single 17 is hit -> Go 6 then D20" },
    ],
    xDarts: [],
  },
  {
    target: 64,
    twoDarts: [
      { checkout: ["T14", "D11"], note: "If Single 14 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T16", "D8"],
        note: "If Single 16 is hit -> Go 16 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 65,
    twoDarts: [
      { checkout: ["T15", "D10"], note: "If Single 15 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["25", "D20"],
        note: "Hitting the 25 leaves 2 throws at a double, whilst missing the 25 has a very high likelihood of still leaving a 2 dart finish",
      },
      {
        checkout: ["T11", "D16"],
        note: "If Single 11 is hit -> Go 14 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 66,
    twoDarts: [
      { checkout: ["T16", "D9"], note: "If Single 16 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T10", "D18"],
        note: "If Single 10 is hit -> Go 16 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 67,
    twoDarts: [
      { checkout: ["T17", "D8"], note: "If Single 17 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T9", "D20"],
        note: "Any miss surrounding T9 (9, 12, 14, T12, T14) leaves a Single-Double finish.",
      },
    ],
    xDarts: [],
  },
  {
    target: 68,
    twoDarts: [
      { checkout: ["T18", "D7"], note: "If Single 18 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T12", "D16"],
        note: "If Single 12 is hit -> Go 16 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 69,
    twoDarts: [
      { checkout: ["T19", "D6"], note: "If Single 19 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D6"],
        note: "If Single 19 is hit -> Go 10 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 70,
    twoDarts: [
      { checkout: ["T20", "D5"], note: "If Single 20 is hit -> Go for Bull" },
    ],
    threeDarts: [
      {
        checkout: ["T18", "D8"],
        note: "If Single 18 is hit -> Go 12 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 71,
    twoDarts: [
      {
        checkout: ["T13", "D16"],
        note: "",
      },
      {
        checkout: ["T17", "D10"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T13", "D16"],
        note: "If Single 13 is hit -> Go 18 then D20",
      },
      {
        checkout: ["T17", "D10"],
        note: "If Single 17 is hit -> Go 14 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 72,
    twoDarts: [
      {
        checkout: ["T16", "D12"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T16", "D12"],
        note: "If Single 16 is hit -> Go 16 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 73,
    twoDarts: [
      {
        checkout: ["T19", "D8"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D8"],
        note: "If Single 19 is hit -> Go 14 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 74,
    twoDarts: [
      {
        checkout: ["T14", "D16"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T14", "D16"],
        note: "If Single 14 is hit -> Go 20 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 75,
    twoDarts: [
      {
        checkout: ["T17", "D12"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T17", "D12"],
        note: "If Single 17 is hit -> Go 18 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 76,
    twoDarts: [{ checkout: ["T20", "D8"], note: "" }],
    threeDarts: [
      {
        checkout: ["T16", "D14"],
        note: "If Single 16 is hit -> Go 20 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 77,
    twoDarts: [
      {
        checkout: ["T19", "D10"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D10"],
        note: "If Single 19 is hit -> Go 18 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 78,
    twoDarts: [
      {
        checkout: ["T18", "D12"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T18", "D12"],
        note: "If Single 18 is hit -> Go 20 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 79,
    twoDarts: [
      {
        checkout: ["T19", "D11"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D11"],
        note: "If Single 19 is hit -> Go 20 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 80,
    twoDarts: [
      { checkout: ["D20", "D20"], note: "" },
      {
        checkout: ["T20", "D10"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D10"],
        note: "If Single 20 is hit -> Go 20 then D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 81,
    twoDarts: [
      {
        checkout: ["T19", "D12"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D12"],
        note: "If Single 19 is hit -> Go T12 then D13",
      },
    ],
    xDarts: [],
  },
  {
    target: 82,
    twoDarts: [
      {
        checkout: ["T14", "D20"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T14", "D20"],
        note: "If Single 14 is hit -> Go T18 then D7",
      },
    ],
    xDarts: [],
  },
  {
    target: 83,
    twoDarts: [
      {
        checkout: ["T17", "D16"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T17", "D16"],
        note: "If Single 17 is hit -> Go T16 then D9",
      },
    ],
    xDarts: [],
  },
  {
    target: 84,
    twoDarts: [
      {
        checkout: ["T20", "D12"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D12"],
        note: "If Single 20 is hit -> Go T14 then D11",
      },
    ],
    xDarts: [],
  },
  {
    target: 85,
    twoDarts: [
      {
        checkout: ["T15", "D20"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T15", "D20"],
        note: "If Single 15 is hit -> Go T20 then D5",
      },
    ],
    xDarts: [],
  },
  {
    target: 86,
    twoDarts: [
      {
        checkout: ["T18", "D16"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T18", "D16"],
        note: "If Single 18 is hit -> Go T18 then D7",
      },
    ],
    xDarts: [],
  },
  {
    target: 87,
    twoDarts: [
      {
        checkout: ["T17", "D18"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T17", "D18"],
        note: "If Single 17 is hit -> Go T20 then D5",
      },
    ],
    xDarts: [],
  },
  {
    target: 88,
    twoDarts: [
      {
        checkout: ["T20", "D14"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D14"],
        note: "If Single 20 is hit -> Go T18 then D7",
      },
    ],
    xDarts: [],
  },
  {
    target: 89,
    twoDarts: [
      {
        checkout: ["T19", "D16"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D16"],
        note: "If Single 19 is hit -> Go T20 then D5",
      },
    ],
    xDarts: [],
  },
  {
    target: 90,
    twoDarts: [{ checkout: ["T18", "D18"], note: "" }],
    threeDarts: [
      {
        checkout: ["T20", "D15"],
        note: "If Single 20 is hit -> Go T20 then D5",
      },
    ],
    xDarts: [],
  },
  {
    target: 91,
    twoDarts: [
      {
        checkout: ["T17", "D20"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T17", "D20"],
        note: "If Single 17 is hit -> Go T14 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 92,
    twoDarts: [
      {
        checkout: ["T20", "D16"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D16"],
        note: "If Single 20 is hit -> Go T16 then D12",
      },
    ],
    xDarts: [],
  },
  {
    target: 93,
    twoDarts: [
      {
        checkout: ["T19", "D18"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D18"],
        note: "If Single 19 is hit -> Go T14 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 94,
    twoDarts: [
      {
        checkout: ["T18", "D20"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T18", "D20"],
        note: "If Single 18 is hit -> Go T16 then D14",
      },
    ],
    xDarts: [],
  },
  {
    target: 95,
    twoDarts: [
      {
        checkout: ["T19", "D19"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D19"],
        note: "If Single 19 is hit -> Go T16 then D14 or D19,D19",
      },
    ],
    xDarts: [],
  },
  {
    target: 96,
    twoDarts: [
      {
        checkout: ["T20", "D18"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D18"],
        note: "If Single 20 is hit -> Go T16 then D14 or D19,D19",
      },
    ],
    xDarts: [],
  },
  {
    target: 97,
    twoDarts: [
      {
        checkout: ["T19", "D20"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T19", "D20"],
        note: "If Single 19 is hit -> Go T18 then D12",
      },
    ],
    xDarts: [],
  },
  {
    target: 98,
    twoDarts: [
      {
        checkout: ["T20", "D19"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D19"],
        note: "If Single 20 is hit -> Go T18 then D12",
      },
    ],
    xDarts: [],
  },
  {
    target: 99,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T19", "10", "D16"],
        note: "If Single 19 is hit -> Go T20 then D10 or D20,D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 100,
    twoDarts: [
      {
        checkout: ["T20", "D20"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "D20"],
        note: "If Single 20 is hit -> Go T20 then D10 or D20,D20",
      },
    ],
    xDarts: [],
  },
  {
    target: 101,
    twoDarts: [{ checkout: ["T17", "Bull"], note: "" }],
    threeDarts: [
      {
        checkout: ["T20", "9", "D16"],
        note: "If Single 20 is hit -> Go T19 then D12",
      },
    ],
    xDarts: [],
  },
  {
    target: 102,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "10", "D16"],
        note: "If Single 20 is hit -> Go T14 then D20",
      },
      {
        checkout: ["T16", "14", "D20"],
        note: "If Single 16 is hit -> Go T18 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 103,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "11", "D16"],
        note: "If Single 20 is hit -> Go T17 then D16",
      },
      {
        checkout: ["T17", "12", "D20"],
        note: "If Single 17 is hit -> Go T18 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 104,
    twoDarts: [{ checkout: ["T18", "Bull"], note: "" }],
    threeDarts: [
      {
        checkout: ["T18", "10", "D20"],
        note: "If Single 18 is hit -> Go T18 then D16",
      },
      {
        checkout: ["T16", "16", "D20"],
        note: "If Single 16 is hit -> Go T20 then D14",
      },
    ],
    xDarts: [],
  },
  {
    target: 105,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "5", "D20"],
        note: "If Single 20 is hit -> Go T15 then D20",
      },
      {
        checkout: ["T20", "13", "D16"],
        note: "If Single 20 is hit -> Go T15 then D20",
      },
      {
        checkout: ["T19", "8", "D20"],
        note: "If Single 19 is hit -> Go T18 then D16",
      },
      {
        checkout: ["T19", "16", "D16"],
        note: "If Single 19 is hit -> Go T18 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 106,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "6", "D20"],
        note: "If Single 20 is hit -> Go T18 then D16",
      },
      {
        checkout: ["T20", "10", "D18"],
        note: "If Single 20 is hit -> Go T18 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 107,
    twoDarts: [{ checkout: ["T19", "Bull"], note: "" }],
    threeDarts: [
      {
        checkout: ["T20", "15", "D16"],
        note: "If Single 20 is hit -> Go T17 then D18",
      },
      {
        checkout: ["T19", "10", "D20"],
        note: "If Single 19 is hit -> Go T20 then D14",
      },
    ],
    xDarts: [],
  },
  {
    target: 108,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "8", "D20"],
        note: "If Single 20 is hit -> Go T20 then D14",
      },
      {
        checkout: ["T20", "16", "D16"],
        note: "If Single 20 is hit -> Go T20 then D14",
      },
      {
        checkout: ["T19", "19", "D16"],
        note: "If Single 19 is hit -> Go T19 then D16",
      },
      {
        checkout: ["T18", "18", "D18"],
        note: "If Single 18 is hit -> Go T18 then D18",
      },
    ],
    xDarts: [],
  },
  {
    target: 109,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "9", "D20"],
        note: "If Single 20 is hit -> Go T19 then D16",
      },
      {
        checkout: ["T19", "20", "D16"],
        note: "If Single 19 is hit -> Go T18 then D18",
      },
      {
        checkout: ["T19", "12", "D20"],
        note: "If Single 19 is hit -> Go T18 then D18",
      },
    ],
    xDarts: [],
  },
  {
    target: 110,
    twoDarts: [
      {
        checkout: ["T20", "Bull"],
        note: "",
      },
    ],
    threeDarts: [
      {
        checkout: ["T20", "10", "D20"],
        note: "If Single 20 is hit -> Go T18 then D18",
      },
      {
        checkout: ["T20", "18", "D16"],
        note: "If Single 20 is hit -> Go T18 then D18",
      },
    ],
    xDarts: [],
  },
  {
    target: 111,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "11", "D20"],
        note: "If Single 20 is hit -> Go T17 then D20",
      },
      {
        checkout: ["T20", "19", "D16"],
        note: "If Single 20 is hit -> Go T17 then D20",
      },
      {
        checkout: ["T19", "14", "D20"],
        note: "If Single 19 is hit -> Go T20 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 112,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T20", "12", "D20"],
        note: "If Single 20 is hit -> Go T20 then D16",
      },
      {
        checkout: ["T20", "20", "D16"],
        note: "If Single 20 is hit -> Go T20 then D16",
      },
    ],
    xDarts: [],
  },
  {
    target: 113,
    twoDarts: [],
    threeDarts: [
      {
        checkout: ["T19", "16", "D20"],
        note: "If Single 19 is hit -> Go T18 then D20",
      },
      {
        checkout: ["T20", "13", "D20"],
        note: "If Single 20 is hit -> Go T19 then D18",
      },
    ],
    xDarts: [],
  },
];

export default data;

/********************************************************************/

// const blueprint = {
//   target: 0,
//   twoDarts: [],
//   threeDarts: [],
//   xDarts: [],
// };
