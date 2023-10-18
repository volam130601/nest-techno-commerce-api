import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCategoryDTO {
  @IsString()
  @IsOptional()
  name?: string;
}

/**model Category {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  products Product[]
}

*/