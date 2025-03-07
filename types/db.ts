import { user } from "@/db/schema";

export type TUser = typeof user.$inferSelect;
