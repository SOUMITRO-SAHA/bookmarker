export type UserInfo = {
  email: string;
  name: string | null;
  id: number;
  username: string | null;
  createdDate: Date;
};

export type WebUserInfoType = UserInfo & {
  /** All users are PRO now */
  plan?: "PRO";
};

export interface IUserDeletion<T> {
  delete(info: T): Promise<WebUserInfoType>;
}

export interface IUserCreation<T> {
  create(info: T): Promise<WebUserInfoType>;
  update(info: T): Promise<WebUserInfoType>;
  upsert?: never;
}

export interface IUserUpsertion<T> {
  create?: never;
  update?: never;
  upsert(info: T): Promise<WebUserInfoType>;
}
