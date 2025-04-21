import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
}
@Component({
  selector: 'app-sidebar',
  imports: [
    NgClass,
    NgForOf,
    NgIf
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
    },
    {
      icon: 'fas fa-book',
      label: 'Tronc commun science',
      isOpen: false,
    },
    {
      icon: 'fa-solid fa-folder-open',
      label: 'Bac',
      isOpen: false,
      children: [
        { icon: 'fas fa-user', label: '01 Baccalauréat' },
        { icon: 'fas fa-lock', label: '02 Baccalauréat' },
      ]
    },
    {
      icon: 'fas fa-envelope',
      label: 'Messages'
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}
