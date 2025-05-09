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
  selectedFolderId: string | null = null;
  folders: Folder[] = [
    {
      id: 'resume',
      label: 'Resume',
      imgSrc: '/beigeFinder.png',
      top: '20px',
      left: '40px'
    },
    {
      id: 'contact',
      label: 'Contact Me',
      imgSrc: '/beigeFinder.png',
      top: '20px',
      left: '160px'
    },
    {
      id: 'project1',
      label: 'Senior Project',
      imgSrc: '/beigeFinder.png',
      top: '20px',
      left: '1080px'
    },
    {
      id: 'project2',
      label: 'Fullstack Showcase',
      imgSrc: '/beigeFinder.png',
      top: '20px',
      left: '960px'
    },
    {
      id: 'project3',
      label: 'Glossier Mock Website',
      imgSrc: '/beigeFinder.png',
      top: '150px',
      left: '960px'
    },
    {
      id: 'project4',
      label: 'Ecommerce Website',
      imgSrc: '/beigeFinder.png',
      top: '150px',
      left: '1080px'
    },
  ];

  openFolder(id: string) {
    this.selectedFolderId = id;
  }

  closeModal() {
    this.selectedFolderId = null;
  }

}
