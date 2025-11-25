import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerHeight={250} 
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/hemograma_icon.png')}
            style={styles.headerIcon}
            contentFit="cover"
          />
        </View>
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
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerIcon: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    position: 'absolute',
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Fundo semitransparente para destacar
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
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
