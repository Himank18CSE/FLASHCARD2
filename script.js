// Theme toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Simple sound effects
const sounds = {
    flip: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFBQUFBQUFBQUFBQUFBQUFCkpKSkpKSkpKSkpKSkpKSkpKSkpKT4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+V1dXV1dXV1dXV1dXV1dXV1dXV1dXbGxsbGxsbGxsbGxsbGxsbGxsbGxseXl5eXl5eXl5eXl5eXl5eXl5k5OTk5OTk5OTk5OTk5OTk5OTk5OTqKioqKioqKioqKioqKioqKioqKiowcHBwcHBwcHBwcHBwcHBwcHBwcHB1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq//////////////////////////8AAAA5TEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB4AAAA+gwHhQzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
    success: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFBQUFBQUFBQUFBQUFBQUFCkpKSkpKSkpKSkpKSkpKSkpKSkpKT4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+V1dXV1dXV1dXV1dXV1dXV1dXV1dXbGxsbGxsbGxsbGxsbGxsbGxsbGxseXl5eXl5eXl5eXl5eXl5eXl5k5OTk5OTk5OTk5OTk5OTk5OTk5OTqKioqKioqKioqKioqKioqKioqKiowcHBwcHBwcHBwcHBwcHBwcHBwcHB1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq//////////////////////////8AAAA5TEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB4AAAA+gwHhQnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
    error: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFBQUFBQUFBQUFBQUFBQUFCkpKSkpKSkpKSkpKSkpKSkpKSkpKT4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+V1dXV1dXV1dXV1dXV1dXV1dXV1dXbGxsbGxsbGxsbGxsbGxsbGxsbGxseXl5eXl5eXl5eXl5eXl5eXl5k5OTk5OTk5OTk5OTk5OTk5OTk5OTqKioqKioqKioqKioqKioqKioqKiowcHBwcHBwcHBwcHBwcHBwcHBwcHB1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq//////////////////////////8AAAA5TEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB4AAAA+gwHhQlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
    complete: new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFBQUFBQUFBQUFBQUFBQUFCkpKSkpKSkpKSkpKSkpKSkpKSkpKT4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+V1dXV1dXV1dXV1dXV1dXV1dXV1dXbGxsbGxsbGxsbGxsbGxsbGxsbGxseXl5eXl5eXl5eXl5eXl5eXl5k5OTk5OTk5OTk5OTk5OTk5OTk5OTqKioqKioqKioqKioqKioqKioqKiowcHBwcHBwcHBwcHBwcHBwcHBwcHB1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq//////////////////////////8AAAA5TEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB4AAAA+gwHhQpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
};

// Set sound volume
Object.values(sounds).forEach(audio => {
    audio.volume = 0.2; // Set volume to 20%
});

// Simple sound play function
function playSound(soundName) {
    const sound = sounds[soundName];
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {}); // Ignore errors if sound can't play
    }
}

// Haptic feedback function
function vibrate(duration = 50) {
    if ('vibrate' in navigator) {
        navigator.vibrate(duration);
    }
}

