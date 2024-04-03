import { Component } from '@angular/core';
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
    name: '',
    startDate: '',
    endtDate: '',
    status: '',
  };

  dataSelecionada(date: any) {
    console.log(date);
    console.log(date instanceof Date);
    console.log(date.getMonth());
  }

  status: Status[] = [
    { value: true, viewValue: 'Ativo' },
    { value: false, viewValue: 'Inativo' },
  ];
}
