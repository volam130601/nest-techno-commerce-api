import { Module } from '@nestjs/common';
import { OrderItemController } from './order_item.controller';
import { OrderItemService } from './order_item.service';

@Module({
  controllers: [OrderItemController],
  providers: [OrderItemService]
})
export class OrderItemModule {}
