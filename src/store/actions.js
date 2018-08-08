import { getLama } from "./paddock";

export const loadLama = id => ({
  type: "LAMAS/LOAD",
  id
});

export const addLama = index => ({
  type: "LAMAS/ADD",
  lama: getLama(index)
});

export const updateLama = lama => ({
  type: "LAMAS/UPDATE",
  lama
});

export const removeLama = id => ({
  type: "LAMAS/REMOVE",
  id
});
