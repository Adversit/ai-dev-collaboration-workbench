CREATE TABLE `admin_reads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`actor` text NOT NULL,
	`target` text NOT NULL,
	`action` text NOT NULL,
	`reason` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `admin_reads_created_at` ON `admin_reads` (`created_at`);