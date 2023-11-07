-- CreateTable

CREATE TABLE
    "users" (
        "id" SERIAL NOT NULL,
        "username" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,

CONSTRAINT "users_pkey" PRIMARY KEY ("id") );

-- CreateTable

CREATE TABLE
    "favorites" (
        "id" SERIAL NOT NULL,
        "user_id" INTEGER NOT NULL,
        "character_name" TEXT,
        "film_name" TEXT,
        "planet_name" TEXT,
        "starship_name" TEXT,
        "vehicle_name" TEXT,

CONSTRAINT "favorites_pkey" PRIMARY KEY ("id") );

-- AddForeignKey

ALTER TABLE "favorites"
ADD
    CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;