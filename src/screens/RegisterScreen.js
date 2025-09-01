import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

 const register = async () => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario creado:", user); // Verifica si el usuario se ha creado
    await updateProfile(user, { displayName: name });
    console.log("Nombre de usuario actualizado:", name); // Verifica si el nombre se ha actualizado
  } catch (error) {
    alert(error.message); // Muestra el mensaje de error
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Registrar" onPress={register} />
      <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
        ¿Ya tienes cuenta? Inicia sesión
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { color: "blue", marginTop: 10, textAlign: "center" },
});
