
export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  creditHours: number;
  instructorIds: string[];
  department: string;
  image: string;
  learningOutcomes: string[];
  prerequisites?: string[];
}

export const courses: Course[] = [
  {
    id: 'cs101',
    title: 'Introduction to Computer Science',
    shortDescription: 'Fundamental concepts of computer science and programming.',
    longDescription: 'This course provides a comprehensive introduction to the fundamental concepts of computer science, including algorithms, data structures, and programming principles using Python. Students will gain hands-on experience through coding assignments and projects.',
    creditHours: 3,
    instructorIds: ['ada_lovelace', 'alan_turing'],
    department: 'Computer Science',
    image: 'https://placehold.co/600x400.png?a=cs101',
    learningOutcomes: [
      'Understand basic programming constructs.',
      'Develop problem-solving skills using algorithms.',
      'Write simple programs in Python.',
      'Understand fundamental data structures.'
    ],
    prerequisites: ['Basic computer literacy']
  },
  {
    id: 'eng202',
    title: 'African American Literature',
    shortDescription: 'Exploration of major themes and writers in African American literary tradition.',
    longDescription: 'This course surveys the rich tapestry of African American literature from its origins to the present day. Students will engage with various genres, including fiction, poetry, drama, and non-fiction, exploring themes of identity, race, resistance, and community.',
    creditHours: 3,
    instructorIds: ['toni_morrison'],
    department: 'English & Literature',
    image: 'https://placehold.co/600x400.png?a=eng202',
    learningOutcomes: [
      'Identify key authors and works in African American literature.',
      'Analyze literary texts for thematic and stylistic elements.',
      'Understand the historical and cultural contexts of the literature.',
      'Develop critical reading and writing skills.'
    ],
  },
  {
    id: 'bus305',
    title: 'Entrepreneurship & Small Business Management',
    shortDescription: 'Learn to start and manage a successful small business.',
    longDescription: 'This course covers the essentials of entrepreneurship, from idea generation and business planning to funding, marketing, and operations. It emphasizes practical skills and strategies for launching and growing a small business in today\'s competitive environment.',
    creditHours: 4,
    instructorIds: ['madam_cj_walker'],
    department: 'Business Administration',
    image: 'https://placehold.co/600x400.png?a=bus305',
    learningOutcomes: [
      'Develop a comprehensive business plan.',
      'Understand different funding options for startups.',
      'Apply marketing strategies for small businesses.',
      'Manage financial and operational aspects of a small enterprise.'
    ],
    prerequisites: ['Introduction to Business (BUS101) or equivalent experience']
  },
  {
    id: 'soc110',
    title: 'Urban Sociology & Community Development',
    shortDescription: 'Examines social structures and change in urban environments.',
    longDescription: 'This course explores the complexities of urban life, focusing on social structures, community dynamics, and processes of change. It examines issues such as urbanization, inequality, housing, and community development strategies, with a particular focus on empowering marginalized communities.',
    creditHours: 3,
    instructorIds: ['jane_jacobs'],
    department: 'Sociology',
    image: 'https://placehold.co/600x400.png?a=soc110',
    learningOutcomes: [
      'Understand key theories of urban sociology.',
      'Analyze social problems in urban settings.',
      'Evaluate community development initiatives.',
      'Grasp the impact of policy on urban communities.'
    ],
  },
  {
    id: 'comp3400',
    title: 'Developmental Skills (COMP3400)',
    shortDescription: 'Focuses on foundational English language skills: spelling, pronunciation, and syntax.',
    longDescription: `This course, led by Mary Hoover, addresses fundamental English language needs. Every Tuesday and Thursday from 3-5 PM, students are drilled out of the lingual rut often ignored by previous schooling. The curriculum covers basic spelling, pronunciation, and syntax, with students actively participating by repeating words after their teacher and taking dictation. Students approach the remedial nature of the subject with a focus on learning and improvement. As student Naiomi Moss explains, "The class is a real help. There's more detail and explanation here at Nairobi; the people just seem to care more than at other schools. They get down to the basic problems."`,
    creditHours: 3,
    instructorIds: ['mary_hoover'],
    department: 'Foundational Studies',
    image: 'https://placehold.co/600x400.png?a=comp3400',
    learningOutcomes: [
      'Improve basic spelling and pronunciation.',
      'Understand and apply correct English syntax.',
      'Develop confidence in foundational language skills.',
      'Engage actively in learning through repetition and dictation.'
    ],
    prerequisites: ['Placement Assessment or Instructor Permission']
  }
];
