/*
  Warnings:

  - Added the required column `title` to the `Aviso` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `aviso` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `aviso` ADD COLUMN `title` VARCHAR(191) NOT NULL,
    MODIFY `content` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
