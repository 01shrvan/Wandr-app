CREATE TABLE `travel_stories` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`story` text NOT NULL,
	`visited_location` text DEFAULT (json_array()) NOT NULL,
	`is_favorite` integer DEFAULT false NOT NULL,
	`user_id` text,
	`image_url` text NOT NULL,
	`visited_date` text DEFAULT (CURRENT_DATE) NOT NULL,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP INDEX "user_email_unique";--> statement-breakpoint
ALTER TABLE `user` ALTER COLUMN "createdOn" TO "createdOn" integer NOT NULL DEFAULT (CURRENT_TIMESTAMP);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);