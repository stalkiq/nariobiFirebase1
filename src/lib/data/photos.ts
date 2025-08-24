export interface Photo {
  id: string;
  src: string;
  alt: string;
  description: string;
}

// Add your photos here! Just copy the format below and add your new photos
export const photos: Photo[] = [
  {
    id: '1',
    src: '/photos/NEW%20PICTURE.png',
    alt: 'New Picture',
    description: ''
  },
  {
    id: '2',
    src: '/photos/new%20picture%203.png',
    alt: 'New Picture 3',
    description: ''
  },
  {
    id: '3',
    src: '/photos/new%20picture%204.png',
    alt: 'New Picture 4',
    description: ''
  },
  {
    id: '4',
    src: '/photos/new%20picture%206.png',
    alt: 'New Picture 6',
    description: ''
  }
];

// Helper function to get photos (useful for future features)
export const getPhotos = () => photos;

// Helper function to get photo by ID
export const getPhotoById = (id: string) => photos.find(photo => photo.id === id);
