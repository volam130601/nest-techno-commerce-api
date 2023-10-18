import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { DiscountService } from './discount.service';
import { InsertDiscountDTO, UpdateDiscountDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('discounts')
export class DiscountController {

    constructor(private discountService: DiscountService) {

    }
    @Get()
    getAllDiscounts(
    ) { return this.discountService.getAllDiscounts() }

    @Get(":id")
    getDiscountById(
        @Param('id', ParseIntPipe) discountId: number,
    ) { return this.discountService.getDiscountById(discountId) }

    @Post()
    insertDiscount(
        @Body() insertDiscountDTO: InsertDiscountDTO
    ) { return this.discountService.insertDiscount(insertDiscountDTO) }

    @Patch(':id')
    updateDiscountById(
        @Param('id', ParseIntPipe) discountId: number,
        @Body() updateDiscountDTO: UpdateDiscountDTO
    ) { return this.discountService.updateDiscountById(discountId, updateDiscountDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteDiscountById(
        @Query('id', ParseIntPipe) discountId: number,
    ) { return this.discountService.deleteDiscountById(discountId) }
}
