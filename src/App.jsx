
// import { useState } from 'react'
// import './App.css'
// import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
// import  axios from 'axios';
// function App() {
//   const[emailcontent,setEmailcontent]=useState('');
//   const[tone,setTone]=useState('');
//   const[generatedReplay,setgeneratedReplay]=useState('');
//   const[loading,setLoading]=useState(false);
//   const[error,setError]=useState('');
// const handlesubmit=async()=>{
//   setLoading(true);
//   setError('');
//   try {
// const response=await axios.post("http://localhost:8080/api/mail/generate",{
//   emailcontent,
//   tone
// });
// setgeneratedReplay(typeof response.data === 'string' ? response.data: JSON.stringify(response.data));
    
//   } catch (error) {
//     setError("Failed to generated email replay.please try again");
//     console.log(error);  
//   }
//   finally{
//     setLoading(false);
//   }

// }
//   return (
//     <>
//       <Container maxWidth="md" sx={{py:4}}>
//       <Box 
//       sx={{ 
//         textAlign: 'center',       // Centers the text horizontally
//         color: '#1976d2',          // Change the color to Material-UI primary color (or any desired color)
//         margin: '20px 0',          // Adds margin above and below the Typography
//       }}
//     >
//       <Typography variant="h3" component="h1">
//         Email Replay Generator
//       </Typography>
//     </Box>

//         {/* <Typography variant='h3' component='h1' >
//           EmailReplayGenerator
//         </Typography> */}
// <Box sx={{mx:3 }}>
//   <TextField fullWidth multiline rows={6} variant='outlined' label="original Email Content" 
//   value={emailcontent||''}
//   onChange={(e)=>setEmailcontent(e.target.value)} sx={{mb:2}}
//    />
//     <FormControl fullWidth sx={{mb:2}}>

// <InputLabel>Tone(Optional)</InputLabel>
// <Select value={tone ||''}
//     label={"Tone(optional)"}
//     onChange={(e)=>setTone(e.target.value)}>
// <MenuItem value="">None</MenuItem>
// <MenuItem value="causual">causual</MenuItem>
// <MenuItem value="friendly">friendly</MenuItem>
// <MenuItem value="professional">professional</MenuItem>
// </Select>


//     </FormControl>
//     <Button variant='contained'
//      onClick={handlesubmit} disabled={!emailcontent||loading} fullWidth>
//       {loading ? <CircularProgress size={24}/>:"generatedReplay" }

//      </Button>
// </Box>
// {
//   error && (
//     <Typography color='error' sx={{mb:2}}>
//       {error}
//     </Typography>

//   )}
//   {
//     generatedReplay&&(
//       <Box sx={{mt:3}}>
//         <Typography variant='h6' gutterBottom>
//           Generated Replay
//         </Typography>
//         <TextField fullWidth 
        
//         multiline 
//         rows={6}
//         variant='outlined' 
//         value={generatedReplay||''}
//         inputProps={{readOnly:true}}/>
//         <Button
//          variant='outlined'
//          sx={{mt:2}}
//          onClick={()=>navigator.clipboard.writeText(generatedReplay)}>
// Copy To Clipboard
//          </Button>
//       </Box>
//     )
//   }
//       </Container>
//     </>
//   )
// }

// export default App
//

// second

 // import  { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [emailContent, setEmailContent] = useState("");
//   const [tone, setTone] = useState("friendly");
//   const [generatedReply, setGeneratedReply] = useState("");
//   const [isReplyGenerated, setIsReplyGenerated] = useState(false);

//   const handleGenerateReply = async () => {
//     if (!emailContent.trim()) {
//       alert("Please provide the original email content.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8080/api/mail/generate", {
//         emailContent,
//         tone,
//       });

//       if (response.data && response.data.reply) {
//         setGeneratedReply(response.data.reply);
//         setIsReplyGenerated(true);
//       } else {
//         setGeneratedReply("Failed to generate a reply. Please try again.");
//         setIsReplyGenerated(false);
//       }
//     } catch (error) {
//       console.error("Error generating reply:", error);
//       setGeneratedReply("An error occurred. Please try again.");
//       setIsReplyGenerated(false);
//     }
//   };

