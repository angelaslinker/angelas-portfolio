import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-folder-icon',
  imports: [CommonModule],
  templateUrl: './folder-icon.component.html',
  styleUrl: './folder-icon.component.css'
})
export class FolderIconComponent {
  @Input() label!: string;
  @Input() imgSrc!: string;
  @Input() top = '0px';
  @Input() left = '0px';

  @Output() open = new EventEmitter<void>();

  onClick() {
    this.open.emit();
  }
}