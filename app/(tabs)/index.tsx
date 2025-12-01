import { AlertaAnemia } from "@/components/alerta-anemia";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerHeight={250}
        headerImage={
          <View style={styles.headerContainer}>
            <Image
              source={require("@/assets/images/icon.png")}
              style={styles.headerIcon}
            />
          </View>
        }
      >
        <ThemedView style={styles.contentContainer}>
          <ThemedText type="title" style={styles.welcomeTitle}>
            Sistema de Hemograma
          </ThemedText>

          <ThemedText style={styles.welcomeSubtitle}>
            Gerencie alertas, indicadores e relatórios de exames.
          </ThemedText>

        </ThemedView>
      </ParallaxScrollView>

      <AlertaAnemia />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
  },
  cardsContainer: {
    width: "100%",
    marginTop: 30,
    gap: 15,
  },
  card: {
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDesc: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
});