//   const handleCopyToClipboard = () => {
//     navigator.clipboard.writeText(generatedReply);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div className="app">
//       <h1>Email Reply Generator</h1>
//       <div className="form-group">
//         <label htmlFor="emailContent">Original Email Content</label>
//         <textarea
//           id="emailContent"
//           value={emailContent}
//           onChange={(e) => setEmailContent(e.target.value)}
//           placeholder="Enter the email content..."
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="tone">Tone (Optional)</label>
//         <input
//           id="tone"
//           type="text"
//           value={tone}
//           onChange={(e) => setTone(e.target.value)}
//           placeholder="Enter tone (e.g., friendly, formal)..."
//         />
//       </div>

//       <button className="generate-btn" onClick={handleGenerateReply}>
//         GENERATE REPLAY
//       </button>

//       <div className="reply-section">
//         <h2>Generated Reply</h2>
//         <textarea
//           readOnly
//           value={generatedReply}
//           placeholder="Generated reply will appear here..."
//         />
//       </div>

//       {isReplyGenerated && (
//         <button className="copy-btn" onClick={handleCopyToClipboard}>
//           COPY TO CLIPBOARD
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [emailContent, setEmailContent] = useState(""); // Input for email content
//   const [tone, setTone] = useState(""); // Input for tone (optional)
//   const [generatedReply, setGeneratedReply] = useState(""); // Response from backend

//   // The function to send data to the backend
//   async function generateReply() {
//     try {
//       console.log("Sending request to backend...");
//       const response = await axios.post(
//         "http://localhost:8080/api/mail/generate",
//         {
//           emailContent: emailContent,
//           tone: tone,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Response:", response.data);
//       setGeneratedReply(response.data); // Update the generated reply in the UI
//     } catch (error) {
//       console.error("Error generating reply:", error.message);
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Email Reply Generator</h1>

//       <textarea
//         placeholder="Enter the original email content"
//         value={emailContent}
//         onChange={(e) => setEmailContent(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Tone (Optional)"
//         value={tone}
//         onChange={(e) => setTone(e.target.value)}
//       />
//       <button onClick={generateReply}>Generate Reply</button>

//       <h2>Generated Reply</h2>
//       <textarea value={generatedReply} readOnly />

//       <button
//         onClick={() => {
//           navigator.clipboard.writeText(generatedReply);
//         }}
//       >
//         Copy to Clipboard
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [originalVisible, setOriginalVisible] = useState(false);

  async function generateReply() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      console.log("Sending request to backend...");
      console.log("Backend URL:", backendUrl);
      console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);


      const response = await axios.post(`${backendUrl}`,
        {
          emailContent: emailContent,
          tone: tone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //console.log("Response:", response.data);

      // Display the original text once the reply is generated
      setOriginalVisible(true);
      setGeneratedReply(response.data); // Assuming `reply` is the key in the response
    } catch (error) {
      console.error("Error generating reply:", error.message);
    }
  }

  return (
    <div className="container">
      <h1>Email Reply Generator</h1>
      <label htmlFor="original-email">Original Email Content</label>
      <textarea
        id="original-email"
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
        placeholder="Enter the email content..."
      />
      <label htmlFor="tone">Tone (Optional)</label>
      <input
        id="tone"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        placeholder="Enter tone (e.g., friendly, professional)..."
      />
      <button onClick={generateReply} disabled={!emailContent}>
        Generate Reply
      </button>
      <div className="generated-reply-container">
        {generatedReply && (
          <div>
            <h2>Generated Reply</h2>
            <p className="generated-reply">{generatedReply}</p>
          </div>
        )}
        {originalVisible && (
          <div>
            <h2>Original Email</h2>
            <p className="generated-reply">{emailContent}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



