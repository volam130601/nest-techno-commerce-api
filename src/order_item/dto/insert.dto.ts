import { IsNotEmpty, IsNumber, IsNumberString, IsOptional } from "class-validator"

export class InsertOrderItemDTO {
  @IsNumber()
  @IsNotEmpty()
  quantity: number

  @IsNumberString()
  @IsNotEmpty()
  price: number

  @IsOptional()
  productId?: number

  @IsOptional()
  orderId?: number
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