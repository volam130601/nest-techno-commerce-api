import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateDiscountDTO {
  @IsString()
  @IsOptional()
  name?: string
  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsOptional()
  discountPercent?: number

  @IsBoolean()
  @IsOptional()
  active?: boolean
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