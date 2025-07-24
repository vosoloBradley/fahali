export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  serviceType: 'Consultancy' | 'Full Project' | 'Design & Build';
  images: string[];
  longDescription: string;
  features?: string[];
  location?: string;
  size?: string;
  budget?: string;
  duration?: string;
}

export const projectsData: Project[] = [
  {
    id: 'modern-residential-complex',
    title: 'Nova Complex',
    description: 'Luxury residential development with modern amenities',
    year: '2024',
    serviceType: 'Full Project',
    location: 'Nyali, Mombasa',
    size: '5,000 sqm',
    budget: 'KES 250M',
    duration: '18 months',
    images: [
      '/proj/Gallery/Nova 8.jpg',
      '/proj/Modern residential complex.jpg',
      '/proj/Gallery/Nova 2.jpg', // Add more images here
      '/proj/Gallery/Nova 3.jpg',
      '/proj/Gallery/Nova 4.jpg',
      '/proj/Gallery/Nova 5.jpg',
      '/proj/Gallery/Nova 6.jpg',
      '/proj/Gallery/Nova 7.jpg',
    ],
    longDescription: 'This modern residential complex features state-of-the-art architecture with a focus on luxury living. The development includes 20 exclusive units, each designed with premium finishes and smart home technology. The complex boasts extensive green spaces, a swimming pool, and 24/7 security.',
    features: [
      'Residential unit',
      'Swimming pool and jacuzzi',
      'Underground parking',
      'Landscaped gardens',
      '24/7 security',
      'Smart home automation',
      'Solar power integration',
      'Water recycling system'
    ]
  },
  {
    id: 'modern-office-suit',
    title: 'Modern Office Suit',
    description: 'Professional office space with modern design features',
    year: '2022',
    serviceType: 'Design & Build',
    location: 'Mombasa, Kenya',
    images: [
      '/proj/Modern office suit.jpg',
      '/proj/Gallery/Modern office suit 1.jpg',
      '/proj/Gallery/Modern office suit 2.jpg',
      '/proj/Gallery/Modern office suit 3.jpg',
      '/proj/Gallery/Modern office suit 4.jpg',
      '/proj/Gallery/Modern office suit 5.jpg',
      '/proj/Gallery/Modern office suit 6.jpg', // Add more images here
    ],
    longDescription: 'A contemporary office space designed to enhance productivity and collaboration. The design incorporates open-plan work areas, private offices, and meeting rooms with the latest audio-visual technology. The space features ergonomic furniture, ample natural light, and energy-efficient systems.',
    features: [
      'Open-plan work areas',
      'Private offices',
      'Meeting rooms with AV',
      'Breakout spaces',
      'High-speed internet',
      'Energy-efficient lighting',
      'HVAC system'
    ]
  },
  {
    id: 'modern-fitness-complex',
    title: 'Private Modern Fitness Complex',
    description: 'State-of-the-art fitness facility with advanced equipment',
    year: '2022',
    serviceType: 'Full Project',
    location: 'Mombasa, Kenya',
    size: '1,200 sqm',
    budget: 'KES 45M',
    duration: '8 months',
    images: [
      '/proj/modern fitness complex.jpg',
      '/proj/Gallery/Fitness complex 1.jpg',
      '/proj/Gallery/Fitness complex 2.jpg',
      '/proj/Gallery/Fitness complex 3.jpg', // Add more images here
    ],
    longDescription: 'A premium fitness facility featuring the latest exercise equipment, group fitness studios, and personal training services. The complex includes a swimming pool, sauna, and juice bar, all designed to provide a complete wellness experience.',
    features: [
      'Cardio and strength training areas',
      'Group fitness studios',
      'Indoor swimming pool',
      'Sauna and steam rooms',
      'Juice bar',
      'Personal training services',
      'Locker rooms with showers'
    ]
  },
  {
    id: 'general-ward-hospital',
    title: 'Coast General Hospital',
    description: 'Modern medical facility with comprehensive healthcare services',
    year: '2021',
    serviceType: 'Consultancy',
    location: 'Mombasa, Kenya',
    size: '8,000 sqm',
    budget: 'KES 650M',
    duration: '24 months',
    images: [
      '/proj/General ward hospital.jpg',
      '/proj/Gallery/General ward hospital 1.jpg',
      '/proj/Gallery/General ward hospital 2.jpg',
      '/proj/Gallery/General ward hospital 3.jpg',
      '/proj/Gallery/General ward hospital 4.jpg',
      '/proj/Gallery/General ward hospital 5.jpg',
      '/proj/Gallery/General ward hospital 6.jpg',
      '/proj/Gallery/General ward hospital 7.jpg',
      '/proj/Gallery/General ward hospital 8.jpg',
      '/proj/Gallery/General ward hospital 9.jpg',


      
       // Add more images here
    ],
    longDescription: 'A state-of-the-art healthcare facility designed to provide comprehensive medical services. The hospital features modern patient rooms, specialized treatment areas, and advanced medical equipment. The design prioritizes patient comfort, staff efficiency, and infection control.',
    features: [
      '100+ patient beds',
      'Emergency department',
      'Operating theaters',
      'Imaging center',
      'Laboratory services',
      'Pharmacy',
      'Maternity ward',
      'Pediatric care'
    ]
  },
  {
    id: 'greenwood-villa',
    title: 'Greenwood Villa',
    description: 'Luxury villa with sustainable design and green features',
    year: '2023',
    serviceType: 'Consultancy',
    location: 'Nyali, Mombasa',
    budget: 'KES 85M',
    duration: '14 months',
    images: [
      '/proj/Greenwood villa.jpg',
      '/proj/Gallery/Green Wood 1.jpg',
      '/proj/Gallery/Green Wood 2.jpg',
      '/proj/Gallery/Green Wood 7.jpg',
      '/proj/Gallery/Green Wood 4.jpg',
      '/proj/Gallery/Green Wood 5.jpg',
      '/proj/Gallery/Green Wood 6.jpg',
      '/proj/Gallery/Green Wood 8.jpg',
      '/proj/Gallery/Green Wood 3.jpg',
      '/proj/Gallery/Green Wood 9.jpg',



// Add more images here
    ],
    longDescription: 'An exquisite luxury villa that combines modern design with sustainable living. The property features energy-efficient systems, solar panels, rainwater harvesting, and a beautiful garden with indigenous plants. The interior boasts high-end finishes and smart home technology.',
    features: [
      '5-bedroom luxury villa',
      'Infinity pool',
      'Home theater',
      'Wine cellar',
      'Solar power system',
      'Rainwater harvesting',
      'Smart home automation',
      'Landscaped gardens'
    ]
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description: 'Luxury swimming pool complex with modern amenities',
    year: '2023',
    serviceType: 'Full Project',
    location: 'Nyali, Mombasa',
    budget: 'KES 12M',
    duration: '3 months',
    images: [
      '/proj/Swimming pool.jpg',
      '/proj/Gallery/Swimming pool 1.jpg',
      '/proj/Gallery/Swimming pool 2.jpg', // Add more images here
    ],
    longDescription: 'A custom-designed swimming pool with modern features including an infinity edge, integrated spa, and LED lighting. The pool area includes a deck with comfortable lounging areas and an outdoor shower.',
    features: [
      'Infinity edge design',
      'Integrated spa',
      'LED lighting',
      'Heating system',
      'Automatic cover',
      'Deck with lounging areas',
      'Outdoor shower'
    ]
  },
  {
    id: 'water-park',
    title: 'Water Park',
    description: 'Family-friendly water park with multiple attractions',
    year: '2024',
    serviceType: 'Full Project',
    location: 'Mombasa, Kenya',
    budget: 'KES 320M',
    duration: '16 months',
    images: [
      '/proj/Water park.jpg',
      '/proj/Gallery/Splash park 1.jpg',
      '/proj/Gallery/Splash park 2.jpg', // Add more images here
      '/proj/Gallery/Splash park 3.jpg',
      '/proj/Gallery/Splash park 4.jpg',
      '/proj/Gallery/Splash park 5.jpg',
      '/proj/Gallery/Splash park 6.jpg',
    ],
    longDescription: 'A family-oriented water park featuring multiple water slides, a lazy river, wave pool, and children\'s play area. The park includes food and beverage outlets, changing facilities, and ample seating areas.',
    features: [
      'Multiple water slides',
      'Lazy river',
      'Wave pool',
      'Children\'s play area',
      'Food and beverage outlets',
      'Changing facilities',
      'First aid station'
    ]
  },
  {
    id: 'kib',
    title: 'KIB Office Fitouts',
    description: 'Office fitouts for Kenya Industrial Bank',
    year: '2025',
    serviceType: 'Design & Build',
    location: 'Nyali, Mombasa',
    budget: 'KES 180M',
    duration: '20 months',
    images: [
      '/proj/KIB.jpg',
      '/proj/Gallery/KIB 1.jpg',
      '/proj/Gallery/KIB 2.jpg',
      '/proj/Gallery/KIB 3.jpg', // Add more images here
      '/proj/Gallery/KIB 4.jpg',
      '/proj/Gallery/KIB 5.jpg',
      '/proj/Gallery/KIB 6.jpg',
      '/proj/Gallery/KIB 7.jpg',
      '/proj/Gallery/KIB 8.jpg',
      '/proj/Gallery/KIB 9.jpg',

    ],
    longDescription: 'Modern office fitouts for Kenya Industrial Bank, featuring contemporary design elements, ergonomic workstations, and collaborative spaces. The design focuses on creating a professional yet comfortable environment for employees and visitors.',
    features: [
      'Open-plan workstations',
      'Private offices',
      'Meeting rooms',
      'Breakout areas',
      'Reception area',
      'Pantry and kitchenette',
      'Ergonomic furniture'
    ]
  },
  { 
    id: 'kingston-beach-bar',
    title: 'Kingston Beach Bar',
    description: 'Beachfront bar and restaurant',
    year: '2020',
    serviceType: 'Full Project',
    location: 'Nyali Mombasa', 
    images: [
      '/proj/Kingstone beach bar.jpg',
      '/proj/Gallery/Kingstone 2.jpg', // Add more images here
      '/proj/Gallery/Kingstone 3.jpg',
      '/proj/Gallery/Kingstone 4.jpg',
      '/proj/Gallery/Kingstone 5.jpg',
      '/proj/Gallery/Kingstone 6.jpg',
      '/proj/Gallery/Kingstone 7.jpg',
      '/proj/Gallery/Kingstone 8.jpg',
      '/proj/Gallery/Kingstone 9.jpg',


    ],
    longDescription: 'A beautiful beachfront bar and restaurant offering stunning ocean views. The design incorporates natural materials and an open-air concept to create a relaxed, tropical atmosphere. The venue includes a bar, dining area, and lounge seating.',
    features: [
      'Beachfront location',
      'Bar and restaurant',
      'Open-air design',
      'Ocean views',
      'Lounge seating',
      'Live music area',
      'Event space'
    ]
  },
  { 
    id: 'kingston-splash-park',
    title: 'Kingston Splash Park',
    description: 'Family-friendly splash park with multiple attractions',
    year: '2023',
    serviceType: 'Consultancy',
    location: 'Nyali, Mombasa',
    budget: 'KES 180M',
    duration: '15 months', 
    images: [
      '/proj/Kingstone splash park.jpg',
      '/proj/Gallery/Kingston splash 1.jpg',
      '/proj/Gallery/Kingston splash 2.jpg', // Add more images here
      '/proj/Gallery/Kingston splash 3.jpg',
      '/proj/Gallery/Kingston splash 4.jpg',
      '/proj/Gallery/Kingston splash 5.jpg',
      '/proj/Gallery/Kingston splash 6.jpg',
      '/proj/Gallery/Kingston splash 7.jpg',
      '/proj/Gallery/Kingston splash 8.jpg',
      '/proj/Gallery/Kingston splash 9.jpg',
      


    ],
    longDescription: 'A beautiful beachfront bar and restaurant offering stunning ocean views. The design incorporates natural materials and an open-air concept to create a relaxed, tropical atmosphere. The venue includes a bar, dining area, and lounge seating.',
    features: [
      'Beachfront location',
      'Bar and restaurant',
      'Open-air design',
      'Ocean views',
      'Lounge seating',
      'Live music area',
      'Event space'
    ]
  },
  { 
    id: 'Kingstone gas',
    title: 'Kingstone LPG gas',
    description: 'LPG gas',
    year: '2024',
    serviceType: 'Full Project',
    location: 'Nyali Mombasa',
    budget: 'KES 15M',
    duration: '6 months', 
    images: [
      '/proj/Kingstone gas.jpg',
      '/proj/Gallery/LPG 1.jpg', // Add more images here
      '/proj/Gallery/LPG 2.jpg',
      '/proj/Gallery/LPG 3.jpg',
      '/proj/Gallery/LPG 4.jpg',
      '/proj/Gallery/LPG 5.jpg',
      '/proj/Gallery/LPG 6.jpg',



    ],
    longDescription: 'Oversaw the end-to-end commissioning of LPG gas systems, ensuring all installations met safety, operational, and regulatory standards. Responsibilities included coordinating site inspections, supervising pressure and leak tests, managing contractor teams, verifying system integrity, and ensuring timely handover to clients. ',
    features: [
      'LPG gas',

    ]
  },
  {
    id: 'perk-residential-gym',
    title: 'Perk residential gym',
    description: 'State-of-the-art fitness facility with advanced equipment',
    year: '2022',
    serviceType: 'Full Project',
    location: 'Mombasa, Kenya',
    size: '1,200 sqm',
    budget: 'KES 38M',
    duration: '7 months',
    images: [
      '/proj/Pek residential gym.jpg',
      '/proj/Gallery/Perk 1.jpg',
      '/proj/Gallery/Perk 2.jpg',
      '/proj/Gallery/Perk 3.jpg', // Add more images here
      '/proj/Gallery/Perk 4.jpg',
      '/proj/Gallery/Perk 5.jpg',
      '/proj/Gallery/Perk 6.jpg',
    ],
    longDescription: 'A premium fitness facility featuring the latest exercise equipment, group fitness studios, and personal training services. The complex includes a swimming pool, sauna, and juice bar, all designed to provide a complete wellness experience.',
    features: [
      'Cardio and strength training areas',
      'Group fitness studios',
      'Indoor swimming pool',
      'Sauna and steam rooms',
      'Juice bar',
      'Personal training services',
      'Locker rooms with showers'
    ]
  }

];
