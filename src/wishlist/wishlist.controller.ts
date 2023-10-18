import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { WishlistService } from './wishlist.service';
import { InsertWishlistDTO, UpdateWishlistDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('wishlists')
export class WishlistController {
    constructor(private wishlistService: WishlistService) {

    }
    @Get()
    getAllWishlists(
        @GetCustomer('id') customerId: number,
    ) { return this.wishlistService.getAllWishlists(customerId) }

    @Get(":id")
    getWishlistById(
        @Param('id', ParseIntPipe) wishlistId: number,
    ) { return this.wishlistService.getWishlistById(wishlistId) }

    @Post()
    insertWishlist(
        @GetCustomer('id') customerId: number,
        @Body() insertWishlistDTO: InsertWishlistDTO
    ) { return this.wishlistService.insertWishlist(customerId, insertWishlistDTO) }

    @Patch(':id')
    updateWishlistById(
        @Param('id', ParseIntPipe) wishlistId: number,
        @Body() updateWishlistDTO: UpdateWishlistDTO
    ) { return this.wishlistService.updateWishlistById(wishlistId, updateWishlistDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteWishlistById(
        @Query('id', ParseIntPipe) wishlistId: number,
    ) { return this.wishlistService.deleteWishlistById(wishlistId) }
}
