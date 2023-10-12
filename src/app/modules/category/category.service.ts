/* eslint-disable @typescript-eslint/no-explicit-any */
import { Category, Prisma, Specialization } from '@prisma/client';
import { Request } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  categoryFields,
  categoryRelationalFieldsMapper,
  categorySearchableFields,
  specializationFields,
  specializationRelationalFieldsMapper,
  specializationSearchableFields,
} from './category.constants';
import {
  ICategoryFilterRequest,
  ICategoryRequest,
  ISpecializationFilterRequest,
} from './category.interface';

// modules

const createCategory = async (
  profileId: string,
  req: Request
): Promise<Category> => {
 
  const data = req.body as ICategoryRequest;

  console.log("data",data);

  const result = await prisma.$transaction(async transactionClient => {

    const newCategoryData = {
      categoryName: data.categoryName,
      description: data.description,
    };

    const createdSpecialization = await transactionClient.category.create({
      data: newCategoryData,
    });
    return createdSpecialization;
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category creation failed');
  }
  return result;
};



const getAllCategory = async (
  filters: ICategoryFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Category[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);

  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: categorySearchableFields.map((field: any) => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (categoryFields.includes(key)) {
          return {
            [categoryRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.CategoryWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.category.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.category.count({
    where: whereConditions,
  });
  const totalPage = Math.ceil(total / limit);
  return {
    meta: {
      page,
      limit,
      total,
      totalPage,
    },
    data: result,
  };
};



export const CategoryService = {
  createCategory,
  getAllCategory,
};
