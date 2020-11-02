# Migration `20201102170105-product`

This migration has been generated at 11/2/2020, 9:01:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN')

CREATE TYPE "public"."ProductType" AS ENUM ('BOOK', 'BAGS', 'GROCERY', 'MEDICINE', 'CLOTH', 'CLOTHING', 'FURNITURE', 'FURNITURE_TWO', 'MAKEUP', 'BAKERY')

CREATE TABLE "public"."User" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"email" text   NOT NULL ,
"name" text   NOT NULL ,
"role" "Role"  NOT NULL DEFAULT E'USER',
"image" text   NOT NULL ,
"password" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Address" (
"id" text   NOT NULL ,
"type" text   NOT NULL ,
"title" text   NOT NULL ,
"location" text   NOT NULL ,
"userId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Contact" (
"id" text   NOT NULL ,
"type" text   NOT NULL ,
"number" text   NOT NULL ,
"userId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Card" (
"id" text   NOT NULL ,
"type" text   NOT NULL ,
"title" text   NOT NULL ,
"cardType" text   NOT NULL ,
"lastFourDigit" integer   NOT NULL ,
"userId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Meta" (
"id" text   NOT NULL ,
"publisher" text   NOT NULL ,
"isbn" text   NOT NULL ,
"edition" text   NOT NULL ,
"country" text   NOT NULL ,
"languages" text []  ,
"numberOfReader" text   NOT NULL ,
"numberOfPage" text   NOT NULL ,
"samplePDF" text   NOT NULL ,
"productId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Social" (
"id" text   NOT NULL ,
"media" text   NOT NULL ,
"profileLink" text   NOT NULL ,
"authorId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Author" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
"avatar" text   NOT NULL ,
"bio" text   NOT NULL ,
"email" text   NOT NULL ,
"website" text   NOT NULL ,
"productId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Gallery" (
"id" text   NOT NULL ,
"url" text   NOT NULL ,
"productId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Category" (
"id" text   NOT NULL ,
"title" text   NOT NULL ,
"type" text   NOT NULL ,
"icon" text   ,
"slug" text   NOT NULL ,
"itemCount" integer   ,
"productId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Product" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"slug" text   NOT NULL ,
"title" text   NOT NULL ,
"description" text   NOT NULL ,
"unit" text   NOT NULL ,
"image" text   NOT NULL ,
"price" integer   NOT NULL ,
"salePrice" integer   NOT NULL ,
"discountInPercent" integer   NOT NULL ,
"per_unit" integer   NOT NULL ,
"quantity" integer   NOT NULL ,
"views" integer   ,
"sales" integer   ,
"type" "ProductType"  NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

CREATE UNIQUE INDEX "Meta_productId_unique" ON "public"."Meta"("productId")

CREATE UNIQUE INDEX "Author_productId_unique" ON "public"."Author"("productId")

ALTER TABLE "public"."Address" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Contact" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Card" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Meta" ADD FOREIGN KEY("productId")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Social" ADD FOREIGN KEY("authorId")REFERENCES "public"."Author"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Author" ADD FOREIGN KEY("productId")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Gallery" ADD FOREIGN KEY("productId")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Category" ADD FOREIGN KEY("productId")REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201102170105-product
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,153 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+generator typegraphql {
+  provider = "typegraphql-prisma"
+  output   = "../generated/typegraphql-prisma"
+}
+
+enum Role {
+  USER
+  ADMIN
+}
+
+model User {
+  id        String    @id @default(uuid())
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+  email     String    @unique
+  name      String
+  role      Role     @default(USER)
+  image     String
+  password  String
+  addresses Address[]
+  contacts  Contact[]
+  card      Card[]
+}
+
+model Address {
+  id        String    @id @default(uuid())
+  type      String
+  title     String
+  location  String
+  user      User     @relation(fields: [userId], references: [id])
+  userId    String
+}
+
+model Contact {
+  id          String    @id @default(uuid())
+  type        String
+  number      String
+  user        User     @relation(fields: [userId], references: [id])
+  userId      String
+}
+
+model Card {
+  id              String    @id @default(uuid())
+  type            String
+  title           String
+  cardType        String
+  lastFourDigit   Int
+  user            User     @relation(fields: [userId], references: [id])
+  userId          String
+}
+
+
+
+model Meta {
+  id              String    @id @default(uuid())
+  publisher       String
+  isbn            String
+  edition         String
+  country         String
+  languages       String[]
+  numberOfReader  String
+  numberOfPage    String
+  samplePDF       String
+  product         Product    @relation(fields: [productId], references: [id])
+  productId       String
+}
+
+model Social {
+  id              String    @id @default(uuid())
+  media           String
+  profileLink     String
+  author          Author     @relation(fields: [authorId], references: [id])
+  authorId        String
+}
+
+model Author {
+  id              String    @id @default(uuid())
+  name            String
+  avatar          String
+  bio             String
+  email           String
+  website         String
+  socials         Social[]
+  product         Product    @relation(fields: [productId], references: [id])
+  productId       String
+}
+
+model Gallery {
+  id         String       @id @default(uuid())
+  url        String
+  product    Product    @relation(fields: [productId], references: [id])
+  productId  String
+}
+
+model Category {
+  id               String     @id @default(uuid())
+  title            String
+  type             String
+  icon             String?
+  slug             String
+  itemCount        Int?
+  product          Product    @relation(fields: [productId], references: [id])
+  productId        String
+}
+
+model Product {
+  id                  String    @id @default(uuid())
+  createdAt           DateTime  @default(now())
+  updatedAt           DateTime  @updatedAt
+  slug                String
+  title               String
+  description         String
+  unit                String
+  image               String
+  price               Int
+  salePrice           Int
+  discountInPercent   Int
+  per_unit            Int
+  quantity            Int
+  views               Int?
+  sales               Int?
+  type                ProductType
+  author              Author?
+  meta                Meta?
+  gallery             Gallery[]
+  categories          Category[]
+}
+
+enum ProductType {
+  BOOK
+  BAGS
+  GROCERY
+  MEDICINE
+  CLOTH
+  CLOTHING
+  FURNITURE
+  FURNITURE_TWO
+  MAKEUP
+  BAKERY
+}
+
+
+
+
```