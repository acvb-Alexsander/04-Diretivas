import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dire-switch',
  standalone: true,
  imports: [],
  templateUrl: './dire-switch.component.html',
  styleUrl: './dire-switch.component.css',
})
export class DireSwitchComponent implements OnInit {
  aba: string = 'home';

  constructor() {}

  ngOnInit(): void {}
}
