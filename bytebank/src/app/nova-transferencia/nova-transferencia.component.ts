import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino,
    };
    this.aoTransferir.emit(valorEmitir);
    // this.service.adicionar(valorEmitir).subscribe(
    //   (resultado) => {
    this.limparCampos();
    //     this.router.navigateByUrl('extrato');
    //   },
    //   (error) => console.error(error)
    // );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
