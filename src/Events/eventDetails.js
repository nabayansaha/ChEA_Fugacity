const reverseBrainstorming =  `/images/events/reverseBrainstorming.webp`
const codeProblem =  `/images/events/code.jpg`
const AIML=  `/images/events/ml.jpg`
const chemInnovation=  `/images/events/case.jpg`
const aspen =  `/images/events/aspen.webp`
const chemQuiz=  `/images/events/chemQuiz.webp`
const chemEngage=  `/images/events/chemEngage.webp`
const chemMeme=  `/images/events/meme.jpg`
const photography =  `/images/events/photography.webp`
const quiz=  `/images/events/quiz.webp`
const code=  `/images/events/code.webp`
const ML=  `/images/events/ML.webp`
const caseStudy =  `/images/events/case.webp`
const debate=  `/images/events/debate.webp`
const meme=  `/images/events/meme.webp`
const brainstorming =  `/images/events/brainstorming.webp`
const aspen1=  `/images/events/download.webp`
const paper= `/images/events/paper.jpg`
const theatre= `/images/events/theatre.jpg`
const cross= `/images/events/cross.jpg`


const eventDetails=[
  // {
  //   title:"REVERSE BRAINSTORMING",
  //   description1:`ARE YOU TIRED OF THE SAME OLD BRAINSTORMING TECHNIQUES? WANT TO TRY SOMETHING NEW AND INNOVATIVE?`,
  //   description2:"THEN JOIN US AT FUGACITY FEST FOR OUR REVERSE BRAINSTORMING COMPETITION!,",
  //   description3:"HOSTED BY THE CHEMICAL ENGINEERING ASSOCIATION, THIS COMPETITION CHALLENGES PARTICIPANTS TO THINK OUTSIDE THE BOX BY IDENTIFYING AND REVERSING THE PROBLEMS ASSOCIATED WITH A GIVEN TOPIC. IT'S A GREAT OPPORTUNITY TO SHARPEN YOUR CRITICAL THINKING AND PROBLEM-SOLVING SKILLS.",
  //   description4:"SO GATHER YOUR FRIENDS AND REGISTER FOR THE COMPETITION NOW! WE CAN'T WAIT TO SEE YOUR CREATIVE IDEAS AND INNOVATIVE SOLUTIONS.",
  //   url1:reverseBrainstorming,
  //   url2:brainstorming
  // },
  {
    title:"CODE THE PROBLEM",
    description1:"Join Code the Problem to bridge chemistry and programming, solving real-world challenges with code. Explore molecular modeling, reaction kinetics, and more. Rewrite the future of chemistry with your coding skills!",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    url1:codeProblem,
    url2:code
  },
  {
    title:"APPLICATION OF ML IN CHEMICAL ENGINEERING",
    description1:"Join our ML Hackathon, where chemical and data science intersect! Tackle real-world challenges with machine learning, collaborate, innovate, and revolutionize chemistry with your solutions. Join us for an exhilarating journey at the intersection of chemical and cutting-edge technology!",
    description2: "",
    description3: "",
    description4: "",
    description5: "",    
    url1:AIML,
    url2:ML
  },
  {
    title:"CASE STUDY CHALLENGE",
    description1:"Join our Case Study Challenge, where participants tackle intricate chemical scenarios with analytical precision. Dive into real-world problems like synthesis, reaction optimization, and material design. Use your expertise and problem-solving skills to propose innovative solutions. Join us for a thrilling exploration of chemistry's complexities through practical case studies!",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    url1:chemInnovation,
    url2:caseStudy
  },
  // {
  //   title:"ASPEN PLUS WORKSHOP",
  //   description1:`ATTENTION ALL CHEMICAL ENGINEERS AND PROCESS DESIGNERS!`,
  //   description2:"WE ARE EXCITED TO ANNOUNCE OUR UPCOMING ASPEN PLUS WORKSHOP, WHERE YOU WILL LEARN THE INS AND OUTS OF THIS POWERFUL PROCESS SIMULATION SOFTWARE.",
  //   description3:"WHETHER YOU ARE A BEGINNER OR HAVE PRIOR EXPERIENCE WITH ASPEN PLUS, THIS WORKSHOP IS PERFECT FOR YOU. OUR EXPERT INSTRUCTORS WILL GUIDE YOU THROUGH THE SOFTWARE, SHOWING YOU HOW TO BUILD PROCESS MODELS, SIMULATE VARIOUS SCENARIOS, AND ANALYSE THE RESULTS.",
  //   description4:"JOIN US ON 11TH MARCH AT 2 PM TO EXPAND YOUR KNOWLEDGE AND SKILLS IN PROCESS SIMULATION.LIMITED SPOTS AVAILABLE, SO SIGN UP NOW AT",
  //   description5:"DON'T MISS OUT ON THIS OPPORTUNITY TO ENHANCE YOUR EXPERTISE IN ASPEN PLUS!",
  //   url1:aspen,
  //   url2:aspen1
  // },
  // {
  //   title:"QUIZ",
  //   description1:`ALL CHEMICAL ENGINEERS AND PROCESS DESIGNERS, TAKE NOTE!.`,
  //   description2:"WE ARE PLEASED TO ANNOUNCE OUR FORTHCOMING ASPEN PLUS SESSION, WHERE YOU WILL LEARN MORE ABOUT THIS SOPHISTICATED PROCESS MODELLING SOFTWARE.",
  //   description3:"THIS SESSION IS IDEAL WHETHER YOU ARE A NOVICE OR HAVE PRIOR EXPERIENCE WITH ASPEN PLUS. OUR SKILLED EDUCATORS WILL WALK YOU THROUGH THE PROGRAMME, DEMONSTRATING HOW TO CREATE PROCESS MODELS, SIMULATE DIFFERENT SITUATIONS, AND ANALYSE THE OUTCOMES",
  //   description4:"REGISTER NOW TO DEVELOP YOUR PROCESS SIMULATION KNOWLEDGE AND ABILITIES.",
  //   description5:"THERE ARE JUST A FEW SEATS LEFT, SO JOIN UP TODAY AT DON'T PASS UP THIS CHANCE TO IMPROVE YOUR ASPEN PLUS KNOWLEDGE!",

  //   url1:chemQuiz,
  //   url2:quiz
  // },
  // {
  //   title:"DEBATE",
  //   description1:`ATTENTION ALL CHEMICAL ENGINEERING STUDENTS AND ENTHUSIASTS!`,
  //   description2:"THE CHEMICAL ENGINEERING ASSOCIATION IS EXCITED TO PRESENT THE UPCOMING CHEM ENGAGE (DEBATE) EVENT, AS PART OF THIS YEAR'S FUGACITY FEST",
  //   description3:"JOIN US ON FOR A STIMULATING DEBATE FEATURING SOME OF THE HOTTEST TOPICS AND CURRENT ISSUES IN THE FIELD OF CHEMICAL ENGINEERING. THIS IS YOUR CHANCE TO PARTICIPATE IN A LIVELY DISCUSSION AND SHOWCASE YOUR ANALYTICAL AND PERSUASIVE SKILLS.",
  //   description4:"THE CHEM ENGAGE (DEBATE) EVENT WILL FEATURE A RANGE OF TOPICS RELATED TO CHEMICAL ENGINEERING, INCLUDING SUSTAINABILITY, ENERGY, ENVIRONMENTAL IMPACT, AND MORE. OUR EXPERT PANEL OF JUDGES WILL PROVIDE FEEDBACK AND INSIGHTS, WHILE YOU GET TO ENGAGE IN THOUGHT-PROVOKING CONVERSATIONS WITH YOUR PEERS, LEARN FROM DIVERSE PERSPECTIVES AND OPINIONS, AND DEVELOP YOUR PUBLIC SPEAKING AND CRITICAL THINKING ABILITIES.",
  //   description5:"THIS IS THE PERFECT OPPORTUNITY TO NETWORK WITH INDUSTRY PROFESSIONALS AND CONNECT WITH FELLOW STUDENTS WHO SHARE YOUR PASSION FOR CHEMICAL ENGINEERING. DON'T MISS OUT ON THIS INCREDIBLE OPPORTUNITY TO BROADEN YOUR HORIZONS, EXPAND YOUR KNOWLEDGE, AND HAVE FUN WHILE DOING IT!",
  //   url1:chemEngage,
  //   url2:debate
  // },
  {
    title:"CHEMICAL MEME CHALLENGE",
    description1:"Join our Chem Meme Challenge for a hilarious fusion of science and comedy! Showcase your creativity and wit with science-infused humor. See who can create the ultimate chemistry meme masterpiece!",
    description2:"",
    description3:"",
    description4:"",
    description5:"",
    url1:chemMeme,
    url2:meme
  },
  // {
  //   title:"PHOTOGRAPHY CHALLENGE",
  //   description1:"ARE YOU A PHOTOGRAPHY ENTHUSIAST WITH A PASSION FOR CHEMISTRY? THE CHEMICAL ENGINEERING ASSOCIATION INVITES YOU TO PARTICIPATE IN OUR UPCOMING 'CHEMICAL PHOTOGRAPHY CHALLENGE' AT OUR ANNUAL FEST, FUGACITY.",
  //   description2:"THIS CHALLENGE IS OPEN TO ANYONE WHO ENJOYS CAPTURING THE BEAUTY OF CHEMICAL ELEMENTS AND REACTIONS THROUGH PHOTOGRAPHY. WHETHER YOU'RE A BEGINNER OR AN EXPERIENCED PHOTOGRAPHER, WE WANT YOU TO SHOWCASE YOUR CREATIVITY AND TALENT.",
  //   description3:"JOIN US FOR THE 'CHEMICAL PHOTOGRAPHY CHALLENGE' AND COMPETE AGAINST OTHER TALENTED PHOTOGRAPHERS. YOU'LL HAVE A CHANCE TO CONNECT WITH OTHER PHOTOGRAPHY ENTHUSIASTS AND SHOWCASE YOUR SKILLS TO A PANEL OF JUDGES.",
  //   description4:"THEME:CHEMICAL ENGINEERING",
  //   description5:"SO, MARK YOUR CALENDARS FOR FUGACITY AND GET READY TO PARTICIPATE IN THE 'CHEMICAL PHOTOGRAPHY CHALLENGE'! STAY TUNED FOR MORE INFORMATION ABOUT THE CHALLENGE AND HOW TO REGISTER. LET'S CAPTURE THE BEAUTY OF CHEMISTRY TOGETHER!",
  //   url1:photography,
  //   url2:photography
  // },
  {
    title:"PAPER PRESENTATION",
    description1:"Explore cutting-edge chemistry research at our Paper Presentation Showcase! Engage with researchers unveiling breakthroughs and methodologies shaping the future of the field. Join us for an enlightening journey through the pages of discovery!",
    description2:"",
    description3:"",
    description4:"",
    description5:"",
    url1:paper,
    url2:paper
  },
  {
    title:"CHEM THEATRE",
    description1:"Step into Chem Theatre, where science meets performance art! Craft comedic sketches, poignant poetry, or captivating dramas inspired by chemistry. Let your imagination shine as we celebrate the beauty of chemical through theater. Join us for an unforgettable evening of entertainment and enlightenment!",
    description2:"",
    description3:"",
    description4:"",
    description5:"",
    url1:theatre,
    url2:theatre
  },
  {
    title:"CROSS WORD PUZZLE",
    description1:"Join our Chem Crosswords challenge! Test your chemical knowledge with clues on elements, compounds, reactions, and more. Conquer the grid with us!",
    description2:"",
    description3:"",
    description4:"",
    description5:"",
    url1:cross,
    url2:cross
  },
]
export default eventDetails;