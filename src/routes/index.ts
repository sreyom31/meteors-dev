import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import eventRoute from './event.route';
import registrationRoute from './registration.route';
import odrequestRoute from './odrequest.route'
import reportRoute from './report.route'

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/events', route: eventRoute },
  { path: '/registrations', route: registrationRoute },
  { path: '/odrequests', route: odrequestRoute },
  { path: '/reports', route: reportRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
