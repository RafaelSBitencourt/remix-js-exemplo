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

// Função auxiliar para simular latência de banco de dados e evitar repetição
const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllAlbums(): Promise<Album[]> {
  await delay();
  return albums.map((album) => ({ ...album }));
}

export async function getAlbum(albumId: string): Promise<Album | undefined> {
  await delay();
  const album = albums.find((album) => album.id === albumId);
  // Retorna uma cópia para evitar mutação externa não intencional
  return album ? { ...album } : undefined;
}

// Omit garante que o campo 'id' não possa ser enviado no objeto de atualização
export async function updateAlbum(
  albumId: string,
  values: Omit<Partial<Album>, "id">,
): Promise<Album | undefined> {
  await delay();
  const album = albums.find((album: Album) => album.id === albumId);

  if (!album) {
    return undefined;
  }

  // Atualiza o objeto original no array
  Object.assign(album, values);

  // Retorna uma cópia do objeto atualizado
  return { ...album };
}

export async function deleteAlbum(albumId: string): Promise<Album | undefined> {
  await delay();
  const albumPos = albums.findIndex((album: Album) => album.id === albumId);

  if (albumPos === -1) return undefined;

  const [deletedAlbum] = albums.splice(albumPos, 1);
  return deletedAlbum;
}
