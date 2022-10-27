import { Router } from 'express';
import userController from '../controllers/user.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { userValidation } from '../validations';

const router = Router();

router
  .route('/')
  .post(
    auth('getUsers'),
    validate(userValidation.createUser),
    userController.createUser
  )
  .get(
    auth('getUsers'),
    validate(userValidation.getUsers),
    userController.getUsers
  );

router
  .route('/:userId')
  .get(
    auth('getUsers'),
    validate(userValidation.getUser),
    userController.getUser
  )
  .patch(
    auth('manageUsers'),
    validate(userValidation.updateUser),
    userController.updateUser
  )
  .delete(
    auth('manageUsers'),
    validate(userValidation.deleteUser),
    userController.deleteUser
  );

export default router;
