/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import { StyleSheet } from "react-native";
import { colors } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  containerBtnPlus: {
    width: 50,
    right: 20,
    bottom: 20,
    height: 50,
    borderRadius: 50 / 2,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  containerEmptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textEmptyList: {
    fontSize: 30,
    fontWeight: '800'
  }
});
