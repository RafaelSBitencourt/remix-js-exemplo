export type Album = {
  artist: string;
  id: string;
  title: string;
  year: number;
};

let albums: Album[] = [
  {
    artist: "Michael Jackson",
    id: "thriller",
    title: "Thriller",
    year: 1983,
  },
  {
    artist: "Nirvana",
    id: "nevermind",
    title: "Nevermind",
    year: 1991,
  },
  {
    artist: "Pink Floyd",
    id: "dark-side",
    title: "The Dark Side of the Moon",
    year: 1973,
  },
];

export async function getAlbum(albumId: string) {
  return albums.find((album) => album.id === albumId);
}

export async function updateAlbum(albumId: string, values: Partial<Album>) {
  let album = albums.find((album: Album) => album.id === albumId);

  if (album === undefined) {
    return undefined;
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  Object.assign(album, values);
  return album;
}

export async function deleteAlbum(albumId: string) {
  let albumPos = albums.findIndex((album: Album) => album.id === albumId);

  if (albumPos === -1) return undefined;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  let [deletedAlbum] = albums.splice(albumPos, 1);

  return deletedAlbum;
}
