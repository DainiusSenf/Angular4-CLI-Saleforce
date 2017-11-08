import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).foundation();
  }

}
