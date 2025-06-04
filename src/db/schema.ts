import { sql } from "drizzle-orm";
import { mysqlTable, varchar, text, timestamp, boolean, mysqlEnum, int, primaryKey, decimal } from "drizzle-orm/mysql-core";
            
export const user = mysqlTable("user", {
    id: varchar("id", { length: 36 }).primaryKey(),
    name: text('name').notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    emailVerified: boolean('email_verified').notNull(),
    image: text('image'),
    role: mysqlEnum(['user', 'admin']).default('user'),
    createdAt: timestamp('created_at').notNull(),
    updatedAt: timestamp('updated_at').notNull()
});

export const session = mysqlTable("session", {
                    id: varchar("id", { length: 36 }).primaryKey(),
                    expiresAt: timestamp('expires_at').notNull(),
 token: varchar('token', { length: 255 }).notNull().unique(),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull(),
 ipAddress: text('ip_address'),
 userAgent: text('user_agent'),
 userId: varchar('user_id', { length: 36 }).notNull().references(()=> user.id, { onDelete: 'cascade' })
                });

export const account = mysqlTable("account", {
                    id: varchar("id", { length: 36 }).primaryKey(),
                    accountId: text('account_id').notNull(),
 providerId: text('provider_id').notNull(),
 userId: varchar('user_id', { length: 36 }).notNull().references(()=> user.id, { onDelete: 'cascade' }),
 accessToken: text('access_token'),
 refreshToken: text('refresh_token'),
 idToken: text('id_token'),
 accessTokenExpiresAt: timestamp('access_token_expires_at'),
 refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
 scope: text('scope'),
 password: text('password'),
 createdAt: timestamp('created_at').notNull(),
 updatedAt: timestamp('updated_at').notNull()
                });

export const verification = mysqlTable("verification", {
                    id: varchar("id", { length: 36 }).primaryKey(),
                    identifier: text('identifier').notNull(),
 value: text('value').notNull(),
 expiresAt: timestamp('expires_at').notNull(),
 createdAt: timestamp('created_at'),
 updatedAt: timestamp('updated_at')
                });

export const product = mysqlTable("product", {
    id: int().primaryKey().autoincrement().notNull(),
    title: varchar({ length: 255 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp("created_at", { mode: 'string' }).default(sql`(now())`),
},
(table) => [
    primaryKey({ columns: [table.id], name: "product_id"}),
]);

export const productImage = mysqlTable("product_image", {
    id: int().autoincrement().notNull(),
    productId: int("product_id").notNull().references(() => product.id, { onDelete: "cascade" } ),
    imageName: text("image_name").notNull(),
    createdAt: timestamp("created_at", { mode: 'string' }).default(sql`(now())`),
},
(table) => [
    primaryKey({ columns: [table.id], name: "product_image_id"}),
]);

export const order = mysqlTable("order", {
    id: int().autoincrement().notNull(),
    userId: varchar("user_id", { length: 36 }).notNull().references(() => user.id),
    productId: int("product_id").notNull().references(() => product.id),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
    qty: int({ unsigned: true }).notNull(),
    status: mysqlEnum(['pending','paid','delivered']),
    createdAt: timestamp("created_at", { mode: 'string' }).default(sql`(now())`),
},
(table) => [
    primaryKey({ columns: [table.id], name: "order_id"}),
]);