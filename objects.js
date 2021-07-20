import { Weapon, Item, Armor, Wallet } from "./inventory.js";

export const INN_ROOM_KEY = new Item("Inn room key", "A small, and rusty key");

export const SIMPLE_SWORD = new Weapon(
  "Simple sword",
  "One handed sword for a tiny warrior",
  5
);

export const TWO_HANDED_BATTLE_AXE = new Weapon(
  "Two-handed battle axe",
  "Made with iron blades and a wooden handle",
  4
);

export const THE_PROTECTORS_BLADE = new Weapon(
  "The protector's blade",
  "As the legends foretold.",
  50
);

export const SMALL_POUCH = new Wallet(
  "Small leather pouch",
  "It can only carry as much",
  0,
  3,
  5
);

export const OLD_CLOAK = new Armor(
  "A wool cloak",
  "A very raggedy dark wool cloak",
  0
);

export const BOOTS = new Armor(
  "Leather boots",
  "These look really worn-out",
  0
);
