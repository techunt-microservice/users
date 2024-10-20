import { NextFunction, Request, Response } from 'express';

export async function checkOrigin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers.host !== 'localhost:8080') {
    res.status(403).send('You are not allowed to do direct requsets');
    return;
  }

  next();
}
