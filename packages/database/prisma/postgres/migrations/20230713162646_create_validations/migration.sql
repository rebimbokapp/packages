-- CreateTable
CREATE TABLE "validations" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "validation" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "expiration_time_in_minutes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "validations_pkey" PRIMARY KEY ("id")
);
