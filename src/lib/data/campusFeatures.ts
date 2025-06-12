export interface CampusFeature {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
  historicalConnection?: string;
}

export const campusFeatures: CampusFeature[] = [
  {
    id: 'digital-library',
    name: 'The Digital Library & Resource Center',
    description: 'Access a vast collection of e-books, journals, and academic databases.',
    image: 'https://placehold.co/600x400.png?a=library',
    details: 'Our state-of-the-art digital library provides 24/7 access to essential learning materials. Features include advanced search capabilities, collaborative research tools, and dedicated librarian support.',
    historicalConnection: 'Inspired by the original Nairobi College library, a hub for knowledge and community learning in East Palo Alto.'
  },
  {
    id: 'student-hub',
    name: 'Virtual Student Union & Collaboration Spaces',
    description: 'Connect with peers, join clubs, and engage in student life activities.',
    image: 'https://placehold.co/600x400.png?a=studenthub',
    details: 'The Virtual Student Union is where our community comes alive. Participate in online forums, join interest-based clubs, attend virtual events, and collaborate on projects in shared digital workspaces.',
    historicalConnection: 'Reflecting the vibrant student center at Nairobi College, fostering a strong sense of belonging and peer support.'
  },
  {
    id: 'innovation-lab',
    name: 'Innovation & Entrepreneurship Lab',
    description: 'Develop your ideas with mentorship, resources, and cutting-edge tools.',
    image: 'https://placehold.co/600x400.png?a=innovationlab',
    details: 'Our Innovation Lab provides aspiring entrepreneurs and creators with virtual tools, mentorship from industry experts, and resources to bring their ideas to life. From coding sandboxes to business plan simulators, this is where innovation thrives.',
    historicalConnection: 'Continuing the practical, problem-solving ethos of Nairobi College, which encouraged students to apply their learning to real-world challenges.'
  },
  {
    id: 'career-services',
    name: 'Career Development & Transfer Center',
    description: 'Get support for your career goals, from internships to university transfer.',
    image: 'https://placehold.co/600x400.png?a=careerservices',
    details: 'Our dedicated center offers personalized career counseling, resume workshops, interview preparation, and guidance on transferring to four-year institutions. We connect students with internship opportunities and alumni networks.',
    historicalConnection: 'Mirroring Nairobi College\'s commitment to preparing students for successful employment and further education.'
  },
];
