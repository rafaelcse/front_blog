import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { PostService } from '../_services/post.service';
import { PostModel } from '../_model/post.model';
//import { Console } from 'console';

@Component({ 
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
 
    posts?: PostModel[];
    currentTutorial: PostModel = {};
    currentIndex = -1;
    submitted=false;

    constructor(private postService: PostService) {}

    ngOnInit() {
      this.retrievePosts();
    }

    retrievePosts(): void {
        this.postService.getAll()
          .subscribe(
            data => {
              this.posts = data;
            },
            error => {
              console.log(error);
            });
      }
    
    refreshList(): void {
        this.retrievePosts();
        this.currentTutorial = {};
        this.currentIndex = -1;
      }

    deletePost(id: number) {

      if(confirm("Deseja realmente deletar esse post?")) {
        //const post = this.posts.find(x => x._id === id);
        // user.isDeleting = true;
        this.postService.delete(id)
        .subscribe(
          data => {

          },
          error => {
            console.log(error);
          });
            // .pipe(first())
            // .subscribe(() => {
            //     this.posts = this.posts.filter(x => x._id !== id) 
            // });
      }
    }
}
