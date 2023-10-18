import { IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class UpdateWishlistDTO {

  @IsOptional()
  productId?: number
}
