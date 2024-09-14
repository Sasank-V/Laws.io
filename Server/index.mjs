import express, { json } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";

import { simplifyLaw,expandLaw,getMCQs, getCaseStudy, setCourtRoom} from './GeminiUtils.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(session({
  secret: process.env.SECRET_KEY,  // Replace with your own secret
  resave: false,              // Prevents resaving unchanged sessions
  saveUninitialized: true,    // Forces a session to be saved, even if unmodified
  cookie: { secure: false }   // Set to true if using HTTPS, false if using HTTP
}));


app.get('/', (req, res) => {
  res.send("Hello , I am Groot!");
});

//Get the Law in Brief
//In the message format
app.get("/ai/briefLaw",async (req,res)=>{
  try{
    const law = req.query.law
    const response = await simplifyLaw(law);
    let simplifiedLaw = response.candidates[0]?.content?.parts[0]?.text;
    res.send(simplifiedLaw);
  } catch(e) {
    console.log("Error while Fetching the Brief of the Law");
    res.send(e);
  }
})

//Get the indepth explanation of the law
//In JSON format
app.get("/ai/describeLaw", async (req,res)=>{
    const law = req.query.law;
    try{
      const response = await expandLaw(law);
      const lawInDepth = response.candidates[0].content.parts[0].text;
      const data = JSON.parse(lawInDepth)
      res.send(data);
    }catch(e){
      console.log("Error while Fetching the Expansion of the Law");
      res.send(e);
    }
});

// //Get 10 MCQ's based the given law
// //In JSON format
// /*{
//   "1": {
//     "question": "Sample question?",
//     "option1": "Option A",
//     "option2": "Option B",
//     "option3": "Option C",
//     "option4": "Option D",
//     "answer": "option2"
//   },
//   "2": {
//     ...
//   },
// }*/
app.get("/ai/getQuiz", async (req,res)=>{
  const law = req.query.law;
  try{
    if(law){
      const response = await getMCQs(law);
      const resText = response.candidates[0].content.parts[0].text;
      const data = JSON.parse(resText);
      res.send(data);
    }
  }catch(e){
    res.status(501).send("Error in fetching MCQ's");
    console.log("Error in Getting MCQs");
  }
});

app.get("/ai/getCase", async (req,res)=>{
  const law = req.query.law;
  try{
    if(law){
      const response = await getCaseStudy(law);
      const resText = response.candidates[0].content.parts[0].text;
      const data = JSON.parse(resText);
      res.send(data);
    }
  }catch(e){
    res.status(501).send("Error in fetching MCQ's");
    console.log("Error in Getting MCQs");
  }
});

app.post("/ai/setCourt",async (req,res)=>{
  let {law,context} = req.body;
  const chat = await setCourtRoom(law,context);
  req.session.chat = chat;
  res.redirect("/ai/simulateCourt");
});

app.get("/ai/simulateCourt",(req,res)=>{
  let chat = req.session.chat;
})

// //Get the narration of the casestudy
// app.get("/caseStudy",(req,res)=>{
//   res.send(caseStudy);
// });
// //Manually Written
// const caseStudy = {};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
