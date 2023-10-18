import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { CategoryService } from './category.service';
import { InsertCategoryDTO, UpdateCategoryDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {

    }
    @Get()
    getAllCategories(
    ) { return this.categoryService.getAllCategories() }

    @Get(":id")
    getCategoryById(
        @Param('id', ParseIntPipe) categoryId: number,
    ) { return this.categoryService.getCategoryById(categoryId) }

    @Post()
    insertCategory(
        @Body() insertCategoryDTO: InsertCategoryDTO
    ) { return this.categoryService.insertCategory(insertCategoryDTO) }

    @Patch(':id')
    updateCategoryById(
        @Param('id', ParseIntPipe) categoryId: number,
        @Body() updateCategoryDTO: UpdateCategoryDTO
    ) { return this.categoryService.updateCategoryById(categoryId, updateCategoryDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteCategoryById(
        @Query('id', ParseIntPipe) categoryId: number,
    ) { return this.categoryService.deleteCategoryById(categoryId) }
}
