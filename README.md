# Hemograma Mobile - Frontend

[Repositório do Backend](https://github.com/TanyRM/SSU-2025-02_hemograma)


## Descrição

Este frontend mobile faz parte de um sistema de software voltado para a área da saúde, com foco no monitoramento de crianças de 0 a 5 anos na rede municipal de educação. O sistema tem como objetivo receber resultados de exames de hemograma completo, analisar tendências de imunidade baixa e casos de anemia e notificar gestores de saúde sobre situações críticas.

Desenvolvido em **React Native** com **Expo**, o aplicativo permite que os usuários visualizem dados de hemogramas por meio de dashboards, acompanhem alertas de anemia e consumam informações diretamente do backend via API REST, de forma intuitiva e interativa.

O aplicativo foi projetado para dispositivos Android e iOS.

---

## Funcionalidades

- **[DashboardScreen](app/(tabs)/dashboard.tsx)**
  - Exibe métricas gerais sobre hemogramas, anemia, alertas e surtos.
  - Gráficos de barras, linhas ou pizza mostrando distribuição por faixa etária, classificação e evolução temporal.

- **[AlertasScreen](components/alerta-anemia.tsx)**
  - Mostra notificações de surtos de anemia em banners.
  - Atualiza em tempo real com base nos dados do backend.

---

## Estrutura do Projeto

- `app/` → telas principais do app.
- `components/` → componentes reutilizáveis (cards, gráficos, tabelas, filtros).
- `services/` → comunicação com a API REST (axios/fetch).

---

## Integração com Backend

O frontend consome os seguintes endpoints REST do backend:

| Endpoint                              | Função                                        |
|---------------------------------------|----------------------------------------------|
| `/dashboard`                           | Dados agregados e métricas para gráficos    |
| `/monitoramento/hemogramas`           | Listagem completa de hemogramas             |
| `/monitoramento/hemogramas/anemia`    | Alertas de surto de anemia                  |

---

## Tecnologias Utilizadas

- React Native + Expo
- React Navigation (navegação entre telas)
- Axios ou Fetch API (requisições HTTP)
- Victory Native / React Native Chart Kit (gráficos)

---

## Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/Vitorialuz229/SSU-2025-02_hemograma-mobile.git
cd SSU-2025-02_hemograma-mobile
```

1. Instale as dependências:

```
npm install
```

2. Execute o projeto com Expo:

```
expo start
```

4. Abra no seu dispositivo Android/iOS ou emulador.
    *  Recomendado usar `Expo GO`
