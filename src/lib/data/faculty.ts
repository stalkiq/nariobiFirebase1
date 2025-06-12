export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  email: string;
  phone?: string;
  officeHours?: string;
  image: string;
  areasOfExpertise: string[];
  publications?: string[];
  coursesTaughtIds: string[];
}

export const faculty: FacultyMember[] = [
  {
    id: 'ada_lovelace',
    name: 'Dr. Ada Lovelace',
    title: 'Professor of Computer Science',
    department: 'Computer Science',
    bio: 'Dr. Lovelace is a visionary in computational theory and programming. With extensive research in algorithms and software development, she brings a wealth of knowledge and practical experience to her students. She is passionate about making technology accessible and empowering for all.',
    email: 'ada.lovelace@nairobi.online',
    officeHours: 'Mon/Wed 10:00 AM - 12:00 PM (Virtual)',
    image: 'https://placehold.co/400x400.png?a=ada',
    areasOfExpertise: ['Algorithms', 'Software Engineering', 'Computational Theory', 'History of Computing'],
    publications: [
      'Notes on the Analytical Engine (1843)',
      'The Future of Computation (2023, Fictional)'
    ],
    coursesTaughtIds: ['cs101']
  },
  {
    id: 'alan_turing',
    name: 'Dr. Alan Turing',
    title: 'Associate Professor of Artificial Intelligence',
    department: 'Computer Science',
    bio: 'A pioneer in artificial intelligence and theoretical computer science, Dr. Turing focuses on machine learning, cryptography, and the philosophical implications of AI. His work aims to bridge the gap between theoretical models and real-world applications.',
    email: 'alan.turing@nairobi.online',
    image: 'https://placehold.co/400x400.png?a=alan',
    areasOfExpertise: ['Artificial Intelligence', 'Machine Learning', 'Cryptography', 'Theory of Computation'],
    coursesTaughtIds: ['cs101']
  },
  {
    id: 'toni_morrison',
    name: 'Prof. Toni Morrison',
    title: 'Distinguished Professor of Literature',
    department: 'English & Literature',
    bio: 'Professor Morrison is a celebrated author and scholar whose work explores themes of identity, race, and history in American literature. She encourages students to engage critically with texts and understand the power of storytelling in shaping culture and society.',
    email: 'toni.morrison@nairobi.online',
    officeHours: 'Tue/Thu 1:00 PM - 3:00 PM (Virtual)',
    image: 'https://placehold.co/400x400.png?a=toni',
    areasOfExpertise: ['African American Literature', 'Modern American Literature', 'Creative Writing', 'Cultural Studies'],
    publications: [
      'Beloved (1987)',
      'Song of Solomon (1977)'
    ],
    coursesTaughtIds: ['eng202']
  },
  {
    id: 'madam_cj_walker',
    name: 'Dr. Madam C.J. Walker',
    title: 'Chair of Business Innovation',
    department: 'Business Administration',
    bio: 'Dr. Walker is an expert in entrepreneurship, particularly focused on empowering underrepresented founders. Her research and teaching cover business development, marketing strategy, and social enterprise, drawing from her own groundbreaking experiences in industry.',
    email: 'cj.walker@nairobi.online',
    image: 'https://placehold.co/400x400.png?a=cjwalker',
    areasOfExpertise: ['Entrepreneurship', 'Small Business Management', 'Marketing', 'Social Enterprise'],
    coursesTaughtIds: ['bus305']
  },
  {
    id: 'jane_jacobs',
    name: 'Prof. Jane Jacobs',
    title: 'Professor of Urban Studies',
    department: 'Sociology',
    bio: 'Professor Jacobs is a leading voice in urban sociology and community planning. Her work emphasizes the importance of vibrant, diverse, and community-led urban environments. She is dedicated to teaching students how to analyze and contribute to positive urban change.',
    email: 'jane.jacobs@nairobi.online',
    officeHours: 'By Appointment',
    image: 'https://placehold.co/400x400.png?a=janejacobs',
    areasOfExpertise: ['Urban Sociology', 'Community Development', 'City Planning', 'Social Activism'],
    publications: [
      'The Death and Life of Great American Cities (1961)'
    ],
    coursesTaughtIds: ['soc110']
  },
];

export const getFacultyById = (id: string) => faculty.find(f => f.id === id);
export const getFacultyByIds = (ids: string[]) => faculty.filter(f => ids.includes(f.id));
