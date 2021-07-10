import { CommentModel } from "./comment.model";
import { UserModel } from "./user.model";

export class PostModel {
    _id?: any;
    title?: string;
    description?: string;
    createdAt?:Date;
    comments?: CommentModel[];
    author?: UserModel;
}