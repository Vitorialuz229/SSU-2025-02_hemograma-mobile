import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import API_BASE_URL from "@/src/config/api";
import React, { useEffect, useMemo, useState } from "react";
import {
  Dimensions,
  Text as RNText,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";
import { ActivityIndicator, Card, Text } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const chartWidth = Math.min(screenWidth - 32, 400);

  const cardColor = isDark ? Colors.dark.card : Colors.light.card;
  const textColor = isDark ? Colors.dark.text : Colors.light.text;

  const backgroundColor = isDark
    ? Colors.dark.background
    : Colors.light.background;
  const primaryColor = isDark ? "#8c0000ff" : "#f90000ff";
  const COLORS = isDark
    ? ["#4DB6FF", "#FFD277", "#FF8A65", "#CCCCCC", "#9BE7C4"]
    : ["#2E86AB", "#F6C85F", "#E4572E", "#9B9B9B", "#6AB187"];

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/dashboard`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setError(String(e.message ?? e));
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const timelineChart = useMemo(() => {
    if (!data?.timeline?.length) return null;
    return data.timeline.map((p: any) => ({
      value: p.total,
      label: p.periodo,
    }));
  }, [data]);

  const classificacaoChart = useMemo(() => {
    if (!data?.porClassificacao) return null;
    return Object.entries(data.porClassificacao).map(([name, value], i) => ({
      value: Number(value) || 0,
      label: name,
      color: COLORS[i % COLORS.length],
    }));
  }, [data, COLORS]);

  interface TimelinePoint {
    value: number;
    label: string;
  }

  const timelineLabels: string[] = (timelineChart ?? []).map((item) => {
    const date = new Date(item.label);
    return date.toLocaleString("pt-BR", { month: "short" });
  });

  const faixaChart = useMemo(() => {
    if (!data?.porFaixaEtaria) return null;
    return Object.entries(data.porFaixaEtaria).map(([faixa, total], i) => ({
      value: Number(total) || 0,
      label: faixa,
      color: COLORS[i % COLORS.length],
    }));
  }, [data, COLORS]);

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor }]}>
        <ActivityIndicator animating size={48} color={primaryColor} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.center, { backgroundColor }]}>
        <Text variant="headlineSmall" style={{ color: textColor }}>
          Erro ao carregar dashboard
        </Text>
        <Text style={{ color: textColor }}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor, paddingTop: 45 },
      ]}
    >
      {/* CARDS */}
      <View style={styles.headerCards}>
        <MetricCard
          title="Total de HMG"
          value={data.totalHemogramas}
          cardColor={cardColor}
          textColor={textColor}
        />
        <MetricCard
          title="Casos de Anemia"
          value={data.totalAnemia}
          cardColor={cardColor}
          textColor={textColor}
        />
        <MetricCard
          title="Alertas"
          value={data.totalAlerta}
          cardColor={cardColor}
          textColor={textColor}
        />
        <MetricCard
          title="Surtos"
          value={data.totalSurto}
          cardColor={cardColor}
          textColor={textColor}
        />
      </View>

      <ChartCard
        title="Classificação da Anemia"
        cardColor={cardColor}
        textColor={textColor}
      >
        {classificacaoChart ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* Gráfico */}
              <PieChart
                data={classificacaoChart.map((item) => ({
                  name: item.label,
                  population: item.value,
                  color: item.color,
                  legendFontColor: textColor,
                  legendFontSize: 12,
                }))}
                width={Math.max(chartWidth, classificacaoChart.length * 80)}
                height={180}
                chartConfig={{ color: () => textColor }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
              />
            </View>
          </ScrollView>
        ) : (
          <RNText style={{ color: textColor }}>Nenhum dado encontrado</RNText>
        )}
      </ChartCard>

      {/* BAR CHART */}
      <ChartCard
        title="Faixa Etária"
        cardColor={cardColor}
        textColor={textColor}
      >
        {faixaChart ? (
          <BarChart
            data={{
              labels: faixaChart.map((item) => item.label),
              datasets: [{ data: faixaChart.map((item) => item.value) }],
            }}
            width={chartWidth}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundGradientFrom: cardColor,
              backgroundGradientTo: cardColor,
              decimalPlaces: 0,
              color: () => primaryColor,
              labelColor: () => textColor,
            }}
            style={{ borderRadius: 12 }}
          />
        ) : (
          <RNText style={{ color: textColor }}>
            Nenhum dado por faixa etária
          </RNText>
        )}
      </ChartCard>

      {/* LINE CHART */}
      <ChartCard
        title="Evolução Mensal"
        cardColor={cardColor}
        textColor={textColor}
      >
        {timelineChart ? (
          <LineChart
            data={{
              labels: timelineLabels as string[],
              datasets: [
                {
                  data: (
                    timelineChart as { value: number; label: string }[]
                  ).map((item) => item.value),
                  color: () => primaryColor,
                  strokeWidth: 3,
                },
              ],
            }}
            bezier
            width={chartWidth}
            height={240}
            withDots={true}
            withShadow={true}
            withInnerLines={false}
            withOuterLines={false}
            yAxisSuffix=""
            chartConfig={{
              backgroundGradientFrom: cardColor,
              backgroundGradientTo: cardColor,
              decimalPlaces: 0,
              color: (opacity = 1) => primaryColor,
              labelColor: (opacity = 1) => textColor,
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: primaryColor,
              },
              propsForBackgroundLines: {
                strokeDasharray: "",
              },
            }}
            style={{
              borderRadius: 12,
              paddingRight: 16, // Evita corte do último ponto
            }}
          />
        ) : (
          <RNText style={{ color: textColor }}>Nenhum dado encontrado</RNText>
        )}
      </ChartCard>
    </ScrollView>
  );
}

/* ---------------------- COMPONENTES AUXILIARES ---------------------- */
function MetricCard({ title, value, cardColor, textColor }: any) {
  return (
    <Card style={[styles.card, { backgroundColor: cardColor }]}>
      <Card.Content style={[styles.cardContent, { paddingVertical: 12 }]}>
        <Text
          variant="titleMedium"
          style={{ color: textColor, marginBottom: 4 }}
        >
          {title}
        </Text>
        <Text variant="headlineSmall" style={{ color: textColor }}>
          {value}
        </Text>
      </Card.Content>
    </Card>
  );
}

function ChartCard({ title, children, cardColor, textColor }: any) {
  return (
    <Card style={[styles.chartCard, { backgroundColor: cardColor }]}>
      <Card.Content style={[styles.cardContent, { paddingVertical: 8 }]}>
        <Text
          variant="titleLarge"
          style={{ marginBottom: 4, color: textColor, textAlign: "center" }}
        >
          {title}
        </Text>
        <View style={styles.chartWrapper}>{children}</View>
      </Card.Content>
    </Card>
  );
}

/* ---------------------- ESTILOS ---------------------- */
const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  card: {
    flexBasis: "48%",
    flexGrow: 1,
    minWidth: 140,
    marginBottom: 12,
  },
  chartCard: { marginTop: 12, borderRadius: 12 },
  cardContent: { alignItems: "center", justifyContent: "center" },
  chartWrapper: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
});
