import express from 'express';
import { UserRoutes } from '../modules/users/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { SpecializationRoutes } from '../modules/Specialization/specialization.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { MedServiceRoutes } from '../modules/services/service.routes';
import { ProductsRoutes } from '../modules/products/products.routes';
import { ReviewAndRatingRoutes } from '../modules/reviewAndRatings/reviewAndRating.routes';
import { FeedBackRoutes } from '../modules/feedBackForms/feedBackForm.routes';
import { AppointmentBookingRoutes } from '../modules/appointmentBooking/appointmentBooking.routes';
import { FaqRoutes } from '../modules/faq/faq.routes';
import { SlotRoutes } from '../modules/slots/slots.routes';
import { BlogRoutes } from '../modules/blogs/blogs.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/specialization',
    route: SpecializationRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/services',
    route: MedServiceRoutes,
  },
  {
    path: '/products',
    route:  ProductsRoutes
  },
  {
    path: '/review-ratings',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/feedbacks',
    route: FeedBackRoutes,
  },
  {
    path: '/appointment-booking',
    route: AppointmentBookingRoutes,
  },
  {
    path: '/faqs',
    route: FaqRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
