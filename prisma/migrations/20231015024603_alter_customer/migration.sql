/*
  Warnings:

  - You are about to drop the column `first_name` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `hashed_password` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `hashedPassword` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "first_name",
DROP COLUMN "hashed_password",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "hashedPassword" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phoneNumber" TEXT;
