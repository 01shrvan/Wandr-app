CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`fullName` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`createdOn` integer DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);