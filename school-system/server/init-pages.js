const mongoose = require('mongoose');
const Page = require('./src/models/Page');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/school-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Default pages for the website
const defaultPages = [
  {
    title: 'Home',
    slug: 'home',
    description: 'Welcome to Excellence Academy - Homepage',
    template: 'default',
    isActive: true,
    isPublished: true,
    order: 1
  },
  {
    title: 'About Us',
    slug: 'about',
    description: 'Learn about our school history, vision, and mission',
    template: 'about',
    isActive: true,
    isPublished: true,
    order: 2
  },
  {
    title: 'Our History',
    slug: 'about/history',
    description: 'The rich history of Excellence Academy',
    template: 'about',
    isActive: true,
    isPublished: true,
    order: 3
  },
  {
    title: 'Vision & Mission',
    slug: 'about/vision-mission',
    description: 'Our vision and mission for education',
    template: 'about',
    isActive: true,
    isPublished: true,
    order: 4
  },
  {
    title: 'Principal\'s Message',
    slug: 'about/principal-message',
    description: 'A message from our principal',
    template: 'about',
    isActive: true,
    isPublished: true,
    order: 5
  },
  {
    title: 'Achievements',
    slug: 'about/achievements',
    description: 'Our school achievements and awards',
    template: 'about',
    isActive: true,
    isPublished: true,
    order: 6
  },
  {
    title: 'Academics',
    slug: 'academics',
    description: 'Academic programs and curriculum',
    template: 'academics',
    isActive: true,
    isPublished: true,
    order: 7
  },
  {
    title: 'Curriculum',
    slug: 'academics/curriculum',
    description: 'Our comprehensive curriculum',
    template: 'academics',
    isActive: true,
    isPublished: true,
    order: 8
  },
  {
    title: 'Departments',
    slug: 'academics/departments',
    description: 'Academic departments and faculty',
    template: 'academics',
    isActive: true,
    isPublished: true,
    order: 9
  },
  {
    title: 'Faculty',
    slug: 'academics/faculty',
    description: 'Meet our dedicated faculty members',
    template: 'academics',
    isActive: true,
    isPublished: true,
    order: 10
  },
  {
    title: 'Examinations',
    slug: 'academics/examinations',
    description: 'Examination system and schedules',
    template: 'academics',
    isActive: true,
    isPublished: true,
    order: 11
  },
  {
    title: 'Admissions',
    slug: 'admissions',
    description: 'Admission process and requirements',
    template: 'default',
    isActive: true,
    isPublished: true,
    order: 12
  },
  {
    title: 'Facilities',
    slug: 'facilities',
    description: 'Our world-class facilities',
    template: 'facilities',
    isActive: true,
    isPublished: true,
    order: 13
  },
  {
    title: 'Classrooms',
    slug: 'facilities/classrooms',
    description: 'Modern and well-equipped classrooms',
    template: 'facilities',
    isActive: true,
    isPublished: true,
    order: 14
  },
  {
    title: 'Laboratories',
    slug: 'facilities/laboratories',
    description: 'State-of-the-art science laboratories',
    template: 'facilities',
    isActive: true,
    isPublished: true,
    order: 15
  },
  {
    title: 'Library',
    slug: 'facilities/library',
    description: 'Comprehensive learning resource center',
    template: 'facilities',
    isActive: true,
    isPublished: true,
    order: 16
  },
  {
    title: 'Sports',
    slug: 'facilities/sports',
    description: 'Sports facilities and activities',
    template: 'facilities',
    isActive: true,
    isPublished: true,
    order: 17
  },
  {
    title: 'Transport',
    slug: 'facilities/transport',
    description: 'Transportation services',
    template: 'facilities',
    isActive: true,
    isPublished: true,
    order: 18
  },
  {
    title: 'Gallery',
    slug: 'gallery',
    description: 'Photo gallery of school events and activities',
    template: 'default',
    isActive: true,
    isPublished: true,
    order: 19
  },
  {
    title: 'Events',
    slug: 'events',
    description: 'School events and activities',
    template: 'default',
    isActive: true,
    isPublished: true,
    order: 20
  },
  {
    title: 'Contact',
    slug: 'contact',
    description: 'Contact information and location',
    template: 'contact',
    isActive: true,
    isPublished: true,
    order: 21
  }
];

async function initializePages() {
  try {
    console.log('Starting page initialization...');
    
    // Clear existing pages
    await Page.deleteMany({});
    console.log('Cleared existing pages');
    
    // Insert default pages
    const createdPages = await Page.insertMany(defaultPages);
    console.log(`Created ${createdPages.length} pages successfully`);
    
    // Display created pages
    console.log('\nCreated pages:');
    createdPages.forEach(page => {
      console.log(`- ${page.title} (/${page.slug})`);
    });
    
    console.log('\nPage initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing pages:', error);
    process.exit(1);
  }
}

// Run the initialization
initializePages(); 