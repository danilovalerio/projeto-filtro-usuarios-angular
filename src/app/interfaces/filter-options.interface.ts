/**
 * Nessa interface o date pode ser uma Date ou undefined, pois por padrão não quero trazer nem uma data na seleção de intervalo do componente
 */
export interface IFilterOptions {
  name: string | undefined;
  startDate: Date | undefined;
  endtDate: Date | undefined;
  status: boolean | undefined;
}
