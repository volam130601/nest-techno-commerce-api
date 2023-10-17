import { Injectable, ForbiddenException } from '@nestjs/common';
import { InsertProductDTO, UpdateProductDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService) {
    }

    getAllProducts() {
        return this.prismaService.product.findMany()
    }

    getProductById(
        productId: number,
    ) {
        const product = this.prismaService.product.findFirst({
            where: {
                id: productId
            }
        })
        if (!product) {
            throw new ForbiddenException('Cannot find product by ID: ' + productId)
        }
        return product;
    }

    insertProduct(
        insertProductDTO: InsertProductDTO
    ) {
        return this.prismaService.product.create({
            data: {
                ...insertProductDTO,
            }
        })
    }

    updateProductById(
        productId: number,
        updateProductDTO: UpdateProductDTO
    ) {
        const product = this.prismaService.product.findUnique({
            where: {
                id: productId
            }
        })
        if (!product) {
            throw new ForbiddenException('Cannot find product to update')
        }
        return this.prismaService.product.update({
            where: {
                id: productId
            },
            data: { ...updateProductDTO }
        })
    }

    deleteProductById(
        productId: number,
    ) {
        const product = this.prismaService.product.findUnique({
            where: {
                id: productId
            }
        })
        if (!product) {
            throw new ForbiddenException('Cannot find product to delete')
        }
        return this.prismaService.product.delete({
            where: {
                id: productId
            }
        })
    }
}
