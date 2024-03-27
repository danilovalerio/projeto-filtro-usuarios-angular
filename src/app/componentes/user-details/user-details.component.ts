import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

//dumb component
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  //Inicializando com um objeto vazio fazendo um casting, gerando um objeto vazio com undefined
  @Input({ required: true }) user: IUser = {} as IUser;
}
