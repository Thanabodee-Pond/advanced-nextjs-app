import { mysqlTable, varchar, text, timestamp, boolean, int } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm"; // ต้อง import relations ด้วยถ้าคุณจะใช้ relations

export const user = mysqlTable("user", {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: text('name').notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: boolean('email_verified').$defaultFn(() => false).notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()).notNull(),
  // สำหรับ MySQL, ใช้ .onUpdateNow() เพื่อให้อัปเดต timestamp อัตโนมัติเมื่อมีการแก้ไข
  updatedAt: timestamp('updated_at').$defaultFn(() => new Date()).onUpdateNow().notNull(),
  // **แก้ไขตรงนี้:** เปลี่ยน default(user) เป็น default('user') หรือ default('admin')
  role: text('role').default('user').notNull(), // <-- แก้ไขตรงนี้
});

export const session = mysqlTable("session", {
  id: varchar('id', { length: 36 }).primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: varchar('token', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()).notNull(),
  updatedAt: timestamp('updated_at').$defaultFn(() => new Date()).onUpdateNow().notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  // **แก้ไขตรงนี้:** userId ควรมี type และ length ตรงกับ user.id
  userId: varchar('user_id', { length: 36 }).notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = mysqlTable("account", {
  id: varchar('id', { length: 36 }).primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  // **แก้ไขตรงนี้:** userId ควรมี type และ length ตรงกับ user.id
  userId: varchar('user_id', { length: 36 }).notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()).notNull(),
  updatedAt: timestamp('updated_at').$defaultFn(() => new Date()).onUpdateNow().notNull()
});

export const verification = mysqlTable("verification", {
  id: varchar('id', { length: 36 }).primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()).notNull(),
  updatedAt: timestamp('updated_at').$defaultFn(() => new Date()).onUpdateNow().notNull() // เพิ่ม .onUpdateNow()
});

// **แนะนำ: กำหนด Drizzle Relations แยกต่างหาก (ถ้าคุณจะใช้)**
// นี่เป็นสิ่งสำคัญสำหรับ Relational Queries ของ Drizzle
export const usersRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionsRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id]
  }),
}));

export const accountsRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id]
  }),
}));