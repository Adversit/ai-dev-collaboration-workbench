import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
export const workspaces = sqliteTable('workspaces', {
  userId: text('user_id').primaryKey().notNull(),
  data: text('data').notNull(),
  revision: integer('revision').notNull().default(1),
  updatedAt: text('updated_at').notNull(),
});
export const adminReads=sqliteTable('admin_reads',{
  id:integer('id').primaryKey({autoIncrement:true}),
  actor:text('actor').notNull(),
  target:text('target').notNull(),
  action:text('action').notNull(),
  reason:text('reason').notNull(),
  createdAt:text('created_at').notNull(),
},table=>[index('admin_reads_created_at').on(table.createdAt)]);
