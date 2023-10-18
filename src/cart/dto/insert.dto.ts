import { IsNotEmpty, IsNumber } from "class-validator"

export class InsertCartDTO {
    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @IsNotEmpty()
    productId: number
}

/**
model Cart {
  id        Int      @id @default(autoincrement())
  quantity  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  product   Product? @relation(fields: [productId], references: [id])
  productId Int?

  customer   Customer? @relation(fields: [customerId], references: [id])
  customerId Int?      @unique
}
 */