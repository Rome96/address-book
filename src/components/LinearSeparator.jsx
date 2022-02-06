/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils";

const LinearSeparator = () => {
  return <View style={styles.container} />;
};

export default LinearSeparator;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: colors.gray,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
});
