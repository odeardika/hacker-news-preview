/*
  Warnings:

  - Added the required column `description` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Article" ("author", "createAt", "id", "score", "title", "url") SELECT "author", "createAt", "id", "score", "title", "url" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_url_key" ON "Article"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
