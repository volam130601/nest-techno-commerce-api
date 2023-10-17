import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from '../auth/decorator';
import { InsertProductDTO, UpdateProductDTO } from './dto';
import { ProductService } from './product.service';

@UseGuards(MyJwtGuard)
@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {

    }
    @Get()
    getAllProducts(
    ) { return this.productService.getAllProducts() }

    @Get(":id")
    getProductById(
        @Param('id', ParseIntPipe) productId: number,
    ) { return this.productService.getProductById(productId) }

    @Post()
    insertProduct(
        @Body() insertProductDTO: InsertProductDTO
    ) { return this.productService.insertProduct(insertProductDTO) }

    @Patch(':id')
    updateProductById(
        @Param('id', ParseIntPipe) productId: number,
        @Body() updateProductDTO: UpdateProductDTO
    ) { return this.productService.updateProductById(productId, updateProductDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteProductById(
        @Query('id', ParseIntPipe) productId: number,
    ) { return this.productService.deleteProductById(productId) }
}
