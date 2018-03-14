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
    { path: 'myRequests', title: 'Minhas Solicitações',  icon:'person', class: '' },
    { path: 'attendants', title: 'Atendentes',  icon:'content_paste', class: '' },
    { path: 'equipments', title: 'Equipamentos',  icon:'library_books', class: '' },
    { path: 'sectors', title: 'Setores',  icon:'bubble_chart', class: '' },
    { path: 'status', title: 'Status',  icon:'location_on', class: '' },
    { path: 'categories', title: 'Categorias',  icon:'notifications', class: '' },
    { path: 'users', title: 'Usuários',  icon:'unarchive', class: 'active-pro' },
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
