import { MathsService } from './../services/maths.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-middel',
  templateUrl: './middel.component.html',
  styleUrls: ['./middel.component.css']
})
export class MiddelComponent implements OnInit {

  constructor(public _maths:MathsService) { }
   
  Id:number=10;
  status:string='Available';
  btntoggle:boolean=true;
  twoway:string='This Two way data';


  ngOnInit(): void {
 
      setTimeout(()=> {
        this.btntoggle=false;
      },2000);
  }
  ontoggle()
  {
    if(this.status=='Available')
    {
      this.status='Not available';
    }else{
      this.status='Available';
    }

    this._maths.add();
  }
}
