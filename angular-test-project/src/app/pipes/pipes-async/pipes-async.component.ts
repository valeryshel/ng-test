import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes-async',
  templateUrl: './pipes-async.component.html',
  styleUrls: ['./pipes-async.component.scss']
})
export class PipesAsyncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  p: Promise<string> = new Promise<string>( resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 4000)
  })

  date: Observable<Date> = new Observable(obs => {
    setInterval( ()=> {
      obs.next(new Date())
    }, 1000)
  })

}
