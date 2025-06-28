const mongoose = require('mongoose');
const User = require('./src/models/User');
require('dotenv').config();

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/school-management');
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists:', existingAdmin.email);
      process.exit(0);
    }

    // Create admin user
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@excellenceacademy.com',
      password: 'admin123',
      firstName: 'System',
      lastName: 'Administrator',
      role: 'admin'
    });

    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Email: admin@excellenceacademy.com');
    console.log('Password: admin123');
    console.log('Role: admin');

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error.message);
    process.exit(1);
  }
};

createAdminUser(); 