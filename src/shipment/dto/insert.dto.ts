import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class InsertShipmentDTO {
    @IsDateString()
    @IsNotEmpty()
    shipmentDate: Date;
    @IsString()
    @IsNotEmpty()
    address: string
    @IsString()
    @IsNotEmpty()
    city: string
    @IsString()
    @IsNotEmpty()
    state: string
    @IsString()
    @IsNotEmpty()
    country: string
    @IsString()
    @IsNotEmpty()
    zipCode: string
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