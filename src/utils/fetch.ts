import { HavanFilial } from "@/types/havanTypes";

export const fetchHavanBranches = async (): Promise<HavanFilial[]> => {
  const brazilianStates = [
    'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
  ];

  // Create an array of promises, one for each state
  const fetchPromises = brazilianStates.map((state) =>
    fetch(
      `https://apigatewaywebapi.havan.com.br/dadosmestre/api/Filial/BuscarFiliaisProximas?pagina=1&itensPorPagina=1000&endereco=${state}`
    )
      .then((response) => response.json())
      .then((data) => data.result.itens)
  );

  // Use Promise.all to resolve all fetch promises concurrently
  const allFiliaisArray = await Promise.all(fetchPromises);

  // Flatten the array of arrays into a single array of filiais
  const allFiliais = allFiliaisArray.flat();

  return allFiliais;
};