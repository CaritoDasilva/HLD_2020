import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-section',
  templateUrl: './me-section.component.html',
  styleUrls: ['./me-section.component.scss']
})
export class MeSectionComponent implements OnInit {
  exampleList = [
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
    { 'id': 0, 'title': 'Test1', 'date': '12-02', 'time': '1:02' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
