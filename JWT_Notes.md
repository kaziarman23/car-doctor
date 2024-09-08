## JWT Notes

1. have to install json-web-token. then in the server-side terminal type node to open the node enviorment
2. then type this to genarate a secret token: require('crypto').randomBytes(64).toString('hex')
3. then store it in the env file and set the token in the backend with jwt
<!-- Demo
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.send(token);
    });
 -->
4. we set a token with jwt.sign method. first we need a playload, then a secret token then a expire date(when the token will expire)
5. we install a cookie-parser(middleware) to send the token client to server.we store the token in the http cookies.then require it and use it
<!-- Demo
    npm install cookie-parser
    const cookieparser = require("cookie-parser")
    app.use(cookieParser())
-->
6. now we will send the response by http only cookies
<!-- Demo
    res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: 'none',
        })
        .send(token);
 -->
7. firstly we setting a cookies. in that cookies we set a name then the token then an object.
   in that object we set httpOnly true(this refers that we are sending it with browser).secure false because we are runnig it on localserver.and our frontendServer and backend server is not the same that's why we are doing sameSite to none.

8. we set cors origin and Credentials true
<!-- Demo
    app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
    }));
-->

9. in login page we set withCredentials true for showing the token in the client
<!-- Demo
    axios
        .post("https://car-doctor-server-livid-theta.vercel.app/jwt", user, {withCredentials: true})
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
 -->

10. now we use axios insted of fetch to send req to the server and adding a credential means that it will also send the cookies also
<!-- Demo
    axios
    .get(url, { withCredentials: true })
    .then((res) => setBookings(res.data));
 -->

## custom middleware in JWT

<!-- Demo
    const varifyToken = async (req, res, next) => {
    const token = req.cookies?.token;
        if (!token) {
            return res.status(401).send({ message: "not authorized" });
        }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "unauthorized" });
        }
    req.user = decoded;
    next();
  });
};
-->

1. we create a async arrow function and take 3 peramiters:
   req is for getting the requiest from the client
   res is for the sending response in the client
   next is for going to the next commend of chain

2. we store the token in a variable and then we set a checker that will check if the token is there available or not.

3. then we verify the token with JWT.verify method in that method we have to give 3 things:
   first the token from the cookies
   second our secret token number
   therd is an object that will identify that, token is verifyed or not. if the token is not varifyed then it will get an error and send a error message. if it is a verifyed token then it will store the details in the user and do the next thing
   (we are using it in the my booking page. so that no unauthorized person can access the page)

4. then we match the email's for the right data and blocking the user to watch the another person's data.
<!-- Demo
    app.get("/bookings", varifyToken, async (req, res) => {
      console.log("tok tok token:", req.cookies.token);
      console.log("user in the valied token: ", req.user);

    // we are checking that user is only access in his personal data and no one else. 
      if(req.query.email !== req.user.email){
        return res.status(403).send({message: "Forbidden Access"})
      }

      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });
 -->
