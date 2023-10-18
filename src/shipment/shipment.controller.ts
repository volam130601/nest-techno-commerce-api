import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch, HttpCode, HttpStatus, UseGuards, Query } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetCustomer } from '../auth/decorator';
import { ShipmentService } from './shipment.service';
import { InsertShipmentDTO, UpdateShipmentDTO } from './dto';

@UseGuards(MyJwtGuard)
@Controller('shipments')
export class ShipmentController {
    constructor(private shipmentService: ShipmentService) {

    }
    @Get()
    getAllShipments(
        @GetCustomer('id') customerId: number,
    ) { return this.shipmentService.getAllShipments(customerId) }

    @Get(":id")
    getShipmentById(
        @Param('id', ParseIntPipe) shipmentId: number,
    ) { return this.shipmentService.getShipmentById(shipmentId) }

    @Post()
    insertShipment(
        @GetCustomer('id') customerId: number,
        @Body() insertShipmentDTO: InsertShipmentDTO
    ) { return this.shipmentService.insertShipment(customerId, insertShipmentDTO) }

    @Patch(':id')
    updateShipmentById(
        @Param('id', ParseIntPipe) shipmentId: number,
        @Body() updateShipmentDTO: UpdateShipmentDTO
    ) { return this.shipmentService.updateShipmentById(shipmentId, updateShipmentDTO) }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete()
    deleteShipmentById(
        @Query('id', ParseIntPipe) shipmentId: number,
    ) { return this.shipmentService.deleteShipmentById(shipmentId) }
}
