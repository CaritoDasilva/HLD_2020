import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent implements OnInit {
  @Input() 'list': Array<any>
  @Input() 'cardSize': string
  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
  }

}
