/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../utils";

const TitleInput = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
    </View>
  );
};

export default TitleInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },
});
