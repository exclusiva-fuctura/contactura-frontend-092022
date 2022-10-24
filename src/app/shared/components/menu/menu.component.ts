import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuTypeEnum } from '../../emuns/menu-type.enum';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private menuService: MenuService
  ) { }

  get estouDashboard(): boolean {
    return this.menuService.ondeEstou === MenuTypeEnum.DASHBOARD;
  }

  get estouRelatorioDespesa(): boolean {
    return this.menuService.ondeEstou === MenuTypeEnum.RELATORIO_DESPESA;
  }

  get estouRelatorioReceita(): boolean {
    return this.menuService.ondeEstou === MenuTypeEnum.RELATORIO_RECEITA;
  }

  get estouLancamentoDespesa(): boolean {
    return this.menuService.ondeEstou === MenuTypeEnum.LANCAMENTO_DESPESA;
  }

  get estouLancamentoReceita(): boolean {
    return this.menuService.ondeEstou === MenuTypeEnum.LANCAMENTO_RECEITA;
  }

  get estouCadastro(): boolean {
    return this.menuService.ondeEstou === MenuTypeEnum.CADASTRO;
  }

  ngOnInit(): void {
  }

  onNavigate(rota: string): void {
    this.router.navigate([rota]);
  }

}
