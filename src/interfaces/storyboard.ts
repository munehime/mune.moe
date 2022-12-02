import { User } from "./user";

export interface Storyboard {
    id: number;
    beatmapSetId: number;
    artist: string;
    title: string;
    mappers: Array<User>;
    storyboarders: Array<User>;
    videoId?: string;
}
