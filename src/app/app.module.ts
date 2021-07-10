// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';

// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { RegisterComponent } from './account/register.component';
// import { PostComponent } from './post/post.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     PostComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserModule,
//     ReactiveFormsModule,
//     HttpClientModule,
    
//   ],
//   providers: [
  
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
//import { BoardAdminComponent } from './board-admin/board-admin.component';
//import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
//import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post/create/create.component';
import { PostUpdateComponent } from './post/update/update.component';
import { PostShowComponent } from './post/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PostComponent,
    PostCreateComponent,
    //PostSingleComponent,
    PostUpdateComponent,
    PostShowComponent,
    
    //BoardAdminComponent,
    //BoardModeratorComponent,
    //BoardUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }