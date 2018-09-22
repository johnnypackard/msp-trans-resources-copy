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

CREATE TABLE "resources" (
    "id" SERIAL PRIMARY KEY,
    "biz_name" VARCHAR (200),
	"biz_url" VARCHAR (2083),
    "contact_name" VARCHAR (300),
    "address" VARCHAR (500),
	"gender" VARCHAR (20),
	"race" VARCHAR (20),
	"language" VARCHAR (100),
	"image_url" VARCHAR (2083),
	"biz_notes" VARCHAR (2083),
	"resource_type" INT NOT NULL REFERENCES resource_type,
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

CREATE TABLE "job_tracker"(
	"id" SERIAL PRIMARY KEY,
	"location_id" INT NOT NULL REFERENCES locations,
	"user_id" INT NOT NULL REFERENCES users,
	"biz_name" INT NOT NULL REFERENCES resources,
	"biz_url" INT NOT NULL REFERENCES resources,
	"resource_type" INT NOT NULL REFERENCES resource_type,
	"company_name" INT NOT NULL REFERENCES resources,
	"contact_name" INT NOT NULL REFERENCES resources,
	"biz_url" INT NOT NULL REFERENCES resources,
	"biz_notes" INT NOT NULL REFERENCES resources
);