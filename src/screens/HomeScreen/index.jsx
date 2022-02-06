/**
 * This file is part of "Address-book"
 * Copyright (c) 2022
 * Address-book
 * All rights reserved
 *
 * @author Turiano Romero <https://github.com/Rome96 | romero.guzman18@gmail.com>
 */

import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";

import { api } from "../../api";
import { styles } from "./styles";
import { colors } from "../../utils";
import ListUser from "../../components/ListUser";
import { useSelector, useDispatch } from "react-redux";
import LinearSeparator from "../../components/LinearSeparator";
import { getUsersList } from "../../redux/actions/bookAction";

const index = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, userList } = useSelector((state) => state.bookReducer);

  useEffect(() => {
    if (!userList.length) {
      getDataListUser();
    }
  }, []);

  const getDataListUser = async () => {
    try {
      const res = await api.getListUserAll();
      dispatch(getUsersList(res));
      console.log({ res });
    } catch (error) {
      console.log("Error getDataListUser =>", error);
    }
  };

  if (loading) return <ActivityIndicator color={colors.blu} />;

  return (
    <View style={{ flex: 1 }}>
      {/* <Header /> */}
      {/* <LinearSeparator /> */}
      <View style={styles.container}>
        {!userList.length ? (
          <View style={styles.containerEmptyList}>
            <Text style={styles.textEmptyList}>Lista vacia</Text>
          </View>
        ) : (
          <ListUser data={userList} />
        )}
        <TouchableOpacity
          style={styles.containerBtnPlus}
          onPress={() => navigation.navigate("UserScreen")}
        >
          <Ionicons name="add-outline" size={32} color={colors.secondaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
