let btn = $('#start');



let homeTeam = {
  center: {
    name: 'yzerman',
    number: 19,
    position: 'center',
    hand: 'right',
    shot: 4,
    shotBias: 4,
    pass: 4,
    speed: 4, //helps breakaway
    getOpen: 4, //helps get open
    open: false,
    offense: 5,
    defense: 5,
    faceoff: 4,
    shotblock: 3,
    risk: 2,
    discipline: 5,
    zone: 'neutral',
    hasPuck: false
  },
  leftWing: {
    name: 'shanahan',
    number: 14,
    position: 'leftWing',
    hand: 'right',
    shot: 5,
    shotBias: 5,
    pass: 3,
    speed: 2, //helps breakaway
    getOpen: 5, //helps get open
    open: false,
    offense: 5,
    defense: 2,
    faceoff: 1,
    shotblock: 2,
    risk: 4,
    discipline: 3,
    zone: 'neutral',
    hasPuck: false
  },
  rightWing: {
    name: 'mccarty',
    number: 25,
    position: 'rightWing',
    hand: 'right',
    shot: 3,
    shotBias: 2,
    pass: 3,
    speed: 3, //helps breakaway
    getOpen: 3, //helps get open
    open: false,
    offense: 3,
    defense: 5,
    faceoff: 1,
    shotblock: 5,
    risk: 4,
    discipline: 2,
    zone: 'neutral',
    hasPuck: false
  },
  leftDefense: {
    name: 'lidstrom',
    number: 5,
    position: 'leftDefense',
    hand: 'left',
    shot: 4,
    shotBias: 3,
    pass: 5,
    speed: 3, //helps breakaway
    getOpen: 4, //helps get open
    open: false,
    offense: 5,
    defense: 5,
    faceoff: 0,
    shotblock: 5,
    risk: 1,
    discipline: 5,
    zone: 'neutral',
    hasPuck: false,
  },
  rightDefense: {
    name: 'murphy',
    number: 55,
    position: 'rightDefense',
    hand: 'right',
    shot: 4,
    shotBias: 2,
    pass: 5,
    speed: 3, //helps breakaway
    getOpen: 4, //helps get open
    open: false,
    offense: 4,
    defense: 5,
    faceoff: 0,
    shotblock: 3,
    risk: 3,
    discipline: 4,
    zone: 'neutral',
    hasPuck: false
  },
  goalie: {
    name: 'osgood',
    number: 30,
    position: 'goalie',
    gloveHigh: 4,
    gloveLow: 4,
    blockerHigh: 3,
    blockerLow: 3,
    fiveHole: 4,
  }
};

let awayTeam = {
  center: {
    name: 'gretzky',
    number: 99,
    position: 'center',
    hand: 'left',
    shot: 4,
    shotBias: 4,
    pass: 4,
    speed: 4, //helps breakaway
    getOpen: 4, //helps get open
    open: false,
    offense: 5,
    defense: 5,
    faceoff: 4,
    shotblock: 3,
    risk: 2,
    discipline: 5,
    zone: 'neutral',
    hasPuck: false
  },
  leftWing: {
    name: 'hull',
    number: 16,
    position: 'leftWing',
    hand: 'right',
    shot: 5,
    shotBias: 5,
    pass: 3,
    speed: 2, //helps breakaway
    getOpen: 5, //helps get open
    open: false,
    offense: 5,
    defense: 2,
    faceoff: 1,
    shotblock: 2,
    risk: 4,
    discipline: 3,
    zone: 'neutral',
    hasPuck: false
  },
  rightWing: {
    name: 'bissonnette',
    number: 12,
    position: 'rightWing',
    hand: 'right',
    shot: 3,
    shotBias: 4,
    pass: 3,
    speed: 3, //helps breakaway
    getOpen: 3, //helps get open
    open: false,
    offense: 2,
    defense: 5,
    faceoff: 1,
    shotblock: 5,
    risk: 4,
    discipline: 2,
    zone: 'neutral',
    hasPuck: false
  },
  leftDefense: {
    name: 'doughty',
    number: 8,
    position: 'leftDefense',
    hand: 'left',
    shot: 4,
    shotBias: 3,
    pass: 5,
    speed: 3, //helps breakaway
    getOpen: 4, //helps get open
    open: false,
    offense: 5,
    defense: 5,
    faceoff: 0,
    shotblock: 5,
    risk: 1,
    discipline: 3,
    zone: 'neutral',
    hasPuck: false,
  },
  rightDefense: {
    name: 'suban',
    number: 76,
    position: 'rightDefense',
    hand: 'right',
    shot: 4,
    shotBias: 4,
    pass: 5,
    speed: 3, //helps breakaway
    getOpen: 4, //helps get open
    open: false,
    offense: 5,
    defense: 3,
    faceoff: 0,
    shotblock: 3,
    risk: 5,
    discipline: 4,
    zone: 'neutral',
    hasPuck: false
  },
  goalie: {
    name: 'osgood',
    number: 30,
    position: 'goalie',
    gloveHigh: 4,
    gloveLow: 4,
    blockerHigh: 3,
    blockerLow: 3,
    fiveHole: 4,
  }
};


const homeOnIce = [homeTeam.center, homeTeam.leftWing, homeTeam.rightWing, homeTeam.leftDefense, homeTeam.rightDefense];
const awayOnIce = [awayTeam.center, awayTeam.leftWing, awayTeam.rightWing, awayTeam.leftDefense, awayTeam.rightDefense];
const scoringZone = ['high', 'medium', 'low'];
const shot = ['gloveHigh', 'gloveLow', 'blockerHigh', 'blockerLow', 'fiveHole'];
let possession;

//buttons
btn.click(function(){
  faceoff();
  whoHasThePuck(homeOnIce,awayOnIce);
})

//actions
function rollDice(level) {
  return Math.floor(Math.random() * 6 + level)
};

function randomNum(max) {
  return Math.floor(Math.random() * max);
}

function faceoff() {
  let home = rollDice(homeOnIce[0].faceoff);
  let away = rollDice(awayOnIce[0].faceoff);
  if (home >= away) {
    possession = 'homeTeam';
  } else {
    possession = 'awayTeam';
  }
  console.log(possession + ' wins faceoff');
  playerSelect(possession)
};

function playerSelect(possession) {
  noPossession(homeOnIce, awayOnIce);
  let num = randomNum(homeOnIce.length);
  if (possession === 'homeTeam') {
    homeOnIce[num].hasPuck = true;
  } else {
    awayOnIce[num].hasPuck = true;
  }
  return randomNum(5);
}

function noPossession(home, away) {
  home.forEach(player => player.hasPuck = false);
  away.forEach(player => player.hasPuck = false);
}

function whoHasThePuck(home, away) {
  home.forEach(player => {
    if (player.hasPuck === true) console.log(player.name + ' has the puck');
  });
  away.forEach(player => {
    if (player.hasPuck === true) console.log(player.name + ' has the puck');
  });
}
