export interface Student {
  id: string;
  name: string;
  program: string;
  year: number;
  email: string;
  bio: string;
  image: string;
  enrolledCourseIds: string[];
  achievements?: string[];
  interests?: string[];
}

export const students: Student[] = [
  {
    id: 's001',
    name: 'Aisha Jama',
    program: 'Computer Science Transfer Program',
    year: 2,
    email: 'aisha.jama@nairobi.online.student',
    bio: 'Passionate about coding and community tech initiatives. Aiming to transfer to a top-tier university to specialize in AI for social good. Co-founder of the Nairobi Online Coding Club.',
    image: 'https://placehold.co/400x400.png?a=aisha',
    enrolledCourseIds: ['cs101', 'bus305'],
    achievements: ['Dean\'s List 2023', 'Winner, Annual Hackathon (Team Lead)'],
    interests: ['Artificial Intelligence', 'Web Development', 'Community Organizing', 'Photography']
  },
  {
    id: 's002',
    name: 'David Kimani',
    program: 'Business Administration - Entrepreneurship Focus',
    year: 1,
    email: 'david.kimani@nairobi.online.student',
    bio: 'Aspiring entrepreneur with a keen interest in sustainable business models. Currently developing a startup idea focused on eco-friendly products for urban living. Active in the Entrepreneurship Society.',
    image: 'https://placehold.co/400x400.png?a=david',
    enrolledCourseIds: ['bus305', 'soc110'],
    achievements: ['Nairobi College Start-Up Pitch Competition Finalist'],
    interests: ['Sustainability', 'Social Entrepreneurship', 'Marketing', 'Urban Gardening']
  },
  {
    id: 's003',
    name: 'Maria Rodriguez',
    program: 'Liberal Arts - Literature Concentration',
    year: 2,
    email: 'maria.rodriguez@nairobi.online.student',
    bio: 'An avid reader and writer, exploring the intersections of literature, culture, and social justice. Editor for the Nairobi Online Literary Magazine. Plans to pursue a career in publishing or academia.',
    image: 'https://placehold.co/400x400.png?a=maria',
    enrolledCourseIds: ['eng202', 'soc110'],
    achievements: ['Published Poet in "Voices of Tomorrow" Anthology', 'Lead Organizer, Annual Poetry Slam'],
    interests: ['Contemporary Fiction', 'Postcolonial Literature', 'Creative Writing', 'Social Justice Advocacy']
  },
];

export const getStudentById = (id: string) => students.find(s => s.id === id);
