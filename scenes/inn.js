import { setGameText, addOption } from "../game.js";
import { pickup, inInventory, INN_ROOM_KEY } from "../inventory.js";

export const innRoomStarting = () => {
  setGameText(`You wake up one morning not realizing how the fuck you
  ended up on this bed. Groggy and confused you stand up as fast as you can,
  tumbling around the room.`);
  addOption("Try to go out the door", () => {
    if (inInventory(INN_ROOM_KEY)) {
      innHallway();
    } else {
      innRoomDoorLocked();
    }
  });
};

const innRoomDoorLocked = () => {
  setGameText(`Door is locked`);
  if (inInventory(INN_ROOM_KEY)) {
    addOption(`Open door`, innHallway);
  } else {
    addOption(`Search bed`, innRoomSearchBed);
    addOption(`Search closet`, innRoomSearchCloset);
    addOption(`Search carpet`, innRoomSearchCarpet);
  }
  addOption(`Sleep`, innRoomSleep);
};

const innRoomSearchBed = () => {
  setGameText(`Nothing here.`);
  addOption(`Keep looking`, innRoomDoorLocked);
};

const innRoomSearchCloset = () => {
  setGameText(`Nothing here.`);
  addOption(`Keep looking`, innRoomDoorLocked);
};

const innRoomSearchCarpet = () => {
  setGameText(`You find the <em>${INN_ROOM_KEY}</em>`);
  pickup(INN_ROOM_KEY);
  addOption(`Pick up <em>${INN_ROOM_KEY}</em>`, innRoomDoorLocked);
};

const innRoomSleep = () => {
  setGameText(
    `You jump back into bed and hope you'll wake up from this nightmare.`
  );
  addOption(`Clean up and stand up`, innRoomDoorLocked);
};

const innHallway = () => {
  setGameText(`You unlock the door and walk out to the hallway. It's empty.`);
  addOption("Go back to the room", innRoomRevisit);
};

const innRoomRevisit = () => {
  setGameText(`It's the same room you woke up in.`);
  addOption("Go out the door", innHallway);
};
