const express = require('express');
const app = express();
const port = 3000;

// === LIST OF FIRST NAMES === //
const firstNames = [
    'John', 'Jane', 'Alex', 'Emily', 'Michael', 'Sarah', 'Chris', 'Laura', 'David', 'Emma',
    'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'James', 'Isabella', 'Logan', 'Mia',
    'Lucas', 'Amelia', 'Benjamin', 'Harper', 'Mason', 'Evelyn', 'Ethan', 'Abigail', 'Henry', 'Ella',
    'Sebastian', 'Aria', 'Jack', 'Scarlett', 'Daniel', 'Grace', 'Matthew', 'Chloe', 'Samuel', 'Victoria',
    'Oliver', 'Elijah', 'Charlotte', 'Lily', 'Aiden', 'Lillian', 'Jackson', 'Zoey', 'Jacob', 'Hannah',
    'Ryan', 'Leah', 'Alexander', 'Nora', 'Luke', 'Ellie', 'Isaac', 'Samantha', 'Gabriel', 'Avery',
    'Julian', 'Addison', 'Anthony', 'Lucy', 'Nathan', 'Violet', 'Caleb', 'Stella', 'Christian', 'Hazel',
    'Aaron', 'Aurora', 'Joshua', 'Savannah', 'Andrew', 'Layla', 'Cameron', 'Zoe', 'Isaiah', 'Penelope',
    'Jaxon', 'Paisley', 'Eli', 'Skylar', 'Adam', 'Naomi', 'Connor', 'Lydia', 'Hunter', 'Madeline',
    'Owen', 'Jade', 'Jason', 'Sydney', 'Brayden', 'Brooke', 'Zachary', 'Ariana'
];

// === LIST OF LAST NAMES === //
const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Martinez', 'Taylor',
    'Anderson', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee',
    'Gonzalez', 'Clark', 'Walker', 'Hall', 'Allen', 'Young', 'King', 'Wright', 'Scott', 'Green',
    'Baker', 'Adams', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell',
    'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook',
    'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward',
    'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett',
    'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson',
    'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander',
    'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace'
];

// === GET THE FULL NAME === //
function getRandomFullName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

// === ROUTE TO GET THE FULL NAME (API) === //
app.get('/fullname', (req, res) => {
    res.json({ fullName: getRandomFullName() });
});

// === ROUTE TO GET THE FIRST NAME (API) === //
app.get('/firstname', (req, res) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    res.json({ firstName });
});

// === ROUTE TO GET THE LAST NAME (API) === //
app.get('/lastname', (req, res) => {
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    res.json({ lastName });
});

// === WHERE THE PORT LISTEN === //
app.listen(port, () => {
    console.log(`Random Name Generator API running at http://localhost:${port}`);
});
