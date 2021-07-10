// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/',


  apiLogin:'users/login',
  ApiRegister: 'users/registro',

  ApiPostList: 'posts/',
  ApiPostGet: 'posts/get',
  ApiPostSave: 'posts/save',
  ApiPostUpdate: 'posts/update',
  ApiPostDelete: 'posts/delete',

  ApiCommentList: 'posts/comments/',
  ApiCommentGet: 'posts/comments/get',
  ApiCommentSave: 'posts/comments/save',
  ApiCommentDelete: 'posts/comments/delete',

  ApiCommentReactingGet: 'posts/reacting/get',
  ApiCommentReactingSave: 'posts/reacting/save',
  ApiCommentReactingDelete: 'posts/reacting/delete',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
