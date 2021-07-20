import { setGameText, addOption } from "../game.js";
import { INN_ROOM_KEY, OLD_CLOAK, SMALL_POUCH, BOOTS } from "../objects.js";

export const innRoomStarting = () => {
  OLD_CLOAK.pickup();
  SMALL_POUCH.pickup();
  BOOTS.pickup();
  setGameText(`You wake up one morning not realizing how the fuck you
  ended up on this bed. Groggy and confused you stand up as fast as you can,
  tumbling around the room.`);
  addOption("Try to go out the door", () => {
    if (INN_ROOM_KEY.isInInventory()) {
      innHallway();
    } else {
      innRoomDoorLocked();
    }
  });
};

const innRoomDoorLocked = () => {
  setGameText(`Door is locked`);
  if (INN_ROOM_KEY.isInInventory()) {
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
  setGameText(`You find the <em>${INN_ROOM_KEY.name}</em>`);
  INN_ROOM_KEY.pickup();
  addOption(`Pick up <em>${INN_ROOM_KEY.name}</em>`, innRoomDoorLocked);
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
