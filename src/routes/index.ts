import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import eventRoute from './event.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/events', route: eventRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
