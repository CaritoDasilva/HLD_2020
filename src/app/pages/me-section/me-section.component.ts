import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-section',
  templateUrl: './me-section.component.html',
  styleUrls: ['./me-section.component.scss']
})
export class MeSectionComponent implements OnInit {
  exampleList = [
    {
      'id': 1,
      'title': 'Meditación',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/meditacion.png',
      'duration': '5 min'
    },
    {
      'id': 2,
      'title': 'Ejercicio de respiración',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/respiracion.png',
      'duration': '5 min'
    },
    {
      'id': 3,
      'title': 'Tips de planificación',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/planificacion.png' ,
      'duration': '8 min'
    },
    {
      'id': 4,
      'title': 'Actividad ejemplo',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/meditacion.png',
      'duration': '5 min'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
