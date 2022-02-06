/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import bookReducer from "../reducers";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, createStore } from "redux";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: bookReducer,
};

//combine reducers
const reducers = combineReducers({
  // ui: uiReducer,
  bookReducer: persistReducer(persistConfig, bookReducer),
  // notes: notesReducer,
});

export const store = createStore(reducers);

export const persistor = persistStore(store);
