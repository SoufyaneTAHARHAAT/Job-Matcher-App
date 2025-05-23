import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { signUpWithEmail } from "../../services/authService";
import { createUserDocument } from "../../services/userService";
import { useGoogleAuth } from "../../services/googleAuthService";
import theme from "../../constants/theme";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { promptAsync } = useGoogleAuth();

  const handleRegister = async () => {
    try {
      const user = await signUpWithEmail(email, password);
      
      await createUserDocument(user.uid, {
        email,
        role: "candidat",
        createdAt: new Date(),
      });
  
      Alert.alert("Succès", "Compte créé !");
    } catch (error: any) {
      Alert.alert("Erreur", error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholderTextColor={theme.colors.textSecondary}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholderTextColor={theme.colors.textSecondary}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={promptAsync}>
        <Text style={styles.googleText}>S'inscrire avec Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontWeight: "bold",
    marginBottom: theme.spacing.lg,
    textAlign: "center",
    color: theme.colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 8,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    color: theme.colors.textPrimary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: 8,
    marginBottom: theme.spacing.sm,
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: theme.fontSizes.button,
  },
  googleButton: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    padding: theme.spacing.md,
    borderRadius: 8,
  },
  googleText: {
    textAlign: "center",
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.button,
  },
});
