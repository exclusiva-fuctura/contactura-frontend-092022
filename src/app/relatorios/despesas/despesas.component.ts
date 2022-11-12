import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import Swal from 'sweetalert2';

import { MenuService } from 'src/app/shared/services/menu.service';

import { IReceita } from './../../shared/models/receita.interface';
import { MenuTypeEnum } from 'src/app/shared/emuns/menu-type.enum';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  dataSourceReceitas: IReceita[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.ondeEstou = MenuTypeEnum.RELATORIO_DESPESA;
  }

}
