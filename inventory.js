const inventory = [];

export const inInventory = (item) => {
  return inventory.indexOf(item) >= 0;
};

export const pickup = (item) => {
  inventory.push(item);
};

export const drop = (item) => {
  inventory.filter((i) => i !== item);
};

// Items
export const INN_ROOM_KEY = "Inn Room Key";
