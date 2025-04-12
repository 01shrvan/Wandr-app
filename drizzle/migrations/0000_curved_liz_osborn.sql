CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`fullName` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`createdOn` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `travel_stories` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`story` text NOT NULL,
	`visited_location` text DEFAULT (json_array()) NOT NULL,
	`is_favorite` integer DEFAULT false NOT NULL,
	`user_id` text NOT NULL,
	`image_url` text NOT NULL,
	`visited_date` integer NOT NULL,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
