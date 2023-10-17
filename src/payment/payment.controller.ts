import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { InsertPaymentDTO, UpdatePaymentDTO } from './dto';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { PaymentService } from './payment.service';
@UseGuards(MyJwtGuard)
@Controller('payments')
export class PaymentController {
    constructor(private paymentService: PaymentService) {

    }
    @Get()
    getAllPayments(
        @GetCustomer('id') customerId: number,
    ) { return this.paymentService.getAllPayments(customerId) }

    @Get(":id")
    getPaymentById(
        @Param('id', ParseIntPipe) paymentId: number,
    ) { return this.paymentService.getPaymentById(paymentId) }

    @Post()
    insertPayment(
        @GetCustomer('id') customerId: number,
        @Body() insertPaymentDTO: InsertPaymentDTO
    ) { return this.paymentService.insertPayment(customerId, insertPaymentDTO) }

    @Patch(':id')
    updatePaymentById(
        @Param('id', ParseIntPipe) paymentId: number,
        @Body() updatePaymentDTO: UpdatePaymentDTO
    ) { return this.paymentService.updatePaymentById(paymentId, updatePaymentDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deletePaymentById(
        @Query('id', ParseIntPipe) paymentId: number,
    ) { return this.paymentService.deletePaymentById(paymentId) }
}
