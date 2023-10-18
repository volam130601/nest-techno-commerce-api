import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertCategoryDTO, UpdateCategoryDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class CategoryService {
    constructor(private prismaService: PrismaService) { }
    getAllCategories(
    ) {
        const categories = this.prismaService.category.findMany();
        return categories;
    }

    getCategoryById(
        categoryId: number,
    ) {
        const category = this.prismaService.category.findFirst({
            where: {
                id: categoryId
            }
        })
        if (!category) {
            throw new ForbiddenException('Cannot find category by ID: ' + categoryId)
        }
        return category;
    }

    insertCategory(
        insertCategoryDTO: InsertCategoryDTO
    ) {
        return this.prismaService.category.create({
            data: {
                ...insertCategoryDTO,
            }
        })
    }

    updateCategoryById(
        categoryId: number,
        updateCategoryDTO: UpdateCategoryDTO
    ) {
        const category = this.prismaService.category.findUnique({
            where: {
                id: categoryId
            }
        })
        if (!category) {
            throw new ForbiddenException('Cannot find category to update')
        }
        return this.prismaService.category.update({
            where: {
                id: categoryId
            },
            data: { ...updateCategoryDTO }
        })
    }

    deleteCategoryById(
        categoryId: number,
    ) {
        const category = this.prismaService.category.findUnique({
            where: {
                id: categoryId
            }
        })
        if (!category) {
            throw new ForbiddenException('Cannot find category to delete')
        }
        return this.prismaService.category.delete({
            where: {
                id: categoryId
            }
        })
    }
}
