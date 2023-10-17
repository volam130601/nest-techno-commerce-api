import { IsNotEmpty } from "class-validator"

export class InsertOrderItemDTO {
    @IsNotEmpty()
    quantity: number

    @IsNotEmpty()
    price: number

    @IsNotEmpty()
    productId: number

    @IsNotEmpty()
    orderId: number
}

/**
 * model OrderItem {
  id        Int      @id @default(autoincrement())
  quantity  Int
  price     Decimal
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  product   Product? @relation(fields: [productId], references: [id])
  productId Int?

  order   Order? @relation(fields: [orderId], references: [id])
  orderId Int?   @unique
}
 */