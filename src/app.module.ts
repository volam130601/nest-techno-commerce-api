import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import {
  ConfigModule
} from '@nestjs/config'
import { CustomerModule } from './customer/customer.module';
import { PaymentModule } from './payment/payment.module';
import { ShipmentModule } from './shipment/shipment.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order_item/order_item.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { DiscountModule } from './discount/discount.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    AuthModule, PrismaModule, CustomerModule, PaymentModule, ShipmentModule, OrderModule, OrderItemModule, ProductModule, CategoryModule, CartModule, WishlistModule, DiscountModule]
})
export class AppModule { }
