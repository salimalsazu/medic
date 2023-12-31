import express, { NextFunction, Request, Response } from 'express';

import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import auth from '../../middlewares/auth';
import { BlogsController } from './blogs.controller';
import { BlogValidation } from './blogs.validation';
import { userRole } from '@prisma/client';

const router = express.Router();

router.post(
  '/create-blog',
  auth(userRole.ADMIN, userRole.SUPER_ADMIN),
 BlogsController.createNewBlog
);

router.get(
  '/',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN, userRole.DOCTOR),
  BlogsController.getAllBlogs
);
router.get(
  '/:blogId',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN, userRole.DOCTOR),
  BlogsController.getSingleBlog
);

router.patch(
  '/:blogId',
  auth( userRole.ADMIN, userRole.SUPER_ADMIN, ),
  BlogsController.updateBlog
);
router.delete(
  '/:blogId',
  auth( userRole.ADMIN, userRole.SUPER_ADMIN, ),
  BlogsController.deleteBlog
);

export const BlogRoutes = router;
