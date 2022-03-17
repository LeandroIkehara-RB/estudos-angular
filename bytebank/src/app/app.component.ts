import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  //destino: number;
  //valor: number;
  //transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  /*   transferir($event){
    // console.log($event);
    // const transferencia = {...$event, data: new Date()};
    // this.transferencias.push(transferencia);
    this.service.adicionar($event);
  } */
}