// Add user interaction flag
document.addEventListener('click', function setInteracted() {
    document.body.classList.add('user-interacted');
    document.removeEventListener('click', setInteracted);
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
}

// Toggle theme
themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Question bank organized by categories
const questionBank = {
    mathematics: [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is π (pi) rounded to 2 decimal places?", answer: "3.14" },
        { question: "What is the square root of 100?", answer: "10" },
        { question: "How many degrees are in a circle?", answer: "360" },
        { question: "What is 7 x 8?", answer: "56" },
        { question: "What is 15 + 27?", answer: "42" },
        { question: "What is 12 squared?", answer: "144" },
        { question: "What is 1/2 as a percentage?", answer: "50%" },
        { question: "What is the formula for the area of a circle?", answer: "πr²" },
        { question: "What is the Pythagorean theorem?", answer: "a² + b² = c²" },
        { question: "What is the formula for the area of a triangle?", answer: "½ × base × height" },
        { question: "What is 5 factorial (5!)?", answer: "120" }
    ],
    programming_languages: [
        { question: "What is Python known for?", answer: "Readability and simplicity" },
        { question: "What is JavaScript primarily used for?", answer: "Web development and browser interactions" },
        { question: "What is Java's main advantage?", answer: "Platform independence (Write Once, Run Anywhere)" },
        { question: "What is C++ mainly used for?", answer: "System/software development and game development" },
        { question: "What is Ruby known for?", answer: "Developer happiness and web development with Rails" },
        { question: "What is PHP primarily used for?", answer: "Server-side web development" },
        { question: "What is Rust's main feature?", answer: "Memory safety without garbage collection" },
        { question: "What is TypeScript?", answer: "A typed superset of JavaScript" }
    ],
    cloud_computing: [
        { question: "What is AWS?", answer: "Amazon Web Services - a cloud computing platform" },
        { question: "What is cloud computing?", answer: "Delivering computing services over the internet" },
        { question: "What is IaaS?", answer: "Infrastructure as a Service" },
        { question: "What is PaaS?", answer: "Platform as a Service" },
        { question: "What is SaaS?", answer: "Software as a Service" },
        { question: "What is serverless computing?", answer: "Running code without managing servers" },
        { question: "What is Docker?", answer: "A platform for developing and running containers" },
        { question: "What is Kubernetes?", answer: "A container orchestration platform" }
    ],
    artificial_intelligence: [
        { question: "What is machine learning?", answer: "Systems that learn and improve from experience" },
        { question: "What is deep learning?", answer: "Machine learning using neural networks with multiple layers" },
        { question: "What is natural language processing?", answer: "AI technology for understanding human language" },
        { question: "What is computer vision?", answer: "AI technology for understanding visual information" },
        { question: "What is reinforcement learning?", answer: "Learning through trial and error with rewards" },
        { question: "What is supervised learning?", answer: "Learning from labeled training data" },
        { question: "What is unsupervised learning?", answer: "Finding patterns in unlabeled data" },
        { question: "What is a neural network?", answer: "A computing system inspired by biological brains" }
    ],
    mobile_development: [
        { question: "What is Android?", answer: "Google's mobile operating system" },
        { question: "What is iOS?", answer: "Apple's mobile operating system" },
        { question: "What is React Native?", answer: "A framework for building native apps using React" },
        { question: "What is Flutter?", answer: "Google's UI toolkit for building native apps" },
        { question: "What is Swift?", answer: "Apple's programming language for iOS development" },
        { question: "What is Kotlin?", answer: "A modern programming language for Android development" },
        { question: "What is a mobile SDK?", answer: "Software Development Kit for mobile applications" },
        { question: "What is responsive design?", answer: "Design that adapts to different screen sizes" }
    ],
    design_patterns: [
        { question: "What is a Singleton pattern?", answer: "A pattern that ensures a class has only one instance" },
        { question: "What is the Observer pattern?", answer: "A pattern where objects notify other objects of changes" },
        { question: "What is the Factory pattern?", answer: "A pattern for creating objects without specifying exact class" },
        { question: "What is MVC?", answer: "Model-View-Controller architecture pattern" },
        { question: "What is SOLID?", answer: "Five principles of object-oriented design" },
        { question: "What is dependency injection?", answer: "Providing dependencies to a class instead of creating them" },
        { question: "What is the Strategy pattern?", answer: "A pattern that enables selecting algorithms at runtime" },
        { question: "What is the Decorator pattern?", answer: "A pattern for adding behavior to objects dynamically" }
    ],
    project_management: [
        { question: "What is a sprint?", answer: "A fixed time period for completing a set of tasks" },
        { question: "What is a user story?", answer: "A description of a feature from the user's perspective" },
        { question: "What is a Kanban board?", answer: "A visual tool for managing work in progress" },
        { question: "What is a retrospective?", answer: "A meeting to review and improve team processes" },
        { question: "What is scope creep?", answer: "Uncontrolled growth in project scope" },
        { question: "What is a milestone?", answer: "A significant point in project development" },
        { question: "What is a burndown chart?", answer: "A graph showing work left versus time" },
        { question: "What is stakeholder management?", answer: "Managing relationships with project stakeholders" }
    ],
    networking: [
        { question: "What is TCP/IP?", answer: "Core protocols of the internet" },
        { question: "What is DNS?", answer: "Domain Name System - converts domain names to IP addresses" },
        { question: "What is HTTP?", answer: "Protocol for transferring data on the web" },
        { question: "What is a router?", answer: "Device that forwards data between networks" },
        { question: "What is a subnet?", answer: "A logical subdivision of an IP network" },
        { question: "What is a port?", answer: "An endpoint for communication in an operating system" },
        { question: "What is SSL/TLS?", answer: "Protocols for secure communication over networks" },
        { question: "What is a proxy server?", answer: "An intermediary server between users and the internet" }
    ],
    programming_basics: [
        { question: "What is a variable?", answer: "A container for storing data values" },
        { question: "What is a function?", answer: "A reusable block of code that performs a specific task" },
        { question: "What is an array?", answer: "An ordered collection of values" },
        { question: "What is a loop?", answer: "A control structure for repeated execution of code" },
        { question: "What is a conditional statement?", answer: "A control structure that executes code based on a condition" },
        { question: "What is debugging?", answer: "The process of finding and fixing errors in code" },
        { question: "What is an algorithm?", answer: "A step-by-step procedure for solving a problem" },
        { question: "What is syntax?", answer: "The rules for writing code in a programming language" }
    ],
    web_development: [
        { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
        { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
        { question: "What is JavaScript?", answer: "A programming language for making web pages interactive" },
        { question: "What is a DOM?", answer: "Document Object Model - the programming interface for HTML/XML documents" },
        { question: "What is an API?", answer: "Application Programming Interface - a set of rules for software communication" },
        { question: "What is responsive design?", answer: "Design that adapts to different screen sizes" },
        { question: "What is a cookie?", answer: "A small piece of data stored on the user's computer by websites" },
        { question: "What is HTTPS?", answer: "A secure version of HTTP for encrypted data transmission" },
        { question: "What is React?", answer: "A JavaScript library for building user interfaces" },
        { question: "What is Node.js?", answer: "A JavaScript runtime for server-side development" },
        { question: "What is webpack?", answer: "A module bundler for JavaScript applications" },
        { question: "What is REST?", answer: "An architectural style for web services" }
    ],
    data_structures: [
        { question: "What is a stack?", answer: "A Last-In-First-Out (LIFO) data structure" },
        { question: "What is a queue?", answer: "A First-In-First-Out (FIFO) data structure" },
        { question: "What is a linked list?", answer: "A sequence of elements where each element points to the next" },
        { question: "What is a tree?", answer: "A hierarchical data structure with nodes and edges" },
        { question: "What is a hash table?", answer: "A data structure that maps keys to values using a hash function" },
        { question: "What is a graph?", answer: "A collection of nodes connected by edges" },
        { question: "What is a binary search tree?", answer: "A tree where each node has at most two children" },
        { question: "What is recursion?", answer: "A function that calls itself to solve smaller instances of a problem" }
    ],
    software_engineering: [
        { question: "What is version control?", answer: "A system for tracking changes to code over time" },
        { question: "What is Git?", answer: "A distributed version control system" },
        { question: "What is agile development?", answer: "An iterative approach to software development" },
        { question: "What is unit testing?", answer: "Testing individual components of software in isolation" },
        { question: "What is continuous integration?", answer: "Automatically building and testing code changes" },
        { question: "What is refactoring?", answer: "Restructuring code without changing its behavior" },
        { question: "What is technical debt?", answer: "The cost of choosing an easy solution over a better approach" },
        { question: "What is code review?", answer: "Examining code written by others for quality and correctness" }
    ],
    databases: [
        { question: "What is SQL?", answer: "Structured Query Language - for managing relational databases" },
        { question: "What is a primary key?", answer: "A unique identifier for a record in a database" },
        { question: "What is normalization?", answer: "Organizing database tables to reduce redundancy" },
        { question: "What is CRUD?", answer: "Create, Read, Update, Delete - basic database operations" },
        { question: "What is NoSQL?", answer: "A non-relational database system" },
        { question: "What is indexing?", answer: "A data structure to improve database query performance" },
        { question: "What is a transaction?", answer: "A sequence of database operations treated as one unit" },
        { question: "What is a join?", answer: "Combining rows from two or more tables based on a related column" }
    ],
    cybersecurity: [
        { question: "What is encryption?", answer: "Converting data into a code to prevent unauthorized access" },
        { question: "What is a firewall?", answer: "A security system that monitors and controls network traffic" },
        { question: "What is authentication?", answer: "Verifying the identity of a user or system" },
        { question: "What is a vulnerability?", answer: "A weakness that can be exploited by attackers" },
        { question: "What is phishing?", answer: "Attempting to obtain sensitive information by posing as a trustworthy entity" },
        { question: "What is malware?", answer: "Malicious software designed to harm computer systems" },
        { question: "What is two-factor authentication?", answer: "Using two different methods to verify identity" },
        { question: "What is a DDoS attack?", answer: "Overwhelming a system with traffic to make it unavailable" }
    ],
    science: [
        { question: "What planet is known as the Red Planet?", answer: "Mars" },
        { question: "What is the chemical symbol for gold?", answer: "Au" },
        { question: "What is the hardest natural substance?", answer: "Diamond" },
        { question: "What is the closest star to Earth?", answer: "The Sun" },
        { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
        { question: "What is the chemical formula for water?", answer: "H2O" },
        { question: "What is the largest organ in the human body?", answer: "Skin" },
        { question: "What force keeps planets in orbit?", answer: "Gravity" }
    ],
    geography: [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the largest country by land mass?", answer: "Russia" },
        { question: "Which continent is Egypt in?", answer: "Africa" },
        { question: "What is the capital of Japan?", answer: "Tokyo" },
        { question: "What is the longest river in the world?", answer: "Nile" },
        { question: "What is the largest ocean?", answer: "Pacific Ocean" },
        { question: "What country is known as the Land of the Rising Sun?", answer: "Japan" },
        { question: "Which continent is the driest?", answer: "Antarctica" }
    ],
    history: [
        { question: "Who was the first President of the United States?", answer: "George Washington" },
        { question: "In which year did World War II end?", answer: "1945" },
        { question: "Who wrote the Declaration of Independence?", answer: "Thomas Jefferson" },
        { question: "What ancient wonder was located in Alexandria?", answer: "The Lighthouse of Alexandria" },
        { question: "Who was the first Emperor of China?", answer: "Qin Shi Huang" },
        { question: "When did the Berlin Wall fall?", answer: "1989" },
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
        { question: "What year did Columbus reach America?", answer: "1492" }
    ],
    technology: [
        { question: "Who co-founded Apple Computer with Steve Jobs?", answer: "Steve Wozniak" },
        { question: "What does CPU stand for?", answer: "Central Processing Unit" },
        { question: "What programming language is named after a snake?", answer: "Python" },
        { question: "What does WiFi stand for?", answer: "Wireless Fidelity" },
        { question: "What is the most popular operating system?", answer: "Windows" },
        { question: "Who invented the World Wide Web?", answer: "Tim Berners-Lee" },
        { question: "What does USB stand for?", answer: "Universal Serial Bus" }
    ]
};

// Function to get random items from an array
function getRandomItems(array, count) {
    const shuffled = array.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to generate new flashcards for a session
function generateNewFlashcards() {
    const cardsPerCategory = 2; // Number of cards to select from each category
    let newFlashcards = [];
    
    // Get random questions from each category
    for (const category in questionBank) {
        const categoryQuestions = getRandomItems(questionBank[category], cardsPerCategory);
        newFlashcards = newFlashcards.concat(categoryQuestions);
    }
    
    // Shuffle the final array
    return newFlashcards.sort(() => 0.5 - Math.random());
}

// Initialize flashcards
let flashcards = generateNewFlashcards();

// Progress circle setup
const circle = document.querySelector('.progress-ring-circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const progressPercentage = document.getElementById('progress-percentage');
const cardsKnownElement = document.getElementById('cards-known');
const totalCardsElement = document.getElementById('total-cards');

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
    progressPercentage.textContent = `${Math.round(percent)}%`;
    
    // Add animation class
    circle.classList.add('updated');
    setTimeout(() => circle.classList.remove('updated'), 500);
}

// State variables
let currentCardIndex = -1;
let knownCount = 0;
let learningCount = 0;

// Update total cards count
totalCardsElement.textContent = flashcards.length;

// DOM elements
const card = document.querySelector('.card');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const flipBtn = document.getElementById('flip-btn');
const knowBtn = document.getElementById('know-btn');
const dontKnowBtn = document.getElementById('dont-know-btn');
const nextBtn = document.getElementById('next-btn');
const knownCountElement = document.getElementById('known-count');
const learningCountElement = document.getElementById('learning-count');

// Initially hide next button
nextBtn.style.display = 'none';

// Event listeners
flipBtn.addEventListener('click', () => {
    playSound('flip');
    flipCard();
    // After flipping, show Know/Don't Know buttons and hide flip button
    knowBtn.style.display = 'inline-block';
    dontKnowBtn.style.display = 'inline-block';
    flipBtn.style.display = 'none';
});

knowBtn.addEventListener('click', () => {
    playSound('success');
    markAsKnown();
    // Show next button, hide know/don't know buttons
    nextBtn.style.display = 'inline-block';
    knowBtn.style.display = 'none';
    dontKnowBtn.style.display = 'none';
});

dontKnowBtn.addEventListener('click', () => {
    playSound('error');
    markAsLearning();
    // Show next button, hide know/don't know buttons
    nextBtn.style.display = 'inline-block';
    knowBtn.style.display = 'none';
    dontKnowBtn.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
    playSound('flip');
    nextCard();
});

// Add click handler for card
card.addEventListener('click', () => {
    if (!card.classList.contains('flipped')) {
        playSound('flip');
        flipCard();
        // After flipping, show Know/Don't Know buttons and hide flip button
        knowBtn.style.display = 'inline-block';
        dontKnowBtn.style.display = 'inline-block';
        flipBtn.style.display = 'none';
    }
});

// Functions
function flipCard() {
    card.classList.toggle('flipped');
}

function updateProgress() {
    const progress = (knownCount / flashcards.length) * 100;
    setProgress(progress);
    cardsKnownElement.textContent = knownCount;
}

function markAsKnown() {
    if (currentCardIndex >= 0) {
        knownCount++;
        knownCountElement.textContent = knownCount;
        updateProgress();
        
        // Increment streak and calculate XP
        currentStreak++;
        let xpAmount = xpSystem.baseXP + xpSystem.bonusXP;
        
        // Apply streak multiplier if applicable
        for (const [streak, multiplier] of Object.entries(xpSystem.streakMultiplier)) {
            if (currentStreak >= parseInt(streak)) {
                xpAmount *= multiplier;
                break;
            }
        }
        
        // Add XP with streak bonus
        addXP(Math.floor(xpAmount));
        playSound('success');
    }
}

function markAsLearning() {
    if (currentCardIndex >= 0) {
        learningCount++;
        learningCountElement.textContent = learningCount;
        
        // Reset streak and add base XP
        currentStreak = 0;
        addXP(xpSystem.baseXP);
        playSound('error');
    }
}

// Update nextCard function
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    
    // Check if we've completed 10 questions
    const totalAnswered = knownCount + learningCount;
    if (totalAnswered >= 10) {
        showCompletionQuote();
        // Reset counters
        knownCount = 0;
        learningCount = 0;
        knownCountElement.textContent = '0';
        learningCountElement.textContent = '0';
        updateProgress();
        // Generate new flashcards for next session
        flashcards = generateNewFlashcards();
        totalCardsElement.textContent = flashcards.length;
        currentCardIndex = 0;
    }
    // Check if we've completed all cards in current deck
    else if (currentCardIndex === 0 && totalAnswered > 0) {
        showCompletionQuote();
    }
    
    // Reset card state
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    }
    
    // Reset button visibility
    flipBtn.style.display = 'inline-block';
    knowBtn.style.display = 'none';
    dontKnowBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    
    updateCard();
}

function updateCard() {
    const currentCard = flashcards[currentCardIndex];
    questionText.textContent = currentCard.question;
    answerText.textContent = currentCard.answer;
}

// XP and Level System
const xpSystem = {
    baseXP: 10, // Base XP for answering a card
    bonusXP: 5,  // Bonus XP for knowing the answer
    currentXP: 0,
    currentLevel: 1,
    xpToNextLevel: 100,
    
    // XP multiplier based on streak
    streakMultiplier: {
        5: 1.5,  // 5 correct in a row: 1.5x XP
        10: 2,   // 10 correct in a row: 2x XP
        15: 2.5  // 15 correct in a row: 2.5x XP
    }
};

// Theme system
const themes = {
    default: {
        name: "Default",
        primary: "#6366f1",
        background: "linear-gradient(-45deg, #fdf2f8, #ede9fe, #e0f2fe, #f0fdf4)",
        unlockLevel: 1
    },
    ocean: {
        name: "Ocean Breeze",
        primary: "#0ea5e9",
        background: "linear-gradient(-45deg, #0ea5e9, #2563eb, #1d4ed8, #1e40af)",
        unlockLevel: 2
    },
    sunset: {
        name: "Sunset Vibes",
        primary: "#f97316",
        background: "linear-gradient(-45deg, #f97316, #db2777, #7c3aed, #2563eb)",
        unlockLevel: 3
    },
    forest: {
        name: "Forest Dream",
        primary: "#22c55e",
        background: "linear-gradient(-45deg, #22c55e, #15803d, #047857, #064e3b)",
        unlockLevel: 4
    },
    cosmic: {
        name: "Cosmic Night",
        primary: "#7c3aed",
        background: "linear-gradient(-45deg, #7c3aed, #4c1d95, #1e1b4b, #0f172a)",
        unlockLevel: 5
    }
};

// DOM elements for XP system
const currentLevelElement = document.getElementById('current-level');
const currentXPElement = document.getElementById('current-xp');
const xpToLevelElement = document.getElementById('xp-to-level');
const xpProgressBar = document.getElementById('xp-progress');
const rewardsPanel = document.getElementById('rewards-panel');
const newLevelElement = document.getElementById('new-level');
const levelUpTextElement = document.getElementById('level-up-text');
const claimRewardBtn = document.getElementById('claim-reward-btn');
const themeSelectorBtn = document.getElementById('theme-selector-btn');
const themeMenu = document.getElementById('theme-menu');
const themeList = document.querySelector('.theme-list');

let currentStreak = 0;

// Initialize XP display
function updateXPDisplay() {
    currentLevelElement.textContent = xpSystem.currentLevel;
    currentXPElement.textContent = xpSystem.currentXP;
    xpToLevelElement.textContent = xpSystem.xpToNextLevel;
    const progress = (xpSystem.currentXP / xpSystem.xpToNextLevel) * 100;
    xpProgressBar.style.width = `${progress}%`;
}

// Add XP and check for level up
function addXP(amount) {
    xpSystem.currentXP += amount;
    
    // Check for level up
    if (xpSystem.currentXP >= xpSystem.xpToNextLevel) {
        levelUp();
    }
    
    updateXPDisplay();
    localStorage.setItem('flashcardXP', JSON.stringify(xpSystem));
}

// Level up function
function levelUp() {
    xpSystem.currentLevel++;
    xpSystem.currentXP = xpSystem.currentXP - xpSystem.xpToNextLevel;
    xpSystem.xpToNextLevel = Math.floor(xpSystem.xpToNextLevel * 1.5);
    
    // Show level up rewards
    showLevelUpRewards();
    
    // Update theme menu
    updateThemeMenu();
}

// Show level up rewards
function showLevelUpRewards() {
    newLevelElement.textContent = xpSystem.currentLevel;
    levelUpTextElement.textContent = xpSystem.currentLevel;
    
    // Check for theme unlock
    const unlockedTheme = Object.values(themes).find(theme => theme.unlockLevel === xpSystem.currentLevel);
    if (unlockedTheme) {
        document.querySelector('.reward-name').textContent = `New Theme: ${unlockedTheme.name}`;
    }
    
    rewardsPanel.classList.remove('hidden');
    playSound('success');
}

// Theme management
function updateThemeMenu() {
    themeList.innerHTML = '';
    Object.entries(themes).forEach(([id, theme]) => {
        const isUnlocked = xpSystem.currentLevel >= theme.unlockLevel;
        const themeOption = document.createElement('div');
        themeOption.className = `theme-option ${isUnlocked ? '' : 'locked'}`;
        themeOption.innerHTML = `
            <div class="theme-color-preview" style="background: ${theme.primary}"></div>
            <span>${theme.name}</span>
            ${isUnlocked ? '' : `<span>(Unlock at level ${theme.unlockLevel})</span>`}
        `;
        
        if (isUnlocked) {
            themeOption.addEventListener('click', () => applyTheme(id));
        }
        
        themeList.appendChild(themeOption);
    });
}

function applyTheme(themeId) {
    const theme = themes[themeId];
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.body.style.background = theme.background;
    localStorage.setItem('selectedTheme', themeId);
    themeMenu.classList.add('hidden');
}

// Event listeners for theme system
themeSelectorBtn.addEventListener('click', () => {
    themeMenu.classList.toggle('hidden');
});

claimRewardBtn.addEventListener('click', () => {
    rewardsPanel.classList.add('hidden');
});

// Load saved XP and theme
function loadSavedProgress() {
    const savedXP = localStorage.getItem('flashcardXP');
    if (savedXP) {
        Object.assign(xpSystem, JSON.parse(savedXP));
        updateXPDisplay();
    }
    
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
        applyTheme(savedTheme);
    }
    
    updateThemeMenu();
}

// Initialize the XP system
loadSavedProgress();

// Motivational quotes
const quotes = [
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        author: "Dr. Seuss"
    },
    {
        text: "Learning is not attained by chance, it must be sought for with ardor and diligence.",
        author: "Abigail Adams"
    },
    {
        text: "The beautiful thing about learning is that no one can take it away from you.",
        author: "B.B. King"
    },
    {
        text: "Education is not preparation for life; education is life itself.",
        author: "John Dewey"
    },
    {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        text: "The more I learn, the more I realize how much I don't know.",
        author: "Albert Einstein"
    },
    {
        text: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
        author: "Richard Feynman"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    }
];

// DOM elements for quotes
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const restartBtn = document.getElementById('restart-btn');

// Get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Show completion quote
function showCompletionQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `— ${quote.author}`;
    quoteContainer.classList.remove('hidden');
    
    // Play completion sound and add vibration
    playSound('complete');
    vibrate(200);
}

