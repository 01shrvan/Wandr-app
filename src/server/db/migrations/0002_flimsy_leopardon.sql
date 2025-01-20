PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_travel_stories` (
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
--> statement-breakpoint
INSERT INTO `__new_travel_stories`("id", "title", "story", "visited_location", "is_favorite", "user_id", "image_url", "visited_date", "created_at") SELECT "id", "title", "story", "visited_location", "is_favorite", "user_id", "image_url", "visited_date", "created_at" FROM `travel_stories`;--> statement-breakpoint
DROP TABLE `travel_stories`;--> statement-breakpoint
ALTER TABLE `__new_travel_stories` RENAME TO `travel_stories`;--> statement-breakpoint
PRAGMA foreign_keys=ON;