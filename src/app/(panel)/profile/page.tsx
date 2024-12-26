import { supabase } from "@/src/lib/supabase";
import { Alert, Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import colors from "@/constants/colors";

export default function Profile() {
  const { setAuth, user } = useAuth();

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();
    setAuth(null);

    if (error) {
      Alert.alert("Error", "Erro ao sair da conta, tente mais tarde.");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>Perfil</Text>
      <Text style={styles.texto}>{user?.email}</Text>
      <Text style={styles.texto}>{user?.id}</Text>
      <Pressable onPress={handleSignout} style={styles.button}>
        <Text style={styles.title}>Sair</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.green,
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 8,
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
  perfil: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "bold",
    marginBottom: 24,
  },
  texto: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "300",
    marginBottom: 8,
  },
});
