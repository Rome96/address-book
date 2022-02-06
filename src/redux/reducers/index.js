/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import { types } from "../types";

const initialState = {
  loading: true,
  userList: [],
  poke: {},
};

const bookReducer = (state = initialState, action) => {
  console.log('Action => ', action);
  switch (action.type) {
    case types.getUsers:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };

    case types.deleteUser:
      return {
        ...state,
        loading: false,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };

    case types.createUser:
      return {
        ...state,
        loading: false,
        // userList: state.userList.concat(action.payload),
        userList: [action.payload, ...state.userList],
      };

    case types.updateUser:
      return {
        ...state,
        loading: false,
        // userList: state.userList.concat(action.payload),
        userList: state.userList.map((user) => {
          if (user.id !== action.payload.id) {
            return user;
          } else {
            return {
              ...user,
              id: action.payload.id,
              nombre: action.payload.nombre,
              apellido: action.payload.apellido,
              telefono: action.payload.telefono,
              direccion: action.payload.direccion,
            };
          }
        }),
      };
    default:
      return state;
  }
};

export default bookReducer;
