import { relations } from "drizzle-orm/relations";
import { user, account, product, order, productImage, session } from "./schema";

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	accounts: many(account),
	orders: many(order),
	sessions: many(session),
}));

export const orderRelations = relations(order, ({one}) => ({
	product: one(product, {
		fields: [order.productId],
		references: [product.id]
	}),
	user: one(user, {
		fields: [order.userId],
		references: [user.id]
	}),
}));

export const productRelations = relations(product, ({many}) => ({
	orders: many(order),
	productImages: many(productImage),
}));

export const productImageRelations = relations(productImage, ({one}) => ({
	product: one(product, {
		fields: [productImage.productId],
		references: [product.id]
	}),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));