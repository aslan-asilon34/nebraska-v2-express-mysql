const express = require('express');
const router = express.Router();
const connection = require('../library/database');

// Define constants for pagination
const perPage = 10; // Number of items per page

router.get('/', function (req, res, next) {
    // Retrieve page number from query parameters, default to 1 if not provided
    const page = parseInt(req.query.page) || 1;

    // Calculate offset based on current page and number of items per page
    const offset = (page - 1) * perPage;

    // Query to retrieve users data with pagination
    connection.query('SELECT * FROM users ORDER BY id LIMIT ? OFFSET ?', [perPage, offset], function (err, rows) {
        if (err) {
            console.log('Error:', err.message);
            req.flash('error', err);
            res.render('users', {
                data: [],
                title: 'User Page'
            });
        } else {
            // Query to count total number of users
            connection.query('SELECT COUNT(*) AS totalCount FROM users', function (err, result) {
                if (err) {
                    console.log('Error:', err.message);
                    req.flash('error', err);
                    res.render('users', {
                        data: [],
                        layout: './layouts/backend-layout',
                        title: 'User Page'
                    });
                } else {
                    const totalCount = result[0].totalCount; // Total number of users
                    const totalPages = Math.ceil(totalCount / perPage); // Total number of pages

                    // Render the users index view with pagination data
                    res.render('users/index', {
                        data: rows, // Users data for current page
                        title: 'User Page',
                        isActive: 'users',
                        req: req,
                        currentPage: page, // Current page number
                        totalPages: totalPages, // Total number of pages
                        layout: './layouts/backend-layout'
                    });
                }
            });
        }
    });
});

module.exports = router;
