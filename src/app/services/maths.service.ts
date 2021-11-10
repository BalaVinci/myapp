import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {

  Counter:number=0;
  constructor() { }

  add()
  {
    this.Counter++;
  }
}
