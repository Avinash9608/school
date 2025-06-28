const mongoose = require('mongoose');
const Header = require('./src/models/Header');
const Footer = require('./src/models/Footer');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/school-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Default header content
const defaultHeader = {
  logo: {
    text: "Excellence Academy",
    image: ""
  },
  contactInfo: {
    phone: "+1 234 567 8900",
    email: "info@excellenceacademy.com",
    address: "123 Education Street, City, State 12345"
  },
  navigation: [
    {
      title: "Home",
      url: "/",
      order: 1,
      isActive: true,
      hasSubmenu: false,
      submenu: []
    },
    {
      title: "About Us",
      url: "/about",
      order: 2,
      isActive: true,
      hasSubmenu: true,
      submenu: [
        { title: "Our History", url: "/about/history", order: 1, isActive: true },
        { title: "Vision Mission", url: "/about/vision-mission", order: 2, isActive: true },
        { title: "Principal Message", url: "/about/principal-message", order: 3, isActive: true },
        { title: "Achievements", url: "/about/achievements", order: 4, isActive: true }
      ]
    },
    {
      title: "Academics",
      url: "/academics",
      order: 3,
      isActive: true,
      hasSubmenu: true,
      submenu: [
        { title: "Curriculum", url: "/academics/curriculum", order: 1, isActive: true },
        { title: "Faculty", url: "/academics/faculty", order: 2, isActive: true },
        { title: "Departments", url: "/academics/departments", order: 3, isActive: true },
        { title: "Examinations", url: "/academics/examinations", order: 4, isActive: true }
      ]
    },
    {
      title: "Admissions",
      url: "/admissions",
      order: 4,
      isActive: true,
      hasSubmenu: false,
      submenu: []
    },
    {
      title: "Facilities",
      url: "/facilities",
      order: 5,
      isActive: true,
      hasSubmenu: true,
      submenu: [
        { title: "Classrooms", url: "/facilities/classrooms", order: 1, isActive: true },
        { title: "Laboratories", url: "/facilities/laboratories", order: 2, isActive: true },
        { title: "Sports", url: "/facilities/sports", order: 3, isActive: true },
        { title: "Transport", url: "/facilities/transport", order: 4, isActive: true },
        { title: "Library", url: "/facilities/library", order: 5, isActive: true }
      ]
    },
    {
      title: "Gallery",
      url: "/gallery",
      order: 6,
      isActive: true,
      hasSubmenu: false,
      submenu: []
    },
    {
      title: "Events",
      url: "/events",
      order: 7,
      isActive: true,
      hasSubmenu: false,
      submenu: []
    },
    {
      title: "Contact",
      url: "/contact",
      order: 8,
      isActive: true,
      hasSubmenu: false,
      submenu: []
    }
  ],
  ctaButton: {
    text: "Apply Now",
    url: "/admissions",
    isActive: true
  },
  loginButton: {
    text: "Login",
    url: "/admin/login",
    isActive: true
  },
  isActive: true
};

// Default footer content
const defaultFooter = {
  companyInfo: {
    name: "Excellence Academy",
    description: "Excellence Academy is committed to providing quality education and fostering academic excellence.",
    logo: ""
  },
  contactInfo: {
    address: "123 Education Street, City, State 12345",
    phone: "+1 234 567 8900",
    email: "info@excellenceacademy.com",
    workingHours: "Monday - Friday: 8:00 AM - 4:00 PM"
  },
  quickLinks: [
    { title: "Home", url: "/", order: 1, isActive: true },
    { title: "About Us", url: "/about", order: 2, isActive: true },
    { title: "Academics", url: "/academics", order: 3, isActive: true },
    { title: "Admissions", url: "/admissions", order: 4, isActive: true },
    { title: "Facilities", url: "/facilities", order: 5, isActive: true },
    { title: "Contact", url: "/contact", order: 6, isActive: true }
  ],
  socialLinks: {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: ""
  },
  newsletter: {
    title: "Subscribe to Our Newsletter",
    description: "Stay updated with our latest news and events",
    isActive: true
  },
  copyright: {
    text: "© 2024 Excellence Academy. All rights reserved.",
    links: [
      { title: "Privacy Policy", url: "/privacy" },
      { title: "Terms of Service", url: "/terms" }
    ]
  },
  isActive: true
};

async function initializeHeaderFooter() {
  try {
    console.log('Starting header and footer initialization...');
    
    // Clear existing header and footer
    await Header.deleteMany({});
    await Footer.deleteMany({});
    console.log('Cleared existing header and footer');
    
    // Insert default header and footer
    const createdHeader = await Header.create(defaultHeader);
    const createdFooter = await Footer.create(defaultFooter);
    
    console.log('Created header and footer successfully');
    console.log(`Header: ${createdHeader.logo.text}`);
    console.log(`Footer: ${createdFooter.companyInfo.name}`);
    
    console.log('\nHeader and footer initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing header and footer:', error);
    process.exit(1);
  }
}

// Run the initialization
initializeHeaderFooter(); 