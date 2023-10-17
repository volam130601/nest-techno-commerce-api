import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, isNumber, isNumberString } from "class-validator";

export class InsertProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsNumberString()
    @IsNotEmpty()
    price: number;

    @IsOptional()
    stock?: number;

    @IsOptional()
    SKU?: string;

    @IsOptional()
    categoryId?: number;

    @IsOptional()
    discountId?: number;
}
/**model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  SKU         String?
  quantity    Int
  price       Decimal
  stock       Int?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  category   Category? @relation(fields: [categoryId], references: [id])
  categoryId Int?

  Discount   Discount? @relation(fields: [discountId], references: [id])
  discountId Int?

  carts      Cart[]
  wishlists  Wishlist[]
  orderItems OrderItem[]
} */