import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { GetCustomer } from '../auth/decorator';
import { Customer } from '@prisma/client';
import { ChangePasswordDTO, UpdateCustomerDTO } from './dto';
import { MyJwtGuard } from '../auth/guard';
import { CustomerService } from './customer.service';
import { ParseIntPipe } from '@nestjs/common';

@UseGuards(MyJwtGuard)
@Controller('customers')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Get()
    getCustomer(@GetCustomer() customer: Customer) {
        return customer
    }

    @Get('all')
    getAllCustomer() {
        return this.customerService.getAllCustomer()
    }

    @Post('change-password')
    changePassword(
        @GetCustomer('id') customerId: number,
        @Body() changePasswordDTO: ChangePasswordDTO
    ) {
        return this.customerService.changePassword(customerId, changePasswordDTO)
    }

    @Post('check-old-password')
    checkPassword(
        @GetCustomer('id') customerId: number,
        @Body() changePasswordDTO: ChangePasswordDTO
    ) {
        return this.customerService.checkPassword(customerId, changePasswordDTO)
    }

    @Post('update')
    updateCustomer(
        @GetCustomer('id') customerId: number,
        @Body() updateCustomer: UpdateCustomerDTO
    ) {
        return this.customerService.updateCustomer(customerId, updateCustomer)
    }

    // deleteCustomer(){}
    // lockCustomer() { }
    // unlockCustomer() { }
}
