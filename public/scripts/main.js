///FIRE BASE CONNECTION

// document.addEventListener("DOMContentLoaded", function () {
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCrq65EKfvEZI6mNzsF-UbMhcUdY0uJb1U",
//     authDomain: "astrology-bingo.firebaseapp.com",
//     databaseURL: "https://astrology-bingo.firebaseio.com",
//     projectId: "astrology-bingo",
//     storageBucket: "astrology-bingo.appspot.com",
//     messagingSenderId: "725757025898",
//     appId: "1:725757025898:web:e4f52d1d90d47ebf8b7413",
//     measurementId: "G-7Y703BQ6B4",
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   console.log("firebase", firebase);

//   function getData() {
//     return [
//       {
//         label: "sun",
//         value: sun,
//       },
//       {
//         label: "moon",
//         value: moon,
//       },
//       {
//         label: "ascendant",
//         value: ascendant,
//       },
//       {
//         label: "mercury",
//         value: mercury,
//       },
//       {
//         label: "venus",
//         value: venus,
//       },
//       {
//         label: "mars",
//         value: mars,
//       },
//       {
//         label: "jupiter",
//         value: jupiter,
//       },
//       {
//         label: "saturn",
//         value: saturn,
//       },
//       {
//         label: "uranus",
//         value: uranus,
//       },
//       {
//         label: "neptune",
//         value: neptune,
//       },
//       {
//         label: "pluto",
//         value: pluto,
//       },
//     ];
//   }
//   function displayData() {
//     const data = getData();
//     console.log("data", data);
//   }

//   const database = firebase.database();
//   console.log("database", database);
//   const query = firebase.database().ref();

//   query.on("value", (snapshot) => {
//     const data = snapshot.val();
//     console.log("new data", data);
//     sun = data.sun;
//     rising = data.rising;
//     moon = data.moon;
//     mercury = data.mercury;
//     venus = data.venus;
//     mars = data.mars;
//     jupiter = data.jupiter;
//     saturn = data.saturn;
//     uranus = data.uranus;
//     neptune = data.neptune;
//     pluto = data.pluto;
//     descendant = data.descendant;

//     displayData();
//   });
// });

// MAIN APP

class BirthChart {
  constructor(
    sun,
    moon,
    ascendant,
    mercury,
    venus,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    pluto,
    descendant,
  ) {
    this.sun = {
      sign: sun,
      icon: BirthChart.getIconUrl(sun),
      location: { x: 0, y: 0 },
    };
    this.moon = {
      sign: moon,
      icon: BirthChart.getIconUrl(moon),
      location: { x: 180, y: -550 },
    };
    this.ascendant = {
      sign: ascendant,
      icon: BirthChart.getIconUrl(ascendant),
      location: { x: 80, y: -550 },
    };
    this.mercury = {
      sign: mercury,
      icon: BirthChart.getIconUrl(mercury),
      location: { x: 180, y: -500 },
    };
    this.venus = {
      sign: venus,
      icon: BirthChart.getIconUrl(venus),
      location: { x: 200, y: -400 },
    };
    this.mars = {
      sign: mars,
      icon: BirthChart.getIconUrl(mars),
      location: { x: 330, y: -310 },
    };
    this.jupiter = {
      sign: jupiter,
      icon: BirthChart.getIconUrl(jupiter),
      location: { x: 270, y: -220 },
    };
    this.saturn = {
      sign: saturn,
      icon: BirthChart.getIconUrl(saturn),
      location: { x: 110, y: -150 },
    };
    this.uranus = {
      sign: uranus,
      icon: BirthChart.getIconUrl(uranus),
      location: { x: 70, y: -150 },
    };
    this.neptune = {
      sign: neptune,
      icon: BirthChart.getIconUrl(neptune),
      location: { x: 210, y: -230 },
    };
    this.pluto = {
      sign: pluto,
      icon: BirthChart.getIconUrl(pluto),
      location: { x: 140, y: -300 },
    };
    this.descendant = {
      sign: descendant,
      icon: BirthChart.getIconUrl(descendant),
      location: { x: 50, y: -500 },
    };

    this._id = uuidv4();
  }

  static getIconUrl(sign) {
    switch (sign) {
      case "Aries":
        return "./assets/img/aries.svg";
        break;
      case "Taurus":
        return "./assets/img/taurus.svg";
        break;
      case "Gemini":
        return "./assets/img/gemini.svg";
        break;
      case "Cancer":
        return "./assets/img/cancer.svg";
        break;
      case "Leo":
        return "./assets/img/leo.svg";
        break;
      case "Virgo":
        return "./assets/img/virgo.svg";
        break;
      case "Libra":
        return "./assets/img/libra.svg";
        break;
      case "Scorpio":
        return "./assets/img/scorpio.svg";
        break;
      case "Sagittarius":
        return "./assets/img/sagittarius.svg";
        break;
      case "Capricorn":
        return "./assets/img/capricorn.svg";
        break;
      case "Aquarius":
        return "./assets/img/aquarius.svg";
        break;
      case "Pisces":
        return "./assets/img/pisces.svg";
        break;
      default:
        console.log("default");
        break;
    }
  }

