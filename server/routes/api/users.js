// third-party libraries
import { Router } from 'express';

// moduler importaions
import UserController from '../../controllers/UserController';

// middlewares
import UserValidation from '../../middlewares/UserValidation';
import AuthController from '../../middlewares/TokenVerification';
import upload from '../../helpers/imageUploader';

const userRoute = Router();

userRoute.post('/', UserValidation.checkEmail, UserController.createUser);
userRoute.post('/login', UserValidation.checkEmail, UserValidation.checkPassword, UserController.loginUser);
userRoute.get('/', AuthController.verifyUserToken, UserController.activateUser);
userRoute.put('/', AuthController.verifyUserToken, upload, UserValidation.checkRequiredDetails, UserController.updateUser);

export default userRoute;
