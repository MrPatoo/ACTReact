import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export default function HomeScreen() {
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {user?.displayName || "Usuario"} 👋</Text>
      <Text>Email: {user?.email}</Text>
      <Button title="Cerrar sesión" onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