  bcReport() {
    return `${this.sun}  ${this.moon} ${this.ascendant} ${this.mercury} ${this.venus} ${this.mars}  ${this.jupiter}  ${this.saturn}  ${this.uranus}  ${this.neptune}  ${this.id}`;
  }
}

function uuidv4() {
  return "xxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const birthChartData = [
  {
    sun: "Sagittarius",
    moon: "Aries",
    ascendant: "Capricorn",
    mercury: "Leo",
    venus: "Leo",
    mars: "Scorpio",
    jupiter: "Aries",
    saturn: "Pisces",
    uranus: "Pisces",
    neptune: "Aquarius",
    pluto: "Libra",
    descendant: "Taurus",
  },
  {
    sun: "Taurus",
    moon: "Scorpio",
    ascendant: "Leo",
    mercury: "Taurus",
    venus: "Virgo",
    mars: "Virgo",
    jupiter: "Aries",
    saturn: "Pisces",
    uranus: "Sagittarius",
    neptune: "Libra",
    pluto: "Libra",
    descendant: "Aquarius",
  },
];

//LIST

class BirthChartList {
  #list = [];
  constructor(birthChartData) {
    birthChartData.forEach(
      function (data) {
        const newBirthChart = new BirthChart(
          data.sun,
          data.moon,
          data.ascendant,
          data.mercury,
          data.venus,
          data.mars,
          data.jupiter,
          data.saturn,
          data.uranus,
          data.neptune,
          data.pluto,
          data.descendant,
        );
        this.#list.push(newBirthChart);
      }.bind(this),
    );
  }
  addBirthChart(data) {
    if (!data) throw new Error("No data provided to addBirthChart method");
    const newBirthChart = new BirthChart(
      data.sun,
      data.moon,
      data.ascendant,
      data.mercury,
      data.venus,
      data.mars,
      data.jupiter,
      data.saturn,
      data.uranus,
      data.neptune,
      data.pluto,
      data.descendant,
    );
    this.#list.push(newBirthChart);
  }
  getList() {
    return this.#list;
  }
  getBirthChartById(id) {
    if (typeof id !== "string" || !id)
      throw new Error("No id provided to getBirthChartById method");
    return this.#list.find((birthChart) => birthChart._id === id);
  }
  getBirthChartIndexById(id) {
    if (typeof id !== "string" || !id)
      throw new Error("No id provided to getBirthChartIndexById method");
    return this.#list.findIndex((birthChart) => birthChart._id === id);
  }
  deleteBirthChart(id) {
    if (id == null) throw new Error("No id provided to deleteTodo method");

    // Find
    const index = this.#list.findIndex(function (birthChart) {
      return birthChart._id === id;
    });

    // Remove
    this.#list.splice(index, 1);
  }
  showBirthChart(birthChart) {
    if (typeof birthChart !== "object" || !birthChart)
      throw new Error("No birthChart provided to showBirthChart method");
    console.log("trying to show birthChart", birthChart);
    // const symbolsToPopulate = [];
    // for (const sign in birthChart) {
    //   if (birthChart.hasOwnProperty(sign)) {
    //     console.log('sign', birthChart[sign]);
    //     const currentSign = birthChart[sign];
    //     const currentSymbol = document.createElement('img');
    //     currentSymbol.src = currentSign.icon;
    //     console.log('icon', currentSymbol.src);
    //     currentSymbol.location = currentSign.location;
    //     console.log('location', currentSymbol.location);
    //     symbolsToPopulate.push(currentSymbol);
    //     // return currentSymbol
    //     // gsap.to(newSymbol, {
    //     //   duration: 2,
    //     //   x: `${newSymbol.location.x}`,
    //     //   y: `${newSymbol.location.y}`,
    //     // });
    //   }
    // }
    // console.log('symbols to populate', symbolsToPopulate);
    // a function here to populate the template with the birth chart object
  }
}

const inPlay = new BirthChartList(birthChartData);
console.log("charts in play", inPlay.getList());

////READ

const birthChartSection = document.getElementById("birthchart-section");
const birthChartList = document.getElementById("birthchart-list");

/// render list

