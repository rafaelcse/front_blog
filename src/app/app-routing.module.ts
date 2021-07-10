import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post/create/create.component';
import { PostUpdateComponent } from './post/update/update.component';
import { PostShowComponent } from './post/show/show.component';
//import { BoardUserComponent } from './board-user/board-user.component';
//import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
//import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/create', component: PostCreateComponent },
  { path: 'post/show/:id', component: PostShowComponent },
  { path: 'post/update/:id', component: PostUpdateComponent },
  { path: '', redirectTo: 'post', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }