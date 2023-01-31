import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() paginator: any;

  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {

    console.log(this.pages);
    
    this.pages = new Array(this.paginator.totalPages).fill(0).map((_val, index) => index +1);

    console.log(this.pages)
  }
 
}
