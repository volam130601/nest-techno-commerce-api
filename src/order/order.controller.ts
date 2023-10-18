import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { OrderService } from './order.service';
import { InsertOrderDTO, UpdateOrderDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) {

    }
    @Get()
    getAllOrders(
        @GetCustomer('id') customerId: number,
    ) { return this.orderService.getAllOrders(customerId) }

    @Get(":id")
    getOrderById(
        @Param('id', ParseIntPipe) orderId: number,
    ) { return this.orderService.getOrderById(orderId) }

    @Post()
    insertOrder(
        @GetCustomer('id') customerId: number,
        @Body() insertOrderDTO: InsertOrderDTO
    ) { return this.orderService.insertOrder(customerId, insertOrderDTO) }

    @Patch(':id')
    updateOrderById(
        @Param('id', ParseIntPipe) orderId: number,
        @Body() updateOrderDTO: UpdateOrderDTO
    ) { return this.orderService.updateOrderById(orderId, updateOrderDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteOrderById(
        @Query('id', ParseIntPipe) orderId: number,
    ) { return this.orderService.deleteOrderById(orderId) }
}
