function countMoney(obj) {
  let reply = `Your ${obj.name} contains`;
  if (obj.gold) {
    reply = reply + `${obj.gold} gold`;
    if (obj.silver && obj.copper) {
      reply = reply + `${obj.silver} silver` + `${obj.copper} copper`;
    } else if (obj.copper || obj.silver) {
      reply = reply + `${obj.silver} silver` + `${obj.copper} copper`;
    }
  }
  if (obj.silver) {
    reply = reply + `${obj.silver} silver`;
    if (obj.gold && obj.copper) {
      reply = reply + `${obj.gold} gold` + `${obj.copper} copper`;
    } else if (obj.copper) {
      reply = reply + `${obj.copper} copper`;
    }
  }
  if (obj.copper) {
    reply = reply + `${obj.copper} copper`;
  }
  if (!obj.gold && !obj.silver && !obj.copper) {
    reply = reply + "no";
  }
  reply = reply + "coin";
  if (
    obj.copper > 1 ||
    (obj.copper === 0 && obj.silver > 1) ||
    (obj.copper === 0 && obj.silver === 0 && obj.gold > 1) ||
    (!obj.gold && !obj.silver && !obj.copper)
  ) {
    reply = reply + "s";
  }
  reply = reply + ".";
  return reply;
}
