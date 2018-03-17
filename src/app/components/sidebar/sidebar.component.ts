import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'requests', title: 'Painel',  icon: 'dashboard', class: '' },
    { path: 'my-requests', title: 'Minhas Solicitações',  icon:'content_paste', class: '' },
    { path: 'attendants', title: 'Atendentes',  icon:'person', class: '' },
    { path: 'equipments', title: 'Equipamentos',  icon:'video_label', class: '' },
    { path: 'sectors', title: 'Setores',  icon:'location_on', class: '' },
    { path: 'status', title: 'Status',  icon:'show_chart', class: '' },
    { path: 'categories', title: 'Categorias',  icon:'format_line_spacing', class: '' },
    { path: 'departments', title: 'Departamentos',  icon:'select_all', class: '' },
    { path: 'users', title: 'Usuários',  icon:'assignment_ind', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
