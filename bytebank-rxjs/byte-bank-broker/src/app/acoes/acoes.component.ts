import { switchMap, tap } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  //acoes$ = this.acoesService.getAcoes();
  todasAcoes$ = this.acoesService.getAcoes().pipe(
    tap(() => {
      console.log('Fluxo Inicial');
    })
  );
  filtroPorInput$ = this.acoesInput.valueChanges.pipe(
    tap(() => {
      console.log('Fluxo do Filtro');
    }),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado))
  );
  // acoes$ = this.acoesInput.valueChanges.pipe(
  //   tap(console.log),
  //   switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
  //   tap(console.log)
  // );

  acoes$ = merge(this.todasAcoes$, this.filtroPorInput$);

  constructor(private acoesService: AcoesService) {}
}