// Reset session
function resetSession() {
    // Generate new flashcards
    flashcards = generateNewFlashcards();
    
    // Reset counters
    knownCount = 0;
    learningCount = 0;
    currentCardIndex = -1;
    currentStreak = 0;
    knownCountElement.textContent = '0';
    learningCountElement.textContent = '0';
    quoteContainer.classList.add('hidden');
    
    // Update total cards count
    totalCardsElement.textContent = flashcards.length;
    
    // Reset progress and start new session
    updateProgress();
    nextCard();
    
    // Play flip sound
    playSound('flip');
}

// Add event listener for restart button
restartBtn.addEventListener('click', resetSession);

// Initialize with first card
nextCard();
updateProgress();

// Minigames System
const minigames = {
    memory: {
        name: 'Memory Match',
        description: 'Match questions with their answers!',
        minCards: 6
    },
    quiz: {
        name: 'Quick Quiz',
        description: 'Test your knowledge with multiple choice questions!',
        minCards: 4
    }
};

// Create minigames menu HTML
const minigamesHTML = `
    <div class="minigames-menu hidden">
        <h2>Mini Games</h2>
        <div class="minigames-grid">
            <div class="minigame-card" data-game="memory">
                <h3>Memory Match</h3>
                <p>Match questions with their answers!</p>
                <button class="btn play-btn">Play</button>
            </div>
            <div class="minigame-card" data-game="quiz">
                <h3>Quick Quiz</h3>
                <p>Test your knowledge!</p>
                <button class="btn play-btn">Play</button>
            </div>
        </div>
    </div>
    <button id="toggle-minigames" class="btn">
        <span>🎮 Games</span>
    </button>
`;

