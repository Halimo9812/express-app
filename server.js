import express from "express";
import userRouter from "./routes/user.js";
import productRoutes from "./routes/products.js";

// express app

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

// Middleware
app.use(express.static('public'))
app.use("/api/user", userRouter);
app.use("/api/products", productRoutes);
app.use(express.urlencoded({ extended: true }));

//home route
app.get('/', (req, res) => {
    console.log('We are here')
    //res.send('Hey')
    res.status(200).send({ msg: 'Hey' });
});

//  render the create user form
app.get('/create-user', (req, res) => {
  res.render('createUser'); 
});


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});