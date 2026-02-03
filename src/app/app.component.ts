import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DireIfComponent } from './diretivas/dire-if/dire-if.component';
import { DireSwitchComponent } from './diretivas/dire-switch/dire-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DireIfComponent, DireSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  n: Number[] = [1, 2, 3];
  title = 'portalCursos';
}
