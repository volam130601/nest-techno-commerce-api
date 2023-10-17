import { Module } from '@nestjs/common';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';

@Module({
  controllers: [ShipmentController],
  providers: [ShipmentService]
})
export class ShipmentModule {}
