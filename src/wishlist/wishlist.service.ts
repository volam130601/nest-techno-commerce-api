import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertWishlistDTO, UpdateWishlistDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WishlistService {
    constructor(private prismaService: PrismaService) { }
    getAllWishlists(
        customerId: number,
    ) {
        const wishlists = this.prismaService.wishlist.findMany({
            where: {
                customerId: customerId
            }
        });
        return wishlists;
    }

    getWishlistById(
        wishlistId: number,
    ) {
        const wishlist = this.prismaService.wishlist.findFirst({
            where: {
                id: wishlistId
            }
        })
        if (!wishlist) {
            throw new ForbiddenException('Cannot find wishlist by ID: ' + wishlistId)
        }
        return wishlist;
    }

    insertWishlist(
        customerId: number,
        insertWishlistDTO: InsertWishlistDTO
    ) {
        return this.prismaService.wishlist.create({
            data: {
                ...insertWishlistDTO,
                customerId,
            }
        })
    }

    updateWishlistById(
        wishlistId: number,
        updateWishlistDTO: UpdateWishlistDTO
    ) {
        const wishlist = this.prismaService.wishlist.findUnique({
            where: {
                id: wishlistId
            }
        })
        if (!wishlist) {
            throw new ForbiddenException('Cannot find wishlist to update')
        }
        return this.prismaService.wishlist.update({
            where: {
                id: wishlistId
            },
            data: { ...updateWishlistDTO }
        })
    }

    deleteWishlistById(
        wishlistId: number,
    ) {
        const wishlist = this.prismaService.wishlist.findUnique({
            where: {
                id: wishlistId
            }
        })
        if (!wishlist) {
            throw new ForbiddenException('Cannot find wishlist to delete')
        }
        return this.prismaService.wishlist.delete({
            where: {
                id: wishlistId
            }
        })
    }
}
