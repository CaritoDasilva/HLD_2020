import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-section',
  templateUrl: './me-section.component.html',
  styleUrls: ['./me-section.component.scss']
})
export class MeSectionComponent implements OnInit {
  redirectName = 'activity'
  exampleList = [
    {
      'id': 2,
      'title': 'Ejercicio de respiración',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/respiracion.png',
      'duration': '5 min'
    },
    {
      'id': 1,
      'title': 'Meditación',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/meditacion.png',
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
      'img': '../../assets/meSection/niños.png',
      'duration': '5 min'
    }
  ];
  communityRecomendationList = [
    {
      'id': 1,
      'title': 'Maternar en cuaretena',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/maternar.png',
      'duration': ''
    },
    {
      'id': 2,
      'title': 'Cocina fácil',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/cocina.png',
      'duration': ''
    },
    {
      'id': 3,
      'title': 'Manejo de rabietas',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/yoga.png' ,
      'duration': ''
    },
    {
      'id': 4,
      'title': 'Crisis en la pareja',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/legal.png',
      'duration': ''
    }
  ];
  tipsList = [
    {
      'id': 1,
      'title': 'Maternar en cuaretena',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/terapias.png',
      'duration': ''
    },
    {
      'id': 2,
      'title': 'Cocina fácil',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/tareas.png',
      'duration': ''
    },
    {
      'id': 3,
      'title': 'Manejo de rabietas',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/bebes.png' ,
      'duration': ''
    },
    {
      'id': 4,
      'title': 'Crisis en la pareja',
      'date': '',
      'time': '',
      'img': '../../assets/meSection/niños_actividades.png',
      'duration': ''
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
