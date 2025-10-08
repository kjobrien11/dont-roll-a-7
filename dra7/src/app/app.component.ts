import { Component } from '@angular/core';
import { Dra7ContainerComponent } from './dra7-container/dra7-container.component';

@Component({
  selector: 'app-root',
  imports: [Dra7ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dra7';
}
