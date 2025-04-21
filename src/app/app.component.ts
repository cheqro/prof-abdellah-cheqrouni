import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NgClass,
    SidebarComponent,
    RouterOutlet
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}

