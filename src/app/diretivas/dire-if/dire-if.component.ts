import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dire-if',
  standalone: true,
  imports: [],
  templateUrl: './dire-if.component.html',
  styleUrl: './dire-if.component.css',
})
export class DireIfComponent implements OnInit {
  cursos: string[] = ['Angular.js'];

  mostrarCursos: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  changeButton(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
