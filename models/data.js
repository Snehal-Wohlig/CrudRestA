const express = require('express');
const mongoose = require('mongoose');

const studentStruc = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  coursename: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// we are creating a new collection

const Student = new mongoose.model('Student', studentStruc);
module.exports = Student;
