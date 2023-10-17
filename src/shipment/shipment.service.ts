import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertShipmentDTO, UpdateShipmentDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShipmentService {
    constructor(private prismaService: PrismaService) { }

    getAllShipments(
        customerId: number,
    ) {
        const shipments = this.prismaService.shipment.findMany({
            where: {
                customerId: customerId
            }
        });
        return shipments;
    }

    getShipmentById(
        shipmentId: number,
    ) {
        const shipment = this.prismaService.shipment.findFirst({
            where: {
                id: shipmentId
            }
        })
        if (!shipment) {
            throw new ForbiddenException('Cannot find shipment by ID: ' + shipmentId)
        }
        return shipment;
    }

    insertShipment(
        customerId: number,
        insertShipmentDTO: InsertShipmentDTO
    ) {
        insertShipmentDTO.shipmentDate = new Date(insertShipmentDTO.shipmentDate)
        return this.prismaService.shipment.create({
            data: {
                ...insertShipmentDTO,
                customerId,
            }
        })
    }

    updateShipmentById(
        shipmentId: number,
        updateShipmentDTO: UpdateShipmentDTO
    ) {
        updateShipmentDTO.shipmentDate = new Date(updateShipmentDTO.shipmentDate)
        const shipment = this.prismaService.shipment.findUnique({
            where: {
                id: shipmentId
            }
        })
        if (!shipment) {
            throw new ForbiddenException('Cannot find shipment to update')
        }
        return this.prismaService.shipment.update({
            where: {
                id: shipmentId
            },
            data: { ...updateShipmentDTO }
        })
    }

    deleteShipmentById(
        shipmentId: number,
    ) {
        const shipment = this.prismaService.shipment.findUnique({
            where: {
                id: shipmentId
            }
        })
        if (!shipment) {
            throw new ForbiddenException('Cannot find shipment to delete')
        }
        return this.prismaService.shipment.delete({
            where: {
                id: shipmentId
            }
        })
    }
}
