class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.res -= this.power;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit) {
      if (this.stat == "resilience") {
        target.res += this.magnitude;
      } else if (this.stat == "power") {
        target.power += this.magnitude;
      }
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

const ninja1 = new Unit("redBeltNinja", 3, 3, 4);
const ninja2 = new Unit("blackBeltNinja", 4, 5, 4);

const effect1 = new Effect(
  "hardAlgorithm",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);
const effect2 = new Effect(
  "Unhandled Promise Rejection",
  1,
  "	reduce target's resilience by 2",
  "resilience",
  -2
);
const effect3 = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);

// console.log(ninja1);
// console.log(ninja2);
// console.log(effect1);
// console.log(effect2);
// console.log(effect3);
// ninja1.attack(ninja2);
// console.log(ninja2);
effect1.play(ninja1);
console.log(ninja1);
effect2.play(ninja1);
console.log(ninja1);
effect3.play(ninja1);
console.log(ninja1);
