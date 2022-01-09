import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  e: number = Math.E //экспонента
  str: string = 'hello world';
  date: Date = new Date();
  float: number = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 2,
        f: 4
      }
    }
  }

  search = '';
  searchField: string = 'title';

  posts: Post[] = [
    {title: 'Beer', text: 'Best beer in the world'},
    {title: 'Bread', text: 'Best bread in the world'},
    {title: 'JavaScript', text: 'Best language in the world'}
  ]

  addPost() {
      this.posts.unshift({
        title: 'Angular',
        text: 'Simple text'
      })
  }

}
