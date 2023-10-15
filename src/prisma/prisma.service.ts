import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(configService: ConfigService) {
        super({
            datasources: {
                db: {
                    url: configService.get('DATABASE_URL'),
                }
            }
        })
    }


    cleanDatabase() {
        //In a 1 - N relation, delete N firstly, then delete '1'
        return this.$transaction([
            this.orderItem.deleteMany(),
            this.payment.deleteMany(),
            this.shipment.deleteMany(),
            this.category.deleteMany(),
            this.cart.deleteMany(),
            this.wishlist.deleteMany(),
            this.discount.deleteMany(),
            this.product.deleteMany(),
            this.order.deleteMany(),
            this.customer.deleteMany(),
        ])
    }

}
