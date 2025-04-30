import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../constants/theme";

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur JobMatcher 👋</Text>
      
      <Image
        source={require("../../assets/job-matcher-logo.png")}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>Trouvez le job ou le candidat idéal !</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonOutlineText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: theme.fontSizes.title,
    fontWeight: "bold",
    marginBottom: theme.spacing.sm,
    textAlign: "center",
    color: theme.colors.textPrimary,
  },
  subtitle: {
    fontSize: theme.fontSizes.subtitle,
    color: theme.colors.textSecondary,
    textAlign: "center",
    marginBottom: theme.spacing.lg,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: theme.spacing.md,
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
    fontSize: theme.fontSizes.button,
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: 8,
  },
  buttonOutlineText: {
    color: theme.colors.primary,
    textAlign: "center",
    fontSize: theme.fontSizes.button,
  },
});
