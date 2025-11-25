import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

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
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Passo 1: Experimente</ThemedText>
          <ThemedText>
            Edite <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> para ver as mudanças.
            Pressione{' '}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12',
              })}
            </ThemedText>{' '}
            para abrir as ferramentas de desenvolvedor.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Link href="/explore">
            <Link.Trigger>
              <ThemedText type="subtitle">Passo 2: Explore</ThemedText>
            </Link.Trigger>
            <Link.Preview />
            <Link.Menu>
              <Link.MenuAction title="Ação" icon="cube" onPress={() => alert('Ação pressionada')} />
              <Link.MenuAction
                title="Compartilhar"
                icon="square.and.arrow.up"
                onPress={() => alert('Compartilhar pressionado')}
              />
              <Link.Menu title="Mais" icon="ellipsis">
                <Link.MenuAction
                  title="Deletar"
                  icon="trash"
                  destructive
                  onPress={() => alert('Deletar pressionado')}
                />
              </Link.Menu>
            </Link.Menu>
          </Link>

          <ThemedText>
            {`Toque na aba Explorar para saber mais sobre o que está incluído neste aplicativo inicial.`}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Passo 3: Comece do zero</ThemedText>
          <ThemedText>
            {`Quando estiver pronto, execute `}
            <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para obter um diretório{' '}
            <ThemedText type="defaultSemiBold">app</ThemedText> novo. Isso moverá o{' '}
            <ThemedText type="defaultSemiBold">app</ThemedText> atual para{' '}
            <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          </ThemedText>
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