import { IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdatePaymentDTO {
  @IsDateString()
  @IsOptional()
  paymentDate?: Date;

  @IsString()
  @IsOptional()
  paymentMethod?: string;

  @IsNumberString()
  @IsOptional()
  amount?: number;
}
/**
 * model Payment {
  id            Int      @id @default(autoincrement())
  paymentDate   DateTime
  paymentMethod String
  amount        Decimal
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  customer   Customer? @relation(fields: [customerId], references: [id])
  customerId Int?

  orders Order[]
}
 */