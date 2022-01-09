import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PipesAsyncComponent } from './pipes/pipes-async/pipes-async.component';
import { AppCounterService } from './services/app-counter.service';
import { AppCounterComponent } from './services/app-counter/app-counter.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    PipesAsyncComponent,
    AppCounterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //разные конструкции и пайпы
  ],
  providers: [
    AppCounterService,
     //регистрация сервиса
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
