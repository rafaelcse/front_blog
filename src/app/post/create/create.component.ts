import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { PostModel } from '../../_model/post.model';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PostCreateComponent implements OnInit {

  user_id: String | null = null;

  constructor(
    private token: TokenStorageService,
    private PostService: PostService
  ) {
    this.user_id = this.token.getUser();
  }

  post: PostModel = {
    title: '',
    description: ''
  };
  submitted = false;

  ngOnInit(): void {
  }

  savePost(): void {
    const data = {
      title: this.post.title,
      description: this.post.description,
      author: this.user_id,
      comments: []
    };

    this.PostService.create(data)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      description: ''
    };
  }
}