import express from "express";

const router = express.Router();

const mockUsers = [
    { id: 1, username: 'hali', displayName: 'hali' },
    { id: 2, username: 'sunny', displayName: 'sunny' },
    { id: 3, username: 'hal', displayName: 'hal' },
    { id: 4, username: 'Famay', displayName: 'Famay' },
    { id: 5, username: 'halo', displayName: 'halo' },
];

// Get all users
router.get("/", (req, res) => {
   // res.send('Hello from users');
    res.send(mockUsers);
});

// Get a user by ID
router.get("/:id", (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
    if (isNaN(parsedId)) return res.status(400).send({ msg: "Bad Request. Invalid ID." });

    const findUser = mockUsers.find((user) => user.id === parsedId);
    if (!findUser) return res.sendStatus(404);
    return res.send(findUser);
});

// Create a new user
router.post("/", (req, res) => {
    const newUser = { id: mockUsers.length + 1, ...req.body };
    mockUsers.push(newUser);
    res.status(201).render('user/new', { user: newUser });
});
// Update a user
router.put("/:id", (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
    const index = mockUsers.findIndex((user) => user.id === parsedId);
    if (index === -1) return res.sendStatus(404);

    mockUsers[index] = { ...mockUsers[index], ...req.body };
    res.send(mockUsers[index]);
});

// Delete a user
router.delete("/:id", (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
    const index = mockUsers.findIndex((user) => user.id === parsedId);
    if (index === -1) return res.sendStatus(404);

    mockUsers.splice(index, 1);
    res.sendStatus(204);
});

export default router;