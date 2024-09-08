import express, { json } from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import { simplifyLaw,expandLaw,getMCQs} from './GeminiUtils.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello , I am Groot!");
});

//Get the Law in Brief
//In the message format
app.get("/ai/briefLaw",async (req,res)=>{ 
    const law = req.query.law
    const response = await simplifyLaw(law);
    let simplifiedLaw = response.candidates[0]?.content?.parts[0]?.text;
    console.log(simplifiedLaw)
    res.send(simplifiedLaw);
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
    console.log("Error in Getting MCQs");
    res.send(e);
  }
});

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
