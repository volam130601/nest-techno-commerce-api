import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional } from "class-validator"

export class UpdateOrderDTO {

  @IsDateString()
  @IsOptional()
  orderDate: Date

  @IsNumberString()
  @IsOptional()
  totalPrice: number

  @IsNumberString()
  @IsOptional()
  paymentId: number

  @IsNumberString()
  @IsOptional()
  shipmentId: number
}

/**
 * model Order {
  id         Int       @id @default(autoincrement())
  orderDate  DateTime?
  totalPrice Decimal?
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  customer   Customer? @relation(fields: [customerId], references: [id])
  customerId Int?

  payment   Payment? @relation(fields: [paymentId], references: [id])
  paymentId Int?

  shipment   Shipment? @relation(fields: [shipmentId], references: [id])
  shipmentId Int?

  orderItem OrderItem?
}
 */