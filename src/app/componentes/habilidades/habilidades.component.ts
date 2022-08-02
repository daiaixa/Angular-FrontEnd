import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: string[] = ["HTML", "CSS", "Java Script", "Bootstrap","Angular", "Typescript", "NodeJS", "JAVA", "Spring Boot"];

  constructor() { }

  ngOnInit(): void {
  }

}
