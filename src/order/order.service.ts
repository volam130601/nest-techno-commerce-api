import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertOrderDTO, UpdateOrderDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
    constructor(private prismaService: PrismaService) { }

    getAllOrders(
        customerId: number,
    ) {
        return this.prismaService.order.findMany({
            where: {
                customerId: customerId
            }
        });
    }

    getOrderById(
        orderId: number,
    ) {
        const order = this.prismaService.order.findFirst({
            where: {
                id: orderId
            }
        })
        if (!order) {
            throw new ForbiddenException('Cannot find order by ID: ' + orderId)
        }
        return order;
    }

    insertOrder(
        customerId: number,
        insertOrderDTO: InsertOrderDTO
    ) {
        insertOrderDTO.orderDate = new Date()
        return this.prismaService.order.create({
            data: {
                ...insertOrderDTO,
                customerId,
            }
        })
    }

    updateOrderById(
        orderId: number,
        updateOrderDTO: UpdateOrderDTO
    ) {
        updateOrderDTO.orderDate = new Date()

        const order = this.prismaService.order.findUnique({
            where: {
                id: orderId
            }
        })
        if (!order) {
            throw new ForbiddenException('Cannot find order to update')
        }
        return this.prismaService.order.update({
            where: {
                id: orderId
            },
            data: { ...updateOrderDTO }
        })
    }

    deleteOrderById(
        orderId: number,
    ) {
        const order = this.prismaService.order.findUnique({
            where: {
                id: orderId
            }
        })
        if (!order) {
            throw new ForbiddenException('Cannot find order to delete')
        }
        return this.prismaService.order.delete({
            where: {
                id: orderId
            }
        })
    }
}
