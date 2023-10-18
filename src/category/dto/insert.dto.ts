import { IsNotEmpty, IsString } from "class-validator";

export class InsertCategoryDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
}

/**model Category {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  products Product[]
}

*/