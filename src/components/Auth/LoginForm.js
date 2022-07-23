import React, { useState } from "react";
import { useFormik } from "formik";
import { View } from "react-native";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";

import Button from "../../components/Button";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      if (username !== user.username || password !== user.password) {
        setError("Las credenciales no son correctas");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Title>Iniciar sesión</Title>
      <Input
        placeholder="Nombre de usuario"
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />

      <Input
        placeholder="Contraseña"
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />

      <Button title="Entrar" onPress={formik.handleSubmit} />

      <ErrorLabel>{formik.errors.username}</ErrorLabel>
      <ErrorLabel>{formik.errors.password}</ErrorLabel>
      <ErrorLabel>{error}</ErrorLabel>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("la contraseña es obligatorio"),
  };
}

const Title = styled.Text`
  font-size: 28px;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  height: 40px;
  margin: 12px;
  padding: 10px;
  border-width: 1px;
  border-radius: 10px;
`;

const ErrorLabel = styled.Text`
  color: #f00;
  text-align: center;
  margin-top: 20px;
`;
