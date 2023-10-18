import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from 'src/auth/decorator';
import { OrderItemService } from './order_item.service';
import { InsertOrderItemDTO, UpdateOrderItemDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('order-items')
export class OrderItemController {
    constructor(private orderItemService: OrderItemService) {

    }

    @Get()
    getAllOrderItems(
        @Query('order-id', ParseIntPipe) orderId: number,
    ) { return this.orderItemService.getAllOrderItemsByOrderId(orderId) }

    @Get(":id")
    getOrderItemById(
        @Param('id', ParseIntPipe) orderItemId: number,
    ) { return this.orderItemService.getOrderItemById(orderItemId) }

    @Post()
    insertOrderItem(
        @Body() insertOrderItemDTO: InsertOrderItemDTO
    ) { return this.orderItemService.insertOrderItem(insertOrderItemDTO) }

    @Patch(':id')
    updateOrderItemById(
        @Param('id', ParseIntPipe) orderItemId: number,
        @Body() updateOrderItemDTO: UpdateOrderItemDTO
    ) { return this.orderItemService.updateOrderItemById(orderItemId, updateOrderItemDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteOrderItemById(
        @Query('id', ParseIntPipe) orderItemId: number,
    ) { return this.orderItemService.deleteOrderItemById(orderItemId) }
}
