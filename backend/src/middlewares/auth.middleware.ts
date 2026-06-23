import type { Request, Response, NextFunction } from "express";

export function ensureAuth(_req: Request, _res: Response, next: NextFunction) {
  // placeholder middleware — implement auth checks as needed
  return next();
}
