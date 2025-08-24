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
    description: 'A new picture you added'
  }
];

// Helper function to get photos (useful for future features)
export const getPhotos = () => photos;

// Helper function to get photo by ID
export const getPhotoById = (id: string) => photos.find(photo => photo.id === id);
