import { TABS_KEYS } from "./common.type.ts";

export const tabData = [
  {
    value: TABS_KEYS.HORSE_RACING,
    label: "Horse",
    icon: "HORSE_ICON",
    link: "/horseRacing",
  },
  {
    value: TABS_KEYS.GREY_HOUND_RACING,
    label: "Greyhound",
    icon: "DOG_ICON",
    link: "/greyhoundRacing",
  },
  {
    value: TABS_KEYS.HARNESS_RACING,
    label: "Harness",
    icon: "MAN_RACING_ICON",
    link: "/",
  },
];

export const dayTabsData = [
  {
    value: "latest",
    label: "Latest",
  },
  {
    value: "today",
    label: "Today",
  },
  {
    value: "yesterday",
    label: "Yesterday",
  },
  {
    value: "thursday",
    label: "Thursday",
  },
  {
    value: "wednesday",
    label: "Wednesday",
  },
  {
    value: "tuesday",
    label: "Tuesday",
  },
];

export const masterTableData = [
  {
    date: "Saturday 15th March 2025",
    tableData: [
      {
        coalfield: {
          number: 1,
          name: "Bankers Choice",
          coName: "D Stackhouse",
        },
        topTote: "$3.70 / $1.90",
        sp: "$4.40",
        margin: "02:31 .260",
      },
      {
        coalfield: { number: 10, name: "Speycaster", coName: "J McNeil" },
        topTote: "$4.20",
        sp: "$13.00",
        margin: "0.75L",
      },
      {
        coalfield: { number: 2, name: "Mostly Cloudy", coName: "E Brown" },
        topTote: "-",
        sp: "$2.50",
        margin: "0.85L",
      },
      {
        coalfield: { number: 3, name: "Le Don Die Vie", coName: "J Kennedy" },
        topTote: "-",
        sp: "$5.50",
        margin: "1.60L",
      },
      {
        coalfield: { number: 5, name: "Mystery Island", coName: "C Williams" },
        topTote: "-",
        sp: "$3.60",
        margin: "2.10L",
      },
    ],
  },
  {
    date: "Saturday 15th March 2025",
    tableData: [
      {
        coalfield: {
          number: 1,
          name: "Bankers Choice",
          coName: "D Stackhouse",
        },
        topTote: "$3.70 / $1.90",
        sp: "$4.40",
        margin: "02:31 .260",
      },
      {
        coalfield: { number: 10, name: "Speycaster", coName: "J McNeil" },
        topTote: "$4.20",
        sp: "$13.00",
        margin: "0.75L",
      },
      {
        coalfield: { number: 2, name: "Mostly Cloudy", coName: "E Brown" },
        topTote: "-",
        sp: "$2.50",
        margin: "0.85L",
      },
      {
        coalfield: { number: 3, name: "Le Don Die Vie", coName: "J Kennedy" },
        topTote: "-",
        sp: "$5.50",
        margin: "1.60L",
      },
      {
        coalfield: { number: 5, name: "Mystery Island", coName: "C Williams" },
        topTote: "-",
        sp: "$3.60",
        margin: "2.10L",
      },
    ],
  },
];

export const tableData = [
  {
    coalfield: { number: 1, name: "Bankers Choice", coName: "D Stackhouse" },
    topTote: "$3.70 / $1.90",
    sp: "$4.40",
    margin: "02:31 .260",
  },
  {
    coalfield: { number: 10, name: "Speycaster", coName: "J McNeil" },
    topTote: "$4.20",
    sp: "$13.00",
    margin: "0.75L",
  },
  {
    coalfield: { number: 2, name: "Mostly Cloudy", coName: "E Brown" },
    topTote: "-",
    sp: "$2.50",
    margin: "0.85L",
  },
  {
    coalfield: { number: 3, name: "Le Don Die Vie", coName: "J Kennedy" },
    topTote: "-",
    sp: "$5.50",
    margin: "1.60L",
  },
  {
    coalfield: { number: 5, name: "Mystery Island", coName: "C Williams" },
    topTote: "-",
    sp: "$3.60",
    margin: "2.10L",
  },
];

export const bgColors = ["#2DA65D", "#2DA6A2", "#2DA6A2", "#A2A2A2", "#A2A2A2"];

export const greyhoundTableData = [
  {
    position: 3,
    name: "The Meadows",
    role: "(VIC)",
    subName: "The Meadows City View Bistro",
    range: "6.8.7",
    distance: "525m",
  },
  {
    position: 2,
    name: "Bendigo",
    role: "(VIC)",
    subName: "The Meadows City View Bistro",
    range: "6.8.7",
    distance: "525m",
  },
  {
    position: 5,
    name: "Dubbo",
    role: "(NSW)",
    subName: "The Meadows City View Bistro",
    range: "6.8.7",
    distance: "525m",
  },
  {
    position: 1,
    name: "Wentworth Park",
    role: "(NSW)",
    subName: "The Meadows City View Bistro",
    range: "6.8.7",
    distance: "525m",
  },
  {
    position: 5,
    name: "Ipswich",
    role: "(QLD)",
    subName: "The Meadows City View Bistro",
    range: "6.8.7",
    distance: "525m",
  },
];

export const racingResults = [
  {
    region: "Australia",
    date: "Saturday 15th March 2025",
    venues: [
      {
        name: "Angle Park",
        state: "SA",
        results: {
          R1: ["2", "1"],
          R2: ["1", "2"],
          R3: ["RUN"],
          R4: ["1"],
          R5: ["2"],
          R6: ["2"],
          R7: ["RUN"],
          R8: ["RUN"],
          R9: ["2"],
          R10: ["2"],
        },
      },
      {
        name: "Bendigo",
        state: "VIC",
        results: {
          R1: ["4", "7", "2"],
          R2: ["4", "8", "3"],
          R3: ["3", "6", "8"],
          R4: ["1", "10", "8"],
        },
      },
      {
        name: "Dubbo",
        state: "NSW",
        results: {
          R1: ["1", "10", "8"],
          R2: ["2", "1"],
          R3: ["1", "10", "8"],
          R4: ["4", "7", "2"],
          R5: ["1", "2"],
          R6: ["3", "6", "8"],
          R7: ["4", "7", "2"],
        },
      },
      {
        name: "Ipswich",
        state: "QLD",
        results: {
          R1: ["2", "1"],
          R2: ["1", "2"],
          R3: ["3", "6", "8"],
          R4: ["1"],
          R5: ["2"],
          R6: ["2"],
          R7: ["1", "10", "8"],
          R8: ["3", "6", "8"],
        },
      },
    ],
  },
  {
    region: "International",
    date: "Saturday 15th March 2025",
    venues: [
      {
        name: "Manawatu",
        state: "NZL",
        results: {
          R1: ["2", "1"],
          R2: ["1", "2"],
          R3: ["RUN"],
          R4: ["1"],
          R5: ["2"],
          R6: ["2"],
          R7: ["RUN"],
          R8: ["RUN"],
          R9: ["2"],
          R10: ["2"],
        },
      },
    ],
  },
];