function renderList(list = [], mountNode) {
  // Created a document fragment, so we append lis as few times as possible
  const frag = document.createDocumentFragment();

  for (const birthChart of list) {
    // showSymbol(birthChart);
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = ` 
    <div id="chart" class="chart">
    <div id="sign" class="sign">Sun in ${birthChart.sun.sign} <img src="${birthChart.sun.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Moon in ${birthChart.moon.sign} <img src="${birthChart.moon.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Ascendant in ${birthChart.ascendant.sign} <img src="${birthChart.ascendant.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Mercury in ${birthChart.mercury.sign} <img src="${birthChart.mercury.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Venus in ${birthChart.venus.sign} <img src="${birthChart.venus.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Mars in ${birthChart.mars.sign} <img src="${birthChart.mars.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Jupiter in ${birthChart.jupiter.sign} <img src="${birthChart.jupiter.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Saturn in ${birthChart.saturn.sign} <img src="${birthChart.saturn.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Uranus in ${birthChart.uranus.sign} <img src="${birthChart.uranus.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Neptune in ${birthChart.neptune.sign} <img src="${birthChart.neptune.icon}"  class="sign icon"> </div>
    <div id="sign" class="sign">Pluto in ${birthChart.pluto.sign} <img src="${birthChart.pluto.icon}"  class="sign icon"> </div>
 </div>
<button class="btn btn-danger delete" data-id="${birthChart._id}">delete</button>
<button class="btn btn-danger show-chart" data-id="${birthChart._id}">show chart</button>
<div id="chart-id" class="chart-id">ID ${birthChart._id}</div>
    `;
    frag.append(li);
  }

  mountNode.innerHTML = "";
  mountNode.append(frag);
}

const list = inPlay.getList();
console.log("list", list);

renderList(list, birthChartList);

// RENDERING THE BIRTH CHART BINGO CARD

