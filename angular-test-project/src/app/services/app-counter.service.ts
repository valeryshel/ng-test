import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root' //регистрация сервиса в корневом модуле
})

export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {

  }

  increase() {
    this.counter++
    this.logService.log('Increase counter...')
  }
  decrease() {
    this.counter--
    this.logService.log('Decrease counter...')
  }
}
//зарегистрировать сервис app.module.ts -> providers
