/*
  Warnings:

  - Added the required column `firstName` to the `Costumer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Costumer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Costumer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Costumer" ("email", "id", "password") SELECT "email", "id", "password" FROM "Costumer";
DROP TABLE "Costumer";
ALTER TABLE "new_Costumer" RENAME TO "Costumer";
CREATE UNIQUE INDEX "Costumer_email_key" ON "Costumer"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
