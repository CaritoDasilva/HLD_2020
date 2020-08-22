import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  communityRecomendationList = [
    {
      'id': 1,
      'title': 'Maternar en cuaretena',
      'date': '',
      'time': '',
      'img': '../../assets/communitySection/conversemos.png',
      'duration': ''
    },
    {
      'id': 2,
      'title': 'Cocina fácil',
      'date': '',
      'time': '',
      'img': '../../assets/communitySection/conversemos2.png',
      'duration': ''
    },
  ];
  tipsList = [
    {
      'id': 1,
      'title': 'Maternar en cuaretena',
      'date': '',
      'time': '',
      'img': '../../assets/communitySection/conversemos3.png',
      'duration': ''
    },
    {
      'id': 2,
      'title': 'Cocina fácil',
      'date': '',
      'time': '',
      'img': '../../assets/communitySection/conversemos4.png',
      'duration': ''
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
