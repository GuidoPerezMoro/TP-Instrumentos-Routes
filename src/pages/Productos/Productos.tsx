import { useEffect, useState } from "react";
import { getAllInstrumentos } from "../../services/funcionesApi";
import { ListInstrumentos } from "../ui/ListInstrumentos/ListInstrumentos";
import { Instrumento } from "../../types/Instrumento";

export const Productos = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllInstrumentos()
      .then((data) => {
        setInstrumentos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los instrumentos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Obteniendo instrumentos...</div>;
  }

  return (
    <ListInstrumentos
      instrumentos={instrumentos}
      title={"Lista de Instrumentos"}
    />
  );
};