// Insert minigames menu into the document
document.querySelector('.container').insertAdjacentHTML('beforeend', minigamesHTML);

// Minigames elements
const minigamesMenu = document.querySelector('.minigames-menu');
const toggleMinigamesBtn = document.getElementById('toggle-minigames');
const playButtons = document.querySelectorAll('.play-btn');

// Toggle minigames menu
toggleMinigamesBtn.addEventListener('click', () => {
    minigamesMenu.classList.toggle('hidden');
});

// Memory Match Game
function startMemoryGame() {
    const gameCards = [];
    const usedCards = getRandomItems(flashcards, 6);
    
    usedCards.forEach(card => {
        gameCards.push(
            { content: card.question, type: 'question', matched: false, id: Math.random() },
            { content: card.answer, type: 'answer', matched: false, id: Math.random() }
        );
    });
    
    const shuffledCards = gameCards.sort(() => 0.5 - Math.random());
    
    const gameHTML = `
        <div class="memory-game">
            <div class="game-header">
                <h2>Memory Match</h2>
                <div class="game-stats">
                    <span>Matches: <span id="matches">0</span>/${usedCards.length}</span>
                    <span>Moves: <span id="moves">0</span></span>
                </div>
            </div>
            <div class="memory-grid">
                ${shuffledCards.map((card, index) => `
                    <div class="memory-card" data-index="${index}">
                        <div class="card-inner">
                            <div class="card-front">?</div>
                            <div class="card-back">${card.content}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn" id="exit-game">Exit Game</button>
        </div>
    `;
    
    // Hide main container and show game
    document.querySelector('.container').style.display = 'none';
    document.body.insertAdjacentHTML('beforeend', gameHTML);
    
    let flippedCards = [];
    let moves = 0;
    let matches = 0;
    const matchesElement = document.getElementById('matches');
    const movesElement = document.getElementById('moves');
    
    // Add event listeners to cards
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', () => {
            if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
                card.classList.add('flipped');
                flippedCards.push({
                    element: card,
                    index: parseInt(card.dataset.index)
                });
                
                if (flippedCards.length === 2) {
                    moves++;
                    movesElement.textContent = moves;
                    
                    const [card1, card2] = flippedCards;
                    const card1Data = shuffledCards[card1.index];
                    const card2Data = shuffledCards[card2.index];
                    
                    if ((card1Data.type === 'question' && card2Data.type === 'answer' ||
                         card1Data.type === 'answer' && card2Data.type === 'question') &&
                        usedCards.some(c => 
                            (c.question === card1Data.content && c.answer === card2Data.content) ||
                            (c.answer === card1Data.content && c.question === card2Data.content)
                        )) {
                        // Match found
                        matches++;
                        matchesElement.textContent = matches;
                        flippedCards.forEach(c => c.element.classList.add('matched'));
                        flippedCards = [];
                        playSound('success');
                        
                        if (matches === usedCards.length) {
                            setTimeout(() => {
                                alert('Congratulations! You won!');
                                exitGame();
                            }, 500);
                        }
                    } else {
                        // No match
                        playSound('error');
                        setTimeout(() => {
                            flippedCards.forEach(c => c.element.classList.remove('flipped'));
                            flippedCards = [];
                        }, 1000);
                    }
                }
            }
        });
    });
    
    // Exit game handler
    document.getElementById('exit-game').addEventListener('click', exitGame);
}

// Quick Quiz Game
function startQuizGame() {
    const quizCards = getRandomItems(flashcards, 5);
    let currentQuestion = 0;
    let score = 0;
    
    function generateOptions(correct) {
        const options = [correct];
        const otherAnswers = flashcards
            .filter(card => card.answer !== correct)
            .map(card => card.answer);
        
        while (options.length < 4 && otherAnswers.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherAnswers.length);
            options.push(otherAnswers.splice(randomIndex, 1)[0]);
        }
        
        return options.sort(() => 0.5 - Math.random());
    }
    
    function showQuestion() {
        const card = quizCards[currentQuestion];
        const options = generateOptions(card.answer);
        
        const quizHTML = `
            <div class="quiz-game">
                <div class="game-header">
                    <h2>Quick Quiz</h2>
                    <div class="game-stats">
                        <span>Question ${currentQuestion + 1}/${quizCards.length}</span>
                        <span>Score: ${score}</span>
                    </div>
                </div>
                <div class="quiz-content">
                    <h3 class="quiz-question">${card.question}</h3>
                    <div class="quiz-options">
                        ${options.map((option, index) => `
                            <button class="btn quiz-option" data-correct="${option === card.answer}">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <button class="btn" id="exit-game">Exit Game</button>
            </div>
        `;
        
        if (currentQuestion === 0) {
            document.querySelector('.container').style.display = 'none';
            document.body.insertAdjacentHTML('beforeend', quizHTML);
        } else {
            document.querySelector('.quiz-game').outerHTML = quizHTML;
        }
        
        // Add event listeners
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', handleAnswer);
        });
        
        document.getElementById('exit-game').addEventListener('click', exitGame);
    }
    
    function handleAnswer(e) {
        const isCorrect = e.target.dataset.correct === 'true';
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach(option => {
            option.disabled = true;
            if (option.dataset.correct === 'true') {
                option.classList.add('correct');
            }
        });
        
        if (isCorrect) {
            score++;
            playSound('success');
            e.target.classList.add('correct');
        } else {
            playSound('error');
            e.target.classList.add('wrong');
        }
        
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizCards.length) {
                showQuestion();
            } else {
                alert(`Game Over! Your score: ${score}/${quizCards.length}`);
                exitGame();
            }
        }, 1000);
    }
    
    showQuestion();
}

// Exit game function
function exitGame() {
    const gameElement = document.querySelector('.memory-game') || document.querySelector('.quiz-game');
    if (gameElement) {
        gameElement.remove();
        document.querySelector('.container').style.display = 'block';
    }
}

// Event listeners for game buttons
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const gameType = button.closest('.minigame-card').dataset.game;
        minigamesMenu.classList.add('hidden');
        
        if (gameType === 'memory') {
            startMemoryGame();
        } else if (gameType === 'quiz') {
            startQuizGame();
        }
    });
}); 
