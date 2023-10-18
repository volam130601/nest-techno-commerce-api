import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertCartDTO, UpdateCartDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
    constructor(private prismaService: PrismaService) { }
    getAllCarts(
        customerId: number,
    ) {
        const carts = this.prismaService.cart.findMany({
            where: {
                customerId: customerId
            }
        });
        return carts;
    }

    getCartById(
        cartId: number,
    ) {
        const cart = this.prismaService.cart.findFirst({
            where: {
                id: cartId
            }
        })
        if (!cart) {
            throw new ForbiddenException('Cannot find cart by ID: ' + cartId)
        }
        return cart;
    }

    insertCart(
        customerId: number,
        insertCartDTO: InsertCartDTO
    ) {
        return this.prismaService.cart.create({
            data: {
                ...insertCartDTO,
                customerId,
            }
        })
    }

    updateCartById(
        cartId: number,
        updateCartDTO: UpdateCartDTO
    ) {
        const cart = this.prismaService.cart.findUnique({
            where: {
                id: cartId
            }
        })
        if (!cart) {
            throw new ForbiddenException('Cannot find cart to update')
        }
        return this.prismaService.cart.update({
            where: {
                id: cartId
            },
            data: { ...updateCartDTO }
        })
    }

    deleteCartById(
        cartId: number,
    ) {
        const cart = this.prismaService.cart.findUnique({
            where: {
                id: cartId
            }
        })
        if (!cart) {
            throw new ForbiddenException('Cannot find cart to delete')
        }
        return this.prismaService.cart.delete({
            where: {
                id: cartId
            }
        })
    }
}
