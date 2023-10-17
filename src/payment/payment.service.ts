import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertPaymentDTO, UpdatePaymentDTO } from './dto';

@Injectable()
export class PaymentService {
    constructor(private prismaService: PrismaService) {
    }
    getAllPayments(customerId: number) {
        const payments = this.prismaService.payment.findMany({
            where: {
                customerId: customerId
            }
        });
        return payments;
    }

    getPaymentById(
        paymentId: number,
    ) {
        const payment = this.prismaService.payment.findFirst({
            where: {
                id: paymentId
            }
        })
        if (!payment) {
            throw new ForbiddenException('Cannot find Payment by ID: ' + paymentId)
        }
        return payment;
    }

    async insertPayment(
        customerId: number,
        insertPaymentDTO: InsertPaymentDTO
    ) {
        insertPaymentDTO.paymentDate = new Date(insertPaymentDTO.paymentDate)
        const payment = await this.prismaService.payment.create({
            data: {
                ...insertPaymentDTO,
                customerId,
            }
        })
        return payment
    }

    updatePaymentById(
        paymentId: number,
        updatePaymentDTO: UpdatePaymentDTO
    ) {
        const payment = this.prismaService.payment.findUnique({
            where: {
                id: paymentId
            }
        })
        if (!payment) {
            throw new ForbiddenException('Cannot find Payment to update')
        }
        return this.prismaService.payment.update({
            where: {
                id: paymentId
            },
            data: { ...updatePaymentDTO }
        })
    }

    deletePaymentById(
        paymentId: number,
    ) {
        const payment = this.prismaService.payment.findUnique({
            where: {
                id: paymentId
            }
        })
        if (!payment) {
            throw new ForbiddenException('Cannot find Payment to delete')
        }
        return this.prismaService.payment.delete({
            where: {
                id: paymentId
            }
        })
    }
}
