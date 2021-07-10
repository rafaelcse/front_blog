import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { PostModel } from '../../_model/post.model';
import { TokenStorageService } from '../../_services/token-storage.service';
import { CommentModel } from '../../_model/comment.model';
import { ReactingModel } from '../../_model/reacting.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class PostShowComponent implements OnInit {

  user_id: String | null = null;
  post: PostModel = {
    title: '',
    description: '',

  };
  reacting?: ReactingModel;
  comment: CommentModel = {
    description: '',

  };
  currentTutorial: PostModel = {};

  constructor(
    private token: TokenStorageService,
    private PostService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user_id = this.token.getUser();
  }

  ngOnInit(): void {
    this.getPosts(this.route.snapshot.params.id);
  }

  getPosts(id: string): void {
    this.PostService.get(id)
      .subscribe(
        data => {
          this.post = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  saveComment() {
    const data = {
      post: this.post._id,
      description: this.comment.description,
      author: this.user_id
    };

    this.PostService.createComment(data)
      .subscribe(
        response => {
        },
        error => {
          console.log(error);
        });
  }

  deleteComment(id: number) {
    if (confirm("Deseja realmente deletar esse comentario?")) {
      this.PostService.deleteComment(id)
        .subscribe(
          data => {
          },
          error => {
            console.log(error);
          }
        );
    }
  }

  ToggleReact(reacting: string, comment: CommentModel) {

    const data = {
      comment: comment,
      action: reacting,
      author: this.user_id
    };

    var translate = { like: 'Gostei', love: 'Amei', rainbow: 'coloriu' };

    const check = this.PostService.getReactingByComment({ comment: comment }).subscribe(
      check => {
        if (check.length == 0) {
          this.PostService.createReacting(data)
            .subscribe(
              response => {
                alert("Reação adicionada  oa comentario.");
              },
              error => {
                console.log(error);
              });
        } else {
          this.PostService.deleteReacting(data)
            .subscribe(
              response => {
                alert("Reação removida  oa comentario.");
              },
              error => {
                console.log(error);
              });
        }
      },
      error => {
        console.log("ERRO - ", error)
      }
    );
  }
}
