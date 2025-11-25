import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={styles.navbar}>
        {/* <ThemedText type="title" style={styles.navbarTitle}>Hemograma Mobile</ThemedText> */}
      </ThemedView>

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/icon.png')}
            style={styles.headerIcon}
            contentFit="cover"
          />
        }>
        <ThemedView style={styles.contentContainer}>
          <ThemedText type="title" style={styles.welcomeTitle}>
            Bem-vindo ao Sistema de Hemograma!
          </ThemedText>
          <ThemedText style={styles.welcomeSubtitle}>
            Visualize e gerencie seus resultados de exames de sangue de forma rápida e intuitiva.
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#932f2fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  navbarTitle: {
    color: '#fff',
  },
  headerIcon: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    gap: 15,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
});
