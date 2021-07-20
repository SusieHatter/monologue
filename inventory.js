// out-of-play (destroyed or not introduced)
const OUT_OF_PLAY = "OUT_OF_PLAY";
// somewhere in the world not yet found
const IN_WORLD = "IN_WORLD";
// being carried by the player
const ON_PLAYER = "ON_PLAYER";
// handled by player already (taken and destroyed/dropped)
const DROPPED = "DROPPED";

export class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.state = IN_WORLD;
  }

  pickup() {
    this.state = ON_PLAYER;
  }

  drop() {
    this.state = DROPPED;
  }

  isInInventory() {
    return this.state === ON_PLAYER;
  }
}

export class Armor extends Item {
  constructor(name, description, protection) {
    super(name, description);
    this.protection = protection;
  }
}

export class Weapon extends Item {
  constructor(name, description, damage) {
    super(name, description);
    this.damage = damage;
  }
}

export class Wallet extends Item {
  constructor(name, description, gold, silver, copper) {
    super(name, description);
    this.gold = gold;
    this.silver = silver;
    this.copper = copper;
  }
}
