import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-project-angular';

  posts: Post[] = [
    {title: 'I want to learn Angular', text: 'I`m still learning components', id: 1},
    {title: 'Angular is so diffucult', text: 'But I still love to learn it', id: 2}
  ]

  ngOnInit(): void {
    setTimeout( () => {
      console.log('Timeout');
      this.posts[0].title = 'Changed!'
      this.posts[1] = {
        title: 'changed',
        text: 'changed 2',
        id: 3
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }

  removePost(id: number) {
    console.log('Id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id)
  }



}
