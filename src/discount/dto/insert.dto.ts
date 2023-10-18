import { IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator"

export class InsertDiscountDTO {
  @IsString()
  @IsNotEmpty()
  name: string
  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumberString()
  @IsNotEmpty()
  discountPercent: number

  @IsBoolean()
  @IsNotEmpty()
  active: boolean
}

/**model Discount {
  id              Int      @id @default(autoincrement())
  name            String
  description     String
  discountPercent Decimal
  active          Boolean
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  products Product[]
}
 */