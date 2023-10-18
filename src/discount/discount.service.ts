import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertDiscountDTO, UpdateDiscountDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DiscountService {
    constructor(private prismaService: PrismaService) { }
    getAllDiscounts(
    ) {
        const discounts = this.prismaService.discount.findMany();
        return discounts;
    }

    getDiscountById(
        discountId: number,
    ) {
        const discount = this.prismaService.discount.findFirst({
            where: {
                id: discountId
            }
        })
        if (!discount) {
            throw new ForbiddenException('Cannot find discount by ID: ' + discountId)
        }
        return discount;
    }

    insertDiscount(
        insertDiscountDTO: InsertDiscountDTO
    ) {
        return this.prismaService.discount.create({
            data: {
                ...insertDiscountDTO,
            }
        })
    }

    updateDiscountById(
        discountId: number,
        updateDiscountDTO: UpdateDiscountDTO
    ) {
        const discount = this.prismaService.discount.findUnique({
            where: {
                id: discountId
            }
        })
        if (!discount) {
            throw new ForbiddenException('Cannot find discount to update')
        }
        return this.prismaService.discount.update({
            where: {
                id: discountId
            },
            data: { ...updateDiscountDTO }
        })
    }

    deleteDiscountById(
        discountId: number,
    ) {
        const discount = this.prismaService.discount.findUnique({
            where: {
                id: discountId
            }
        })
        if (!discount) {
            throw new ForbiddenException('Cannot find discount to delete')
        }
        return this.prismaService.discount.delete({
            where: {
                id: discountId
            }
        })
    }
}
