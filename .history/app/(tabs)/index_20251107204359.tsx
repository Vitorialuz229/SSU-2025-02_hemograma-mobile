import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={styles.navbar}>
        {/* <ThemedText type="title">Hemograma Mobile</ThemedText> */}
      </ThemedView>

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Bem Vindo ao Sistema de Hemograma</ThemedText>
        </ThemedView>
       
       
       
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60, // Altura do navbar
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', // Cor de fundo do navbar (azul, por exemplo)
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Ajuste para status bar no Android
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});