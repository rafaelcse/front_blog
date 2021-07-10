import { UserModel } from "./user.model";
export class CommentModel {
    _id?: any;
    description?: string;
    createdAt?:Date;
    author?: UserModel;
}