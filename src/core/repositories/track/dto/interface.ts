export interface CreateTrackDto {
  name: string;
  artistId?: string;
  albumId?: string;
  duration: number;
}

export interface UpdateTrackInfoDto {
  name: string;
  artistId?: string;
  albumId?: string;
  duration: number;
}
