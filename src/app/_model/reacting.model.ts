import { UserModel } from "./user.model";
import { CommentModel } from "./comment.model";
export class ReactingModel {
    _id?: any;
    action?: string;
    comment?:CommentModel;
    createdAt?:Date;
    author?: UserModel;
} 