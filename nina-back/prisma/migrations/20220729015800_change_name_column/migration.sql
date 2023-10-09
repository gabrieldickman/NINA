/*
  Warnings:

  - You are about to drop the column `date` on the `aviso` table. All the data in the column will be lost.
  - Added the required column `day` to the `Aviso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aviso` DROP COLUMN `date`,
    ADD COLUMN `day` DATETIME(3) NOT NULL;
