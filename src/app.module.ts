import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import {
  ConfigModule
} from '@nestjs/config'
import { CustomerModule } from './customer/customer.module';
import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    AuthModule, PrismaModule, CustomerModule, PaymentModule]
})
export class AppModule { }
