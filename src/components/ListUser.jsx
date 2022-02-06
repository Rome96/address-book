/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import { FlatList, StyleSheet } from "react-native";
import React from "react";
import ItemUser from "./ItemUser";

const ListUser = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={(item) => <ItemUser {...item} />}
    />
  );
};

export default ListUser;

const styles = StyleSheet.create({});
