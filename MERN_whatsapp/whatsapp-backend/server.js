// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
	appId: "1067922",
	key: "78eed61a1ce2502b24d1",
	secret: "d75ffc06b8515d1e82c9",
	cluster: "ap2",
	encrypted: true,
});

// middlewares
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

// db config
const connection_url =
	"mongodb+srv://danny:N5NcGVjLgNt51IJo@cluster0.c57nc.mongodb.net/dansappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
	console.log("DB connected");

	const msgCollection = db.collection("messagecontents");
	const changeStream = msgCollection.watch();
	//   console.log(changeStream);

	changeStream.on("change", (change) => {
		// console.log(change);
		console.log("A change occoured", change);

		if (change.operationType === "insert") {
			const messageDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				// name: messageDetails.user,
				name: messageDetails.name,
				message: messageDetails.message,
				timestamp: messageDetails.timestamp,
				received: messageDetails.received,
			});
		} else {
			console.log("Error triggering pusher");
		}
	});
});

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
	Messages.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// app.post("/api/v1/messages/new", (req, res) => {
app.post("/messages/new", (req, res) => {
	const dbMessage = req.body;

	Messages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
			// res.status(201).send(`new message created: \n ${data}`)
		}
	});
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
