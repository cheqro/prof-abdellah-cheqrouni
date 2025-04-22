import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  link: string;
  children?: MenuItem[];
  isOpen?: boolean;
}
@Component({
  selector: 'app-sidebar',
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    {
      icon: 'fas fa-home',
      label: 'Accueil',
      isOpen: false,
      link:"//"
    },
    {
      icon: 'fas fa-book',
      label: 'Tronc commun science',
      isOpen: false,
      link:"/tronc-commun-science"
    },
    {
      icon: 'fa-solid fa-folder-open',
      label: 'Bac',
      isOpen: false,
      link: "/home",
      children: [
        { icon: 'fas fa-user', label: '01 Baccalauréat', link: '/bac01' },
        { icon: 'fas fa-lock', label: '02 Baccalauréat', link: '/bac02' },
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    if(item.children && item.children.length > 0) {
      console.log(item.children);
    }else {
      this.sidebarToggle.emit();
      console.log(item);

    }
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

  closeSideNav() {
    console.log('closeSideNav');
    this.sidebarToggle.emit();
  }
}
