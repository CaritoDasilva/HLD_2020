import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent implements OnInit {
  @Input() 'list': Array<any>
  @Input() 'cardSize': string
  @Input() 'redirect': string

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.list)
  }

  onCardClick(){
    console.log(this.redirect)
    if (this.redirect === 'activity') {
      this.router.navigate(['activity'])
    } else if (this.redirect === 'event'){
      this.router.navigate(['event'])
    }
  }

}
