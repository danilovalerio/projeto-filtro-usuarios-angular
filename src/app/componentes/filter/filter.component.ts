import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

interface Status {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endtDate: undefined,
    status: undefined,
  };

  dataSelecionada(date: Date) {
    console.log(date);
    console.log(date instanceof Date);
    console.log(date.getMonth());
  }

  status: Status[] = [
    { value: true, viewValue: 'Ativo' },
    { value: false, viewValue: 'Inativo' },
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter() {
    console.log(`Filtro clicado! ${JSON.stringify(this.filterOptions)}`);
    this.onFilterEmitt.emit(this.filterOptions);
  }
}
