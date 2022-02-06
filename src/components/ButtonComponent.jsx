/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils";

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: colors.blue,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.white,
  },
});
