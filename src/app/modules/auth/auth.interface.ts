import { userRole } from '@prisma/client';
export type IUserCreate = {
  firstName: string;
  lastName: string;
  profileImage?: string | null | undefined;
  email: string;
  password: string;
  role?: userRole;
};

export type IUserProfileResponse = {
  profileId: string;
  firstName: string;
  lastName: string;
  profileImage?: string | null | undefined;
  role: userRole | null;
  createdAt: Date;
  updatedAt: Date;
};

export type IUserResponse = {
  userId: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  profile: IUserProfileResponse;
};

export type IUserLogin = {
  email: string;
  password: string;
};
export type ILoginUserResponse = {
  accessToken: string;
  refreshToken: string;
};
export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IProfileUpdateRequest = {
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  contactNumber?: string;
  address?: string;
  coverPhoto?: string;
  bloodGroup?: string;
  role?: userRole;
};