export interface CreateAlbumDto {
  name: string;
  year: number;
  artistId?: string;
}

export interface UpdateAlbumDto {
  name: string;
  year: number;
  artistId?: string;
}
