import { Action } from "@ngrx/store";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export class login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      localId: string;
      idToken: string;
      expiresIn: number;
    }
  ) {}
}
export class logout implements Action {
  readonly type = LOGOUT;
}
export type authActions = login | logout;
