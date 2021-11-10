import { MathsService } from './../services/maths.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(public _maths:MathsService) { }

    title:string='Left Side ';
  ngOnInit(): void {
  }

}
