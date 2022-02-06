import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { View, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";
import { colors } from "../../utils";
import TitleInput from "../../components/TitleInput";
import { createUser, updateUser } from "../../redux/actions/bookAction";
import ButtonComponent from "../../components/ButtonComponent";

const index = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const idParams = route?.params?.id;
    const {userList} = useSelector((state) => state.bookReducer);


  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      direccion: "",
    },
  });

  const onSubmit = (data) => {
  const dataCreateUser = { ...data, id: uuidv4() };
    if(idParams) {
      dispatch(updateUser(data));
    } else {
      dispatch(createUser(dataCreateUser));
    }
    navigation.goBack();
  };

useEffect(() => {
  if (idParams) {
    _dataUpdate()
  }
}, []);

  const _dataUpdate = () => {
    const dataUpdate = userList.find((user) => user.id === idParams);
    reset(dataUpdate);
  }

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias fugiat ullam cum
          aspernatur, quibusdam
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.containerInput}>
              <TitleInput title="Nombre" />
              <TextInput
                value={value}
                onBlur={onBlur}
                style={styles.input}
                placeholder="Nombre.."
                onChangeText={(value) => onChange(value)}
              />
            </View>
          )}
          name="nombre"
          rules={{ required: true }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.containerInput}>
              <TitleInput title="Apellido" />
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder="Apellido.."
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name="apellido"
          rules={{ required: true }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.containerInput}>
              <TitleInput title="Telefono" />
              <TextInput
                value={value}
                onBlur={onBlur}
                style={styles.input}
                placeholder="Telefono.."
                keyboardType="number-pad"
                onChangeText={(value) => onChange(value)}
              />
            </View>
          )}
          name="telefono"
          rules={{ required: true }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.containerInput}>
              <TitleInput title="Dirección" />
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder="Direccion.."
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </View>
          )}
          name="direccion"
          rules={{ required: true }}
        />

        <ButtonComponent title={idParams ? 'Actualizar': 'crear'} onPress={handleSubmit(onSubmit)} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default index;
