import { IsNotEmpty, IsNumber } from "class-validator"

export class InsertWishlistDTO {

  @IsNotEmpty()
  productId: number
}
