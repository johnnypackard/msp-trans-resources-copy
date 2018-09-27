CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "hash" VARCHAR (1000) NOT NULL,
    "type" VARCHAR (10) NOT NULL,
    "email" VARCHAR (100) UNIQUE NOT NULL,
    "validated" BOOLEAN NOT NULL  
);

CREATE TABLE "profiles" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT UNIQUE NOT NULL REFERENCES users,
    "bio" VARCHAR(400) NOT NULL,
    "contact_info" VARCHAR(60) NOT NULL
);

CREATE TABLE "resource_type" (
    "id" SERIAL PRIMARY KEY,
    "type" varchar(20),
    CONSTRAINT chk_type CHECK (type IN ('community_id', 'education_id', 'financial_id', 'healthcare_id', 'housing_id', 'legal_id'))
);

CREATE TABLE "locations"(
    "id" SERIAL PRIMARY KEY,
    "address" varchar(200), 
    "lat" DECIMAL(9,6),
    "lng" DECIMAL (9,6)
);

CREATE TABLE "resources"(
	"id" SERIAL PRIMARY KEY,
	"location_id" INT NOT NULL REFERENCES locations,
	"user_id" INT NOT NULL REFERENCES users,
	"biz_name" VARCHAR (200) NOT NULL,
	"biz_url" VARCHAR (2083),
    "contact_name" VARCHAR (300),
    "contact_gender" VARCHAR (20),
    "contact_race" VARCHAR (20),
    "contact_languages" VARCHAR (100),
	"biz_notes" VARCHAR (2083),
    "resource_type" INT NOT NULL REFERENCES resource_type
);