import { IsEmail, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateCustomerDTO {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsNumberString()
  @IsOptional()
  phoneNumber?: string;
}

/**model Customer {
  id             Int      @id @default(autoincrement())
  email          String   @unique
  hashedPassword String
  firstName      String?
  lastName       String?
  address        String?
  phoneNumber    String?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  payments  Payment[]
  orders    Order[]
  shipments Shipment[]

  cart     Cart?
  wishlist Wishlist?
} */