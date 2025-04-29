import { Component } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  standalone: true,
  selector: 'app-dock',
  imports: [DockModule, CommonModule, RouterModule, TooltipModule],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css',
})
export class DockComponent {
  tooltipOpts = { positionTop: 12 };

  items: MenuItem[] = [
    {
      icon: 'finderDock.png',
      title: 'Finder',
      command: () => this.navigate('/finder')
    },
    {
      icon: 'gitHubDock.webp',
      title: 'GitHub',
      url: 'https://github.com/your‑username',
      target: '_blank'
    },
    {
      icon: 'imagesDock.webp',
      title: 'Gallery',
      command: () => this.navigate('/gallery')
    },
    {
      icon: 'linkedinDock.png',
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/your‑profile',
      target: '_blank'
    },
    {
      icon: 'musicDock.png',
      title: 'Music',
      // command: () => this.playMusic()
    }
  ];

  constructor(private router: Router) { }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
