import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import {
  ConfigModule
} from '@nestjs/config'
import { CustomerModule } from './customer/customer.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    AuthModule, PrismaModule, CustomerModule]
})
export class AppModule { }
