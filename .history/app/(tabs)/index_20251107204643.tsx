import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image'; // Importar Image para o ícone
import { Platform, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={styles.navbar}>
        <ThemedText type="title" style={styles.navbarTitle}>Hemograma Mobile</ThemedText>
      </ThemedView>

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          // Usando o ícone de hemograma gerado anteriormente como imagem de cabeçalho
          <Image
            source={require('@/assets/images/icon.png')} // Caminho para o seu ícone
            style={styles.headerIcon}
            contentFit="contain" // Garante que o ícone se ajuste sem cortar
          />
        }>
        <ThemedView style={styles.contentContainer}>
          <ThemedText type="title" style={styles.welcomeTitle}>
            Bem-vindo ao Sistema de Hemograma!
          </ThemedText>
          <ThemedText style={styles.welcomeSubtitle}>
            Visualize e gerencie seus resultados de exames de sangue de forma rápida e intuitiva.
          </ThemedText>

          {/* Você pode adicionar botões ou links para outras seções aqui */}
          {/* Por exemplo: */}
          {/* <Link href="/results">
            <ThemedText type="link" style={styles.actionButton}>Ver Meus Resultados</ThemedText>
          </Link>
          <Link href="/new-exam">
            <ThemedText type="link" style={styles.actionButton}>Registrar Novo Exame</ThemedText>
          </Link> */}

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
    backgroundColor: '#932f2fff', // Cor de fundo do navbar
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  navbarTitle: {
    color: '#fff', // Cor do texto do título do navbar
  },
  headerIcon: {
    width: '100%', // Ocupa a largura total do cabeçalho
    height: '100%', // Ocupa a altura total do cabeçalho
    // Você pode ajustar o posicionamento se o ícone não preencher bem
    // Por exemplo, para centralizar:
    // alignSelf: 'center',
    // marginTop: 20, // Ajuste vertical
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center', // Centraliza o conteúdo principal
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
    color: '#666', // Uma cor um pouco mais suave para o subtítulo
    lineHeight: 24,
  },
  actionButton: {
    marginTop: 20,
    fontSize: 18,
    color: '#007bff',
    fontWeight: 'bold',
  },
});