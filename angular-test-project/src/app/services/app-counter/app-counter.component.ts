import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../app-counter.service';
import { LocalCounterService } from '../local-counter.service';

@Component({
  selector: 'app-app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.scss'],
  providers: [LocalCounterService]
})
export class AppCounterComponent implements OnInit {
  //метод конструктора для инжектирования
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService) { }


  ngOnInit(): void {
  }

}
