import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { signInWithEmail } from "../../services/authService";
import { useGoogleAuth } from "../../services/googleAuthService";
import theme from "../../constants/theme";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { promptAsync } = useGoogleAuth();

  const handleSignIn = async () => {
    try {
      await signInWithEmail(email, password);
      Alert.alert("Connexion réussie !");
    } catch (error: any) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={promptAsync}>
        <Text style={styles.googleText}>Se connecter avec Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

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
