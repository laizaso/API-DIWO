-- CreateTable
CREATE TABLE "PlaceToVisit" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "goalDate" TIMESTAMP(3) NOT NULL,
    "flagUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlaceToVisit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PlaceToVisit_goalDate_idx" ON "PlaceToVisit"("goalDate");

-- CreateIndex
CREATE UNIQUE INDEX "PlaceToVisit_country_location_key" ON "PlaceToVisit"("country", "location");
