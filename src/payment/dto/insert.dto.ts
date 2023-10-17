import { IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class InsertPaymentDTO {
  @IsDateString()
  @IsNotEmpty()
  paymentDate: Date;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsNumberString()
  @IsNotEmpty()
  amount: number;
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