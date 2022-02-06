/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import React from "react";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import { colors } from "../utils";
import { deleteUser } from "../redux/actions/bookAction";

const ItemUser = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { nombre, apellido, id } = item;

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("UserScreen", {
      id
    })}>
      <View>
        <Text style={styles.names}>
          {nombre} {apellido}
        </Text>
        <Text style={styles.phone}>{item?.telefono}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(deleteUser(id))}>
        <Ionicons name="trash-outline" size={32} color={colors.red} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.secondaryColor,
    marginVertical: 8,
    borderRadius: 8,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  names: {
    fontSize: 17,
    marginBottom: 4,
    fontWeight: "700",
    color: colors.black,
  },
  phone: {
    fontSize: 15,
  },
});

export default ItemUser;
