import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  // onAdd2 = new EventEmitter();

  // onAdd2 = new EventEmitter();

  @ViewChild('titleInput', { static: false })
  inputRef!: ElementRef;

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }
//добавить пост
  addPost () {
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      console.log('New Post: ', post);

      this.title = this.text = ''
    }
  }

  focusTitle() {
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }

}
