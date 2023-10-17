import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertOrderItemDTO, UpdateOrderItemDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderItemService {
    constructor(private prismaService: PrismaService) { }
    getAllOrderItemsByOrderId(
        orderId: number,
    ) {
        const orderItems = this.prismaService.orderItem.findMany({
            where: {
                orderId: orderId
            }
        });
        return orderItems;
    }

    getOrderItemById(
        orderItemId: number,
    ) {
        const orderItem = this.prismaService.orderItem.findFirst({
            where: {
                id: orderItemId
            }
        })
        if (!orderItem) {
            throw new ForbiddenException('Cannot find orderItem by ID: ' + orderItemId)
        }
        return orderItem;
    }

    insertOrderItem(
        insertOrderItemDTO: InsertOrderItemDTO
    ) {
        return this.prismaService.orderItem.create({
            data: {
                ...insertOrderItemDTO,
            }
        })
    }

    updateOrderItemById(
        orderItemId: number,
        updateOrderItemDTO: UpdateOrderItemDTO
    ) {
        const orderItem = this.prismaService.orderItem.findUnique({
            where: {
                id: orderItemId
            }
        })
        if (!orderItem) {
            throw new ForbiddenException('Cannot find orderItem to update')
        }
        return this.prismaService.orderItem.update({
            where: {
                id: orderItemId
            },
            data: { ...updateOrderItemDTO }
        })
    }

    deleteOrderItemById(
        orderItemId: number,
    ) {
        const orderItem = this.prismaService.orderItem.findUnique({
            where: {
                id: orderItemId
            }
        })
        if (!orderItem) {
            throw new ForbiddenException('Cannot find orderItem to delete')
        }
        return this.prismaService.orderItem.delete({
            where: {
                id: orderItemId
            }
        })
    }
}
