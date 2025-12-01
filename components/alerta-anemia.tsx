import React, { useEffect, useState } from "react";
import { Snackbar } from "react-native-paper";
import { apiGet } from "@/src/services/api";

export function AlertaAnemia() {
  const [mensagem, setMensagem] = useState("");
  const [show, setShow] = useState(false);

  async function verificarAlerta() {
    try {
      const data = await apiGet("/monitoramento/hemogramas/anemia");

      if (data.totalCasosAnemia > 0) {
        setMensagem(`⚠️ ${data.totalCasosAnemia} casos nas últimas ${data.periodo}.`);
        setShow(true);
      }
    } catch (err) {
      console.log("Erro ao consultar alerta", err);
    }
  }

  useEffect(() => {
    verificarAlerta();
    const interval = setInterval(verificarAlerta, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Snackbar
      visible={show}
      onDismiss={() => setShow(false)}
      duration={6000}
      style={{ backgroundColor: "#b71c1c" }}
    >
      {mensagem}
    </Snackbar>
  );
}
