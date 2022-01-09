import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None //делает стили компонента глобальным
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Output() onRemove = new EventEmitter<number>()
  @Input()
  post!: Post;
  @ContentChild('info', { static: true })
  infoRef!: ElementRef;


  // 1 этап формирования компонента (можно удалить и не сломать)
  // constructor() {
  //   console.log('constructor');
  // }

  removePost() {
    //заводим декоратор output
    this.onRemove.emit(this.post.id);
  }

  // void - ничего не возвращает/ проверка изменений
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  // для работы с функционалом
  ngOnInit() {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }
  //делает что-то во время изменений
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  //когда контент передаем в компонент
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChanged');
  }
  // элементы компонента
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  //вызов когда компонент будет уничтожен
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
