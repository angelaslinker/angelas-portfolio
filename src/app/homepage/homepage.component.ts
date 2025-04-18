import { Component } from '@angular/core';
import { DockComponent } from "./dock/dock.component";

@Component({
  selector: 'app-homepage',
  imports: [DockComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