function renderChart(chart, mountNode) {
  // Created a document fragment, so we append lis as few times as possible
  const imgfrag = document.createDocumentFragment();
  console.log("chart to be rendered", chart);
  const symbolsToPopulate = [];

  for (const sign in chart) {
    if (chart.hasOwnProperty(sign) && sign != "_id") {
      // console.log('sign', chart[sign]);
      const currentSign = chart[sign];
      const currentSymbol = document.createElement("img");
      currentSymbol.classList.add("sign", "icon");
      currentSymbol.src = currentSign.icon;
      // console.log('icon', currentSymbol.src);
      currentSymbol.location = currentSign.location;
      // console.log('location', currentSymbol.location.x);
      gsap.to(currentSymbol, {
        duration: 6,
        x: `${currentSymbol.location.x}`,
        y: `${currentSymbol.location.y}`,
        // x: -180,
        // y: 200,
      });
      symbolsToPopulate.push(currentSymbol);
    }
  }
  console.log("symbolsToPopulate", symbolsToPopulate);

  ///BINGO CARD USING AN IMG

  // const chartImg = document.createElement("img");
  // console.log("chartImg", chartImg);
  // chartImg.classList.add("bc-template", "materialboxed");
  // chartImg.src = "./assets/img/fake-bc-template.svg";

  ///BINGO CAR USING AN SVG

  const chartImg = document.createElement("svg");
  console.log("chartImg", chartImg);
  chartImg.classList.add("bc-template", "materialboxed");
  chartImg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  chartImg.innerHTML = `<defs>
          <clipPath id="clip-path" transform="translate(-51.96 -77.75)">
            <path fill="none" d="M11.03 77.75h977.94V923.2H11.03z" />
          </clipPath>
          <style>
            .cls-3 {
              fill: none
            }

            .cls-2 {
              clip-path: url(#clip-path)
            }

            .cls-3 {
              stroke: #2b2b2a;
              stroke-width: 1.66px
            }
            .cls-4 {
              fill: #2b2b2a
            }
          </style>
        </defs>
        <g class="cls-2">
          <ellipse class="cls-3" cx="459.42" cy="421.72" rx="385.43" ry="385.85" />
        </g>
        <path class="cls-4"
          d="M752.6 231.76c0-2.45 0-5.43.15-7.24-.75 3-1.74 7-3.28 12.46h-4.17c-1.22-5.09-2.22-9.36-3-12.49.09 1.8.27 4.79.27 7.44v5h-4.49V221.5h7.2c1 3.49 2 7.29 2.42 9.9.6-2.74 1.59-6.36 2.62-9.9h7.18V237h-4.9zm21.76-.94h-8.27v2.58h9.25l-.58 3.58h-13.63V221.5h13.67v3.58h-8.71v2.16h8.27zm8.34.47V237h-4.94v-15.5h9.36c3.84 0 5.85 1.88 5.85 4.45a3.7 3.7 0 01-2.67 3.7c.84.36 2.26 1.1 2.26 3.73v.84a11.76 11.76 0 00.21 2.76h-5a9.38 9.38 0 01-.32-3.2v-.53c0-1.43-.46-2-2.41-2zm0-3.22h3.07c1.37 0 2.14-.5 2.14-1.62s-.7-1.61-2.14-1.61h-3.07zm29 3.66c-.71 3.26-3.33 5.6-8.3 5.6-5.73 0-8.61-3.66-8.61-8.1 0-4.23 2.83-8.08 8.82-8.08 5.25 0 7.72 2.74 8.13 5.54h-5.04c-.22-.86-.86-2.12-3.07-2.12s-3.5 1.84-3.5 4.55c0 2.47.91 4.75 3.52 4.75a2.82 2.82 0 003.08-2.14zm7.35-10.23v9c0 2.46 1.19 3.28 2.84 3.28s2.66-.9 2.66-3.28v-9h5v9c0 4.5-2.5 6.85-7.81 6.85-5.12 0-7.75-2.22-7.75-6.85v-9zm18.95 9.79V237h-4.93v-15.5h9.36c3.84 0 5.85 1.88 5.85 4.45a3.71 3.71 0 01-2.67 3.7c.84.36 2.26 1.1 2.26 3.73v.84a11.76 11.76 0 00.21 2.76h-5a9.38 9.38 0 01-.32-3.2v-.53c0-1.43-.46-2-2.41-2zm0-3.22h3.08c1.37 0 2.14-.5 2.14-1.62s-.7-1.61-2.14-1.61H838zm17.31 8.93v-5.37a.93.93 0 00-.23-.6l-6.22-9.51h5.9c1.25 2.23 2.55 4.57 3.3 6.21.74-1.59 2.1-3.88 3.36-6.21h5.4l-6.35 9.66a1 1 0 00-.11.54V237z"
          transform="translate(-51.96 -77.75)" />
        <g class="cls-2">
          <path class="cls-3" d="M460.66 0v845.45" />
        </g>
        <path class="cls-3"
          d="M35.73 422.56h844.99M79.37 196.15l743.64 433.68M262.6 787.4L677.64 38.64M255.57 41.09l398.86 750.16M81.86 628.14l749.92-407.17" />
        <path class="cls-4"
          d="M585.73 123.75c.33 1 1.13 1.79 3.14 1.79 1.79 0 2.34-.54 2.34-1.31s-.49-1.3-3.39-1.8c-5.72-1-6.54-3-6.54-5 0-3.06 2.88-4.85 7.11-4.85 5.14 0 7.21 2.38 7.41 4.67h-4.89c-.17-.69-.61-1.48-2.53-1.48-1.36 0-2 .44-2 1.17s.65 1 3 1.48c5.85 1 7 2.89 7 5.21 0 3-2.48 5.1-7.74 5.1s-7.5-2.2-8-5zm18.11-10.82v9c0 2.46 1.18 3.28 2.84 3.28s2.65-.91 2.65-3.28v-9h5v9c0 4.5-2.5 6.85-7.82 6.85-5.12 0-7.74-2.22-7.74-6.85v-9zm14 15.48v-15.48h5.86c3.43 5.54 4.59 7.55 5.58 9.55h.09c-.14-1.46-.14-4.26-.14-6.82v-2.73h4.53v15.48h-5.53c-1.21-2.15-5-8.74-5.93-10.63h-.08c.15 1.77.16 3.83.16 6.86v3.77zM836.4 410.49l-6-15.48h5.46l2.28 6.95c.83 2.54 1.17 3.89 1.43 5a52.44 52.44 0 011.59-5.22l2.11-6.71h5.4l-6.14 15.48zm27.1-6.16h-8.27v2.59h9.25l-.58 3.57h-13.63V395h13.67v3.58h-8.71v2.16h8.27zm7.92 6.16h-4.54V395h5.86c3.43 5.55 4.59 7.56 5.59 9.55h.08c-.14-1.46-.13-4.25-.13-6.81V395h4.53v15.48h-5.54c-1.21-2.15-5-8.74-5.93-10.62h-.08c.15 1.77.16 3.82.16 6.86v3.76zM891.27 395v9c0 2.46 1.18 3.28 2.84 3.28s2.65-.9 2.65-3.28v-9h5v9c0 4.49-2.5 6.84-7.81 6.84-5.13 0-7.75-2.22-7.75-6.85v-9zm17.43 10.82c.32 1 1.12 1.8 3.13 1.8 1.79 0 2.35-.54 2.35-1.31s-.5-1.31-3.4-1.81c-5.72-1-6.54-2.95-6.54-5 0-3.06 2.88-4.84 7.11-4.84 5.14 0 7.21 2.37 7.41 4.66h-4.89c-.17-.69-.61-1.48-2.53-1.48-1.36 0-2 .45-2 1.17s.65 1.05 3 1.49c5.85 1 7 2.88 7 5.21 0 2.95-2.48 5.1-7.74 5.1s-7.5-2.2-8-5zM863.47 600.28c0-2.45 0-5.43.16-7.24-.74 3-1.73 7-3.28 12.46h-4.13c-1.22-5.09-2.22-9.36-3-12.49.1 1.8.27 4.79.27 7.44v5H849V590h7.2c1 3.49 2 7.29 2.42 9.9.59-2.74 1.58-6.36 2.62-9.9h7.18v15.5h-4.91zm12.63 2.33l-1 2.89h-5l5.83-15.5h6.56l6.23 15.48h-5.4l-1.05-2.89zm5-3.58c-1-2.78-1.59-4.54-2-5.84h-.1c-.34 1.28-1 3.48-1.84 5.84zm14.23.77v5.7h-4.94V590h9.36c3.85 0 5.86 1.88 5.86 4.45a3.71 3.71 0 01-2.67 3.7c.83.36 2.25 1.1 2.25 3.73v.83a11.79 11.79 0 00.22 2.77h-5a9.72 9.72 0 01-.31-3.2v-.53c0-1.44-.46-2-2.41-2zm0-3.21h3.08c1.37 0 2.13-.5 2.13-1.62s-.7-1.61-2.13-1.61h-3.08zm11.94 4.25h5c.33 1 1.12 1.79 3.14 1.79 1.79 0 2.34-.53 2.34-1.3s-.49-1.31-3.4-1.81c-5.71-1-6.53-2.95-6.53-5 0-3.06 2.88-4.85 7.11-4.85 5.14 0 7.21 2.38 7.41 4.67h-4.89c-.18-.69-.61-1.48-2.53-1.48-1.37 0-2 .44-2 1.17s.65 1.05 3 1.49c5.84 1 7 2.88 7 5.21 0 3-2.48 5.1-7.74 5.1s-7.5-2.2-8-5zM740 778.51c0 4.31-1.5 6.21-6.14 6.21a16.78 16.78 0 01-2.65-.18V781a13 13 0 001.53.09c1.54 0 2.22-.48 2.22-2.25v-9.92h5zm8.26-9.58v9c0 2.46 1.18 3.27 2.84 3.27s2.65-.9 2.65-3.27v-9h5v9c0 4.49-2.51 6.85-7.82 6.85-5.12 0-7.75-2.23-7.75-6.86v-9zm22.66 0c3.72 0 6.31 1.85 6.31 5s-2.44 5.18-6.29 5.18h-3.74v5.25h-5v-15.43zm-3.69 6.82h2.91c1.35 0 2.14-.55 2.14-1.74 0-1-.6-1.7-2.14-1.7h-2.94zm17.31-6.82v15.47h-5v-15.47zm7.24 3.56h-5.11v-3.56h15.22v3.56h-5.08v11.91h-5zm25.53 5.76H809v2.58h9.24l-.57 3.57h-13.62v-15.47h13.67v3.58H809v2.15h8.27zm8.33.46v5.69h-4.93v-15.47H830c3.85 0 5.86 1.88 5.86 4.44a3.73 3.73 0 01-2.67 3.71c.83.35 2.26 1.1 2.26 3.72v.84a11.68 11.68 0 00.21 2.76h-5a9.72 9.72 0 01-.31-3.2v-.52c0-1.44-.46-2-2.41-2zm0-3.22h3.08c1.37 0 2.14-.5 2.14-1.61s-.71-1.62-2.14-1.62h-3.08zM542.05 863.43h5c.33 1 1.12 1.8 3.14 1.8 1.79 0 2.34-.54 2.34-1.31s-.5-1.31-3.4-1.81c-5.71-1-6.54-3-6.54-5 0-3.06 2.88-4.85 7.11-4.85 5.15 0 7.22 2.38 7.42 4.67h-4.89c-.18-.69-.62-1.48-2.53-1.48-1.37 0-2 .45-2 1.17s.64 1 3 1.49c5.84 1 7 2.88 7 5.21 0 2.95-2.49 5.1-7.74 5.1s-7.5-2.2-8-5zm22.82 1.77l-1 2.89h-5l5.86-15.48h6.55l6.24 15.48h-5.4L571 865.2zm5-3.58c-1-2.78-1.6-4.54-2-5.84h-.07c-.34 1.28-1 3.48-1.85 5.84zm11-5.44h-5.1v-3.57H591v3.57h-5.08v11.91h-5zm17.22-3.57v9c0 2.46 1.18 3.28 2.84 3.28s2.65-.9 2.65-3.28v-9h5v9c0 4.49-2.5 6.84-7.82 6.84-5.12 0-7.75-2.22-7.75-6.85v-9zM617 862.4v5.69h-4.94v-15.48h9.36c3.85 0 5.86 1.88 5.86 4.45a3.71 3.71 0 01-2.67 3.7c.83.36 2.25 1.1 2.25 3.73v.84a11.71 11.71 0 00.22 2.76h-5a9.72 9.72 0 01-.31-3.2v-.52c0-1.44-.46-2-2.41-2zm0-3.22h3.08c1.37 0 2.13-.5 2.13-1.62s-.7-1.61-2.13-1.61H617zm13 8.91v-15.48h5.86c3.43 5.55 4.59 7.56 5.59 9.55h.08c-.14-1.46-.13-4.25-.13-6.81v-2.74h4.6v15.48h-5.54c-1.21-2.15-5-8.74-5.93-10.62h-.08c.15 1.77.16 3.82.16 6.86v3.76zM357 866.23v9c0 2.46 1.18 3.28 2.84 3.28s2.65-.9 2.65-3.28v-9h5v9c0 4.5-2.5 6.85-7.82 6.85-5.12 0-7.75-2.22-7.75-6.85v-9zm18.89 9.77v5.7H371v-15.47h9.36c3.85 0 5.85 1.88 5.85 4.45a3.7 3.7 0 01-2.67 3.7c.84.36 2.26 1.1 2.26 3.73v.83a11.28 11.28 0 00.22 2.77h-5a9.38 9.38 0 01-.32-3.2V878c0-1.44-.46-2-2.4-2zm0-3.21H379c1.37 0 2.13-.5 2.13-1.62s-.7-1.61-2.13-1.61h-3.08zm17.66 6l-1 2.89h-5l5.85-15.48h6.56l6.24 15.48h-5.41l-1-2.89zm5-3.58c-1-2.78-1.59-4.54-2-5.84h-.08c-.33 1.28-1 3.48-1.84 5.84zm13.82 6.47h-4.54v-15.45h5.86c3.43 5.54 4.59 7.56 5.58 9.55h.09c-.14-1.46-.13-4.26-.13-6.82v-2.73h4.52v15.48h-5.53c-1.21-2.15-5-8.74-5.93-10.62h-.08c.15 1.76.16 3.82.16 6.85v3.77zm19.85-15.48v9c0 2.46 1.18 3.28 2.84 3.28s2.65-.9 2.65-3.28v-9h5v9c0 4.5-2.5 6.85-7.82 6.85-5.12 0-7.75-2.22-7.75-6.85v-9zm12.39 10.82h5c.33 1 1.12 1.79 3.14 1.79 1.79 0 2.34-.53 2.34-1.3s-.5-1.31-3.4-1.81c-5.71-1-6.54-3-6.54-5 0-3.06 2.88-4.85 7.11-4.85 5.15 0 7.22 2.38 7.42 4.67h-4.89c-.18-.69-.62-1.48-2.53-1.48-1.37 0-2 .44-2 1.17s.64 1 3.05 1.49c5.84 1 7 2.88 7 5.21 0 2.95-2.49 5.1-7.74 5.1s-7.5-2.2-8-5zM202.33 766.93h-4.53v-15.47h5.86c3.43 5.54 4.58 7.55 5.58 9.54h.08c-.13-1.45-.13-4.25-.13-6.81v-2.73h4.53v15.47h-5.54c-1.2-2.15-5-8.73-5.93-10.62h-.07c.15 1.77.15 3.82.15 6.86v3.76zm28.25-6.15h-8.27v2.58h9.25l-.58 3.57h-13.62v-15.47H231V755h-8.71v2.16h8.27zm12.09-9.32c3.72 0 6.31 1.85 6.31 5s-2.44 5.18-6.29 5.18H239v5.25h-5v-15.43zm-3.67 6.82h2.91c1.35 0 2.14-.55 2.14-1.73 0-1-.6-1.7-2.14-1.7H239zm16.52-3.28h-5.1v-3.56h15.21V755h-5.08v11.91h-5zm17.22-3.56v9c0 2.46 1.18 3.27 2.84 3.27s2.65-.9 2.65-3.27v-9h5v9c0 4.5-2.5 6.85-7.81 6.85-5.13 0-7.75-2.23-7.75-6.85v-9zm18.5 15.47h-4.54v-15.45h5.86c3.44 5.54 4.59 7.54 5.58 9.54h.09c-.14-1.45-.14-4.25-.14-6.81v-2.73h4.53v15.47h-5.53c-1.21-2.15-5-8.73-5.93-10.62h-.08c.15 1.77.16 3.82.16 6.86v3.76zm28.24-6.15h-8.26v2.58h9.24l-.58 3.57h-13.62v-15.45h13.66V755h-8.7v2.16h8.26zM81.76 572.05c3.72 0 6.31 1.85 6.31 5s-2.44 5.18-6.29 5.18h-3.71v5.25h-5v-15.43zm-3.69 6.82H81c1.36 0 2.14-.55 2.14-1.73 0-1-.6-1.7-2.14-1.7h-2.93zm12.28-6.82h5v11.89h8.31l-.59 3.58H90.35zm19.94 0v9c0 2.46 1.19 3.27 2.84 3.27s2.66-.9 2.66-3.27v-9h5v9c0 4.5-2.5 6.85-7.81 6.85-5.12 0-7.75-2.23-7.75-6.85v-9zm17.71 3.56h-5.1v-3.56h15.21v3.56h-5.08v11.91h-5zm28.85 4.14c0 4.37-2.89 8.13-9 8.13-5.58 0-8.67-3.57-8.67-8.11 0-4.26 3-8.08 8.9-8.08 5.64 0 8.8 3.67 8.8 8.06zm-12.34 0c0 2.69 1.08 4.68 3.61 4.68s3.43-2.28 3.43-4.59c0-2.69-1-4.66-3.57-4.66s-3.44 1.99-3.44 4.52zM58 390.14L57 393h-5l5.86-15.47h6.55l6.2 15.47h-5.4l-1.06-2.88zm5-3.58c-1-2.79-1.6-4.55-2-5.85h-.07c-.34 1.29-1 3.48-1.85 5.85zm8.28 1.81h5c.33 1 1.12 1.79 3.14 1.79 1.79 0 2.34-.54 2.34-1.31s-.49-1.3-3.4-1.81c-5.71-1-6.53-3-6.53-5 0-3.06 2.88-4.84 7.11-4.84 5.14 0 7.21 2.38 7.41 4.67h-4.87c-.18-.69-.61-1.49-2.53-1.49-1.37 0-2 .45-2 1.17s.65 1.05 3 1.49c5.85 1.05 7 2.88 7 5.21 0 2.95-2.48 5.1-7.74 5.1s-7.5-2.2-8-5zm34.53-.6c-.71 3.26-3.33 5.61-8.3 5.61-5.74 0-8.62-3.67-8.62-8.1 0-4.24 2.84-8.09 8.83-8.09 5.25 0 7.72 2.74 8.12 5.55h-5.07a2.77 2.77 0 00-3.07-2.13c-2.35 0-3.5 1.84-3.5 4.56 0 2.46.91 4.74 3.51 4.74a2.82 2.82 0 003.09-2.14zm15.49-.9H113v2.58h9.24l-.58 3.57h-13.6v-15.47h13.67v3.58H113v2.15h8.27zm7.92 6.15h-4.54v-15.47h5.86c3.43 5.54 4.59 7.55 5.58 9.54h.09c-.14-1.45-.14-4.25-.14-6.81v-2.73h4.53V393h-5.53c-1.21-2.15-5-8.74-5.93-10.62h-.08c.15 1.77.16 3.82.16 6.86V393zm22.86-15.47c5.58 0 8.41 3.41 8.41 7.49 0 4.78-3.5 8-8.46 8h-7.79v-15.49zm-2.81 12h2.17c2.5 0 3.74-1.5 3.74-4.39 0-2.37-1-4.11-3.73-4.14h-2.18zm17.78.6l-1 2.88h-5l5.85-15.47h6.56l6.2 15.44h-5.4l-1-2.88zm5-3.58c-1-2.79-1.59-4.55-2-5.85H170c-.33 1.29-1 3.48-1.84 5.85zm13.81 6.43h-4.54v-15.45h5.86c3.43 5.54 4.59 7.55 5.58 9.54h.09c-.14-1.45-.14-4.25-.14-6.81v-2.73h4.53V393h-5.53c-1.21-2.15-5-8.74-5.93-10.62h-.08c.15 1.77.16 3.82.16 6.86V393zm18.62-11.91h-5.1v-3.56h15.21v3.56h-5.08V393h-5zM161.28 198.09c5.59 0 8.42 3.42 8.42 7.49 0 4.78-3.5 8-8.46 8h-7.8v-15.49zm-2.8 12h2.17c2.5 0 3.74-1.5 3.74-4.39 0-2.37-1-4.11-3.73-4.14h-2.18zm27.18-2.68h-8.27V210h9.24l-.57 3.58h-13.63v-15.49h13.67v3.58h-8.71v2.16h8.27zm2.41 1.5h5c.33 1 1.12 1.79 3.14 1.79 1.79 0 2.34-.53 2.34-1.3s-.5-1.31-3.4-1.81c-5.71-1-6.54-3-6.54-5 0-3.06 2.89-4.85 7.11-4.85 5.15 0 7.22 2.38 7.42 4.67h-4.89c-.18-.69-.62-1.48-2.53-1.48-1.37 0-2 .44-2 1.17s.64 1 3 1.49c5.84 1 7 2.88 7 5.21 0 2.95-2.49 5.1-7.74 5.1s-7.5-2.2-8-5zm34.52-.59c-.7 3.26-3.32 5.6-8.29 5.6-5.74 0-8.62-3.66-8.62-8.1 0-4.23 2.84-8.08 8.83-8.08 5.24 0 7.72 2.74 8.12 5.54h-5.07c-.22-.86-.86-2.12-3.07-2.12S211 203 211 205.71c0 2.47.92 4.75 3.52 4.75a2.82 2.82 0 003.09-2.14zm15.49-.91h-8.26V210h9.24l-.58 3.58h-13.62v-15.49h13.66v3.58h-8.7v2.16h8.26zm7.92 6.16h-4.53v-15.48h5.86c3.43 5.54 4.58 7.56 5.58 9.55h.09c-.13-1.46-.13-4.26-.13-6.82v-2.73h4.53v15.48h-5.54c-1.2-2.15-5-8.74-5.93-10.62h-.07c.15 1.76.15 3.82.15 6.85v3.77zm22.87-15.48c5.58 0 8.41 3.42 8.41 7.49 0 4.78-3.5 8-8.46 8H261v-15.49zm-2.81 12h2.17c2.5 0 3.74-1.5 3.74-4.39 0-2.37-1-4.11-3.73-4.14h-2.18zm17.78.59l-1 2.89h-5l5.85-15.48h6.56l6.23 15.48h-5.4l-1.08-2.89zm5-3.58c-1-2.78-1.59-4.54-2-5.84h-.08c-.34 1.28-1 3.48-1.84 5.84zm9.28 6.47v-15.48H304c3.43 5.54 4.58 7.56 5.58 9.55h.08c-.13-1.46-.13-4.26-.13-6.82v-2.73H314v15.48h-5.5c-1.2-2.15-5-8.74-5.93-10.62h-.07c.15 1.76.15 3.82.15 6.85v3.77zm23.16-11.91h-5.11v-3.57h15.22v3.57h-5.08v11.91h-5zM394.48 123.19c0-2.46 0-5.43.15-7.25-.75 3-1.74 7-3.28 12.47h-4.14c-1.21-5.09-2.22-9.37-3-12.5.09 1.81.27 4.8.27 7.45v5h-4.5v-15.43h7.21c1 3.49 2 7.29 2.41 9.9.6-2.74 1.59-6.36 2.62-9.9h7.18v15.48h-4.9zm25.28-2.56c0 4.37-2.89 8.13-9 8.13-5.58 0-8.67-3.56-8.67-8.11 0-4.26 3-8.07 8.9-8.07 5.61 0 8.77 3.66 8.77 8.05zm-12.34 0c0 2.69 1.07 4.69 3.61 4.69s3.43-2.28 3.43-4.6c0-2.69-.95-4.66-3.57-4.66s-3.47 1.99-3.47 4.52zm32 0c0 4.37-2.88 8.13-9 8.13-5.58 0-8.67-3.56-8.67-8.11 0-4.26 3-8.07 8.9-8.07 5.58 0 8.73 3.66 8.73 8.05zm-12.33 0c0 2.69 1.07 4.69 3.6 4.69s3.43-2.28 3.43-4.6c0-2.69-.95-4.66-3.56-4.66s-3.51 1.99-3.51 4.52zm19.62 7.83h-4.54v-15.53H448c3.43 5.54 4.59 7.55 5.58 9.55h.09c-.14-1.46-.14-4.26-.14-6.82v-2.73h4.53v15.48h-5.53c-1.21-2.15-5-8.74-5.93-10.63h-.08c.15 1.77.16 3.83.16 6.86v3.77z"
          transform="translate(-51.96 -77.75)" />`;

  // imgfrag.append(chartImg, ...symbolsToPopulate);

  imgfrag.append(chartImg);
  // imgfrag.append(symbolsToPopulate);

  mountNode.innerHTML = "";
  mountNode.append(imgfrag);
}

/// DELETE (A - add update)

birthChartList.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.matches("button.delete")) {
    const id = target.dataset.id;
    inPlay.deleteBirthChart(id);
    target.closest("li").remove();
    // } else if (target && target.matches("button.update")) {
    //   console.log("update button clicked");
    //   const id = target.dataset.id;
    //   const todo = jamesTodoList.getTodoById(id);
    //   console.log("todo to be updated", todo);
    //   // const index = jamesTodoList.getTodoIndexById(id);
    //   populate(addForm, todo);
    //   addForm.dataset.updating = "true";
    //   addForm.dataset.id = id;
  } else if (target && target.matches("button.show-chart")) {
    const id = target.dataset.id;
    const chart = inPlay.getBirthChartById(id);
    // console.log('bc to show', bcToShow);
    // const chart = inPlay.showBirthChart(bcToShow);
    console.log("chart", chart);
    const showBirthChartSection = document.getElementById(
      "show-birthchart-section",
    );
    renderChart(chart, showBirthChartSection);
  }
});
