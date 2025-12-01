import { Platform } from 'react-native';

const tintColorLight = '#000000ff';
const tintColorDark = '#ffffff';

export const Colors = {
  light: {
    text: '#11181C',          // Texto principal
    background: '#ffffff',    // Fundo da tela
    card: '#f5f5f5',          // Fundo de cards/painéis
    tint: tintColorLight,      // Botões e destaques
    icon: '#687076',           // Ícones
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',          // Texto principal
    background: '#151718',    // Fundo da tela
    card: '#1F2022',          // Fundo de cards/painéis
    tint: tintColorDark,       // Botões e destaques
    icon: '#9BA1A6',           // Ícones
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
