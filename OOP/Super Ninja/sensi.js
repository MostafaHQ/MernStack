class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("Ninja's name " + this.name);
  }

  showStats() {
    console.log(
      "Ninja's stats " + this.name,
      this.strength,
      this.speed,
      this.health
    );
  }

  drinkSake() {
    this.health += 10;
  }
}
const myninja = new Ninja("Jack", 30);

myninja.showStats();
myninja.drinkSake();
myninja.showStats();

class Sensi extends Ninja {
  constructor(name) {
    super(name, 200, 10, 10);
    this.wisdom = 10;
  }
  speakWisdome() {
    this.drinkSake();
  }
}

const sensi = new Sensi("Master Splinter");
sensi.speakWisdome();
sensi.showStats();
