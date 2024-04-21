declare namespace Express {
  export interface Request {
    user_id?: JwtPayload<{ id: string }>;
  }
}
