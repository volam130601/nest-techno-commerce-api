import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateShipmentDTO {
    @IsDateString()
    @IsOptional()
    shipmentDate?: Date;
    @IsString()
    @IsOptional()
    address?: string
    @IsString()
    @IsOptional()
    city?: string
    @IsString()
    @IsOptional()
    state?: string
    @IsString()
    @IsOptional()
    country?: string
    @IsString()
    @IsOptional()
    zipCode?: string
}

/**
model Shipment {
  id           Int       @id @default(autoincrement())
  shipmentDate DateTime?
  address      String?
  city         String?
  state        String?
  country      String?
  zipCode      String?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  customer   Customer? @relation(fields: [customerId], references: [id])
  customerId Int?

  orders Order[]
} */