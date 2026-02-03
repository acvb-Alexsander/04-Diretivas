import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dire-for',
  standalone: true,
  imports: [],
  templateUrl: './dire-for.component.html',
  styleUrl: './dire-for.component.css',
})
export class DireForComponent implements OnInit {
  cursos: string[] = ['Angulas.js', 'React.js', 'Typescript', 'Python'];

  constructor() {}

  ngOnInit(): void {}
}
