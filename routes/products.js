import express from "express";

const router = express.Router();

const mockProducts = [
    { id: 123, name: 'Sweater', price: 10.99 },
    { id: 120, name: 'jeans', price: 16.60 },
    { id: 183, name: 'shorts', price: 12.99 },
    { id: 193, name: 't-shirt', price: 11.99 },
    { id: 180, name: 'dress', price: 20.09 },
];

// Get all products
router.get("/", (req, res) => {
    res.send(mockProducts);
});

// Create a new product
router.post("/", (req, res) => {
    const newProduct = { id: mockProducts.length + 1, ...req.body };
    mockProducts.push(newProduct);
    res.status(201).send(newProduct);
});

// Update a product
router.put("/:id", (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
    const index = mockProducts.findIndex((product) => product.id === parsedId);
    if (index === -1) return res.sendStatus(404);

    mockProducts[index] = { ...mockProducts[index], ...req.body };
    res.send(mockProducts[index]);
});

export default router;