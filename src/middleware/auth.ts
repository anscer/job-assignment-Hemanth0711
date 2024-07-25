import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: any, user: Express.User, info: any) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
};

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
};
