import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { CartService } from './cart.service';
import { InsertCartDTO, UpdateCartDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('carts')
export class CartController {
    constructor(private cartService: CartService) {

    }
    @Get()
    getAllCarts(
        @GetCustomer('id') customerId: number,
    ) { return this.cartService.getAllCarts(customerId) }

    @Get(":id")
    getCartById(
        @Param('id', ParseIntPipe) cartId: number,
    ) { return this.cartService.getCartById(cartId) }

    @Post()
    insertCart(
        @GetCustomer('id') customerId: number,
        @Body() insertCartDTO: InsertCartDTO
    ) { return this.cartService.insertCart(customerId, insertCartDTO) }

    @Patch(':id')
    updateCartById(
        @Param('id', ParseIntPipe) cartId: number,
        @Body() updateCartDTO: UpdateCartDTO
    ) { return this.cartService.updateCartById(cartId, updateCartDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteCartById(
        @Query('id', ParseIntPipe) cartId: number,
    ) { return this.cartService.deleteCartById(cartId) }
}
