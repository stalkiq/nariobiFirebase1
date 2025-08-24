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
    src: '/images/images.jpg',
    alt: 'Learning Environment',
    description: 'Students engaging in collaborative learning'
  },
  {
    id: '2',
    src: '/images/download.jpg',
    alt: 'Student Life',
    description: 'Diverse community of learners'
  },
  {
    id: '3',
    src: '/images/download-1.jpg',
    alt: 'Academic Excellence',
    description: 'Building your future with Nairobi College'
  },
  {
    id: '4',
    src: '/images/images-1.jpg',
    alt: 'Campus Experience',
    description: 'Vibrant Nairobi College community'
  }
  // Add more photos below this line!
  // Example:
  // {
  //   id: '5',
  //   src: '/images/your-new-photo.jpg',
  //   alt: 'Description of your photo',
  //   description: 'What this photo shows or represents'
  // }
];

// Helper function to get photos (useful for future features)
export const getPhotos = () => photos;

// Helper function to get photo by ID
export const getPhotoById = (id: string) => photos.find(photo => photo.id === id);
