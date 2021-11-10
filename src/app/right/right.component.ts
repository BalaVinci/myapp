import { MathsService } from './../services/maths.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers:[MathsService]
}) 
export class RightComponent implements OnInit {

  constructor(public _maths:MathsService) { }
  books_null=null;
  books:any =[
    {
      'id':1,
      'name':'bala',
      'Age':25
    },
    {
      'id':2,
      'name':'balas',
      'Age':26
    },
    {
      'id':3,
      'name':'balam',
      'Age':27
    }

  ];

  ngOnInit(): void {
  }

  increase()
  {
    this._maths.add();
  }

}
