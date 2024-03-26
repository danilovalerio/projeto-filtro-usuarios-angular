import { Component } from '@angular/core';

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
  status: Status[] = [
    { value: true, viewValue: 'Ativo' },
    { value: false, viewValue: 'Inativo' },
  ];
}
