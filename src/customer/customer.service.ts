import { Injectable, ForbiddenException } from '@nestjs/common';
import { ChangePasswordDTO, UpdateCustomerDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';

@Injectable()
export class CustomerService {
    constructor(private prismaService: PrismaService) { }

    async changePassword(
        customerId: number,
        changePasswordDTO: ChangePasswordDTO
    ) {
        this.checkCustomerExists(customerId);
        const hashedPassword = await argon.hash(changePasswordDTO.newPassword)
        return this.prismaService.customer.update({
            where: { id: customerId }, data: { hashedPassword: hashedPassword }
        })
    }

    async checkPassword(
        customerId: number,
        changePasswordDTO: ChangePasswordDTO) {
        const customer = await this.prismaService.customer.findUnique({
            where: {
                id: customerId,
            }
        })
        if (!customer) {
            throw new ForbiddenException('Customer not found to change password');
        }
        const passwordMatched = await argon.verify(
            customer.hashedPassword,
            changePasswordDTO.oldPassword
        )
        if (!passwordMatched) {
            throw new ForbiddenException('Incorrect password');
        }
        return { message: 'Password match' }
    }

    async updateCustomer(
        customerId: number,
        updateCustomer: UpdateCustomerDTO
    ) {
        this.checkCustomerExists(customerId);
        return this.prismaService.customer.update({
            where: { id: customerId },
            data: { ...updateCustomer }
        })
    }

    async checkCustomerExists(customerId: number) {
        const customer = await this.prismaService.customer.findUnique({
            where: {
                id: customerId,
            }
        })
        if (!customer) {
            throw new ForbiddenException('Customer not found to change password');
        }
    }

    async getAllCustomer() {
        return this.prismaService.customer.findMany()
    }
}
