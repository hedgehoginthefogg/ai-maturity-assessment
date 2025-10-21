# AI Maturity Assessment

An interactive tool to assess your organization's AI maturity across seven critical dimensions.

## Project Structure

```
ai-maturity-assessment/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   └── AIMaturityAssessment.js
├── .gitignore
├── netlify.toml
├── package.json
└── README.md
```

## Setup Instructions

### 1. Create the project folder and files

```bash
mkdir ai-maturity-assessment
cd ai-maturity-assessment
```

Copy all the files from the artifacts into the appropriate locations as shown in the project structure above.

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

The app will open at `http://localhost:3000`

## Deploying to Netlify

### Option A: Via Netlify Dashboard (Easiest)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [netlify.com](https://www.netlify.com/) and sign in

3. Click "Add new site" → "Import an existing project"

4. Choose GitHub and select your repository

5. Netlify will auto-detect the build settings from `netlify.toml`

6. Click "Deploy site"

### Option B: Via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

Follow the prompts to authenticate and select your team.

### Option C: Drag and Drop

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `build` folder onto the page

## Features

- 7 dimensions of AI maturity assessment
- Interactive step-by-step questionnaire
- Visual results with radar and bar charts
- Responsive design
- Progress tracking
- Detailed results breakdown

## Technologies Used

- React 18
- Recharts (for data visualization)
- Tailwind CSS (via CDN)
- Create React App

## License

Based on the research by Hansen, H.F., Lillesund, E., Mikalef, P. et al. 
Understanding Artificial Intelligence Diffusion through an AI Capability Maturity Model. 
*Inf Syst Front* 26, 2147–2163 (2024).
https://doi.org/10.1007/s10796-024-10528-4