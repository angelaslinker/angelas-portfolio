import { Component } from '@angular/core';
import { DockComponent } from '../dock/dock.component';
import { CommonModule } from '@angular/common';
import { FolderIconComponent } from "./folder-icon/folder-icon.component";

interface Folder {
  id: string;
  label: string;
  imgSrc: string;
  top: string;
  left: string;
}

@Component({
  selector: 'app-homepage',
  imports: [DockComponent, FolderIconComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  folders: Folder[] = [
    {
      id: 'resume',
      label: 'Resume',
      imgSrc: '/folderIcon.png',
      top: '20px',
      left: '40px'
    },
    {
      id: 'projects',
      label: 'Projects',
      imgSrc: '/folderIcon.png',
      top: '20px',
      left: '160px'
    },
    {
      id: 'projects',
      label: 'Projects',
      imgSrc: '/folderIcon.png',
      top: '20px',
      left: '1080px'
    },
    {
      id: 'projects',
      label: 'Projects',
      imgSrc: '/folderIcon.png',
      top: '20px',
      left: '960px'
    }
  ];

  openFolder(id: string) {
    console.log('clicked', id);
  }

}
