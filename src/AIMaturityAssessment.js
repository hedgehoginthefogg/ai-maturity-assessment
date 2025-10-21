import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const dimensions = [
  {
    name: 'Data',
    category: 'Technological',
    levels: [
      { level: 0, label: 'Inactive', description: 'NA' },
      { level: 1, label: 'Explorative', description: 'Started data collections and limited understand of requirements and "right data". Siloed data' },
      { level: 2, label: 'Ad-hoc', description: 'Assemble usable and accessible data. Starting to break down data silos and creating collective data spaces' },
      { level: 4, label: 'Embedded', description: 'Up-to-date, usable data. Majority of data connected to data platform' },
      { level: 5, label: 'Transformational', description: 'Highly automated and reliable. Multifaceted use of data' }
    ]
  },
  {
    name: 'Infrastructure',
    category: 'Technological',
    levels: [
      { level: 0, label: 'Inactive', description: 'AI journey not started yet' },
      { level: 1, label: 'Explorative', description: 'Fragmented system infrastructure. Cloud journey initiated with high use of legacy systems' },
      { level: 2, label: 'Ad-hoc', description: 'Manual ML training. Cloud solutions utilised but few AI or ML solutions' },
      { level: 3, label: 'Formalised', description: 'Modern and centralised infrastructure. Standardised AI deployment reusing some models in parts of the organisation' },
      { level: 4, label: 'Embedded', description: 'Centralising monitoring and auditing. Explore personalised or tailored AI solutions' },
      { level: 5, label: 'Transformational', description: 'Push towards AI to manage tech infrastructure. Explore complex problem solving through AI innovation' }
    ]
  },
  {
    name: 'Strategy',
    category: 'Organisational',
    levels: [
      { level: 0, label: 'Inactive', description: 'AI journey not started yet' },
      { level: 1, label: 'Explorative', description: 'No C-suite support or understanding of AI. No real AI strategy and lack of business cases and enthusiastic leadership' },
      { level: 2, label: 'Ad-hoc', description: 'Some C-suite support, enough knowledge. Limited financial support for initiatives' },
      { level: 3, label: 'Formalised', description: 'C-suite and budget support. Clear accountability and documented AI strategy. Shared understanding with clear use cases' },
      { level: 4, label: 'Embedded', description: 'CTO/CIO management. Strategy aligned with business strategy and clear KPIs' },
      { level: 5, label: 'Transformational', description: 'Chief AI officer present. AI is seamlessly embedded in strategy. Discover and act on innovation' }
    ]
  },
  {
    name: 'People',
    category: 'Organisational',
    levels: [
      { level: 0, label: 'Inactive', description: 'AI journey not started yet' },
      { level: 1, label: 'Explorative', description: 'Large contrast between business and tech side. Visible skepticism among employees about AI. Little focus on AI skills and lacking knowledge sharing among groups' },
      { level: 2, label: 'Ad-hoc', description: 'Need for specialised expertise. Recruitment of data science employees. Organised learning around AI and traces of skepticism' },
      { level: 3, label: 'Formalised', description: 'Data science helps business through knowledge spreading. Minimal resistance towards AI change' },
      { level: 4, label: 'Embedded', description: 'New talents help other employees to adapt. New roles like ML engineers. Shared ownership across organisation' },
      { level: 5, label: 'Transformational', description: 'High degree of AI literature. Drive towards AI career paths. Development of interdisciplinary roles' }
    ]
  },
  {
    name: 'Culture',
    category: 'Organisational',
    levels: [
      { level: 0, label: 'Inactive', description: 'AI journey not started yet' },
      { level: 1, label: 'Explorative', description: 'Starting to develop AI literacy. Limited communication across the organisation and siloed work practices' },
      { level: 2, label: 'Ad-hoc', description: 'Cross-functional activities around AI. Active identification of learning paths' },
      { level: 3, label: 'Formalised', description: 'Center of excellence to provide resources. Learning organisation and culture of change' },
      { level: 4, label: 'Embedded', description: 'Cross-organisational cooperation through strategy. Formalised center of excellence. Clear communication and processes at all stages' },
      { level: 5, label: 'Transformational', description: 'Ingrained – most roles with some sort of paths. Development of interdisciplinary roles' }
    ]
  },
  {
    name: 'Ethics and regulations',
    category: 'External',
    levels: [
      { level: 0, label: 'Inactive', description: 'AI journey not started yet' },
      { level: 1, label: 'Explorative', description: 'Thinking about responsible AI. Follows GDPR and other relevant regulations. Motivation for considering ethics is reactive' },
      { level: 2, label: 'Ad-hoc', description: 'Full understanding of current ethics and regulations. Clear responsibilities around responsible AI use. Follows large vendors and consultants for governance approaches' },
      { level: 3, label: 'Formalised', description: 'Centralised and formalised reporting. Strive for full transparency. Proactive towards regulations' },
      { level: 4, label: 'Embedded', description: 'Ethics board present. Standard guidance for responsible AI practices. Formalised sustainability reporting and use of AI to be more sustainable' },
      { level: 5, label: 'Transformational', description: 'Development beyond current solutions to revolutionise how to think about tasks. Helps shape industrial standards together with regulators' }
    ]
  },
  {
    name: 'Pressures and motivation',
    category: 'External',
    levels: [
      { level: 0, label: 'Inactive', description: 'AI journey not started yet' },
      { level: 1, label: 'Explorative', description: 'Follows competitors and hype. Externally motivated and highly reactive. Technologically lagging behind industry' },
      { level: 2, label: 'Ad-hoc', description: 'Considering AI purely for economic reasons, cost-cutting and improving efficiency. Outward looking for opportunities' },
      { level: 3, label: 'Formalised', description: 'Motivation towards creating opportunities internally. Becoming increasingly proactive' },
      { level: 4, label: 'Embedded', description: 'Digital-first approach and considered an industry leader. Find motivation through improving organisational processes' },
      { level: 5, label: 'Transformational', description: 'Explore AI to be innovative and create better solutions for the organisation and the world. Internally motivated and highly proactive' }
    ]
  }
];

const AIMaturityAssessment = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [currentDimension, setCurrentDimension] = useState(0);
  const [responses, setResponses] = useState({});

  const handleLevelSelect = (level) => {
    const newResponses = {
      ...responses,
      [dimensions[currentDimension].name]: level
    };
    setResponses(newResponses);

    if (currentDimension < dimensions.length - 1) {
      setCurrentDimension(currentDimension + 1);
    } else {
      setCurrentStep('results');
    }
  };

  const handleBack = () => {
    if (currentDimension > 0) {
      setCurrentDimension(currentDimension - 1);
    } else {
      setCurrentStep('welcome');
    }
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setCurrentDimension(0);
    setResponses({});
  };

  const getRadarData = () => {
    return dimensions.map(dim => ({
      dimension: dim.name,
      score: responses[dim.name] || 0
    }));
  };

  const getBarData = () => {
    return dimensions.map(dim => ({
      name: dim.name,
      level: responses[dim.name] || 0
    }));
  };

  if (currentStep === 'welcome') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl font-light text-slate-800 mb-6">
            AI Capability Maturity Assessment
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            This diagnostic tool will help you assess your organisation's AI maturity across seven critical dimensions: technological capabilities, organisational readiness, and external factors.
          </p>
          <div className="bg-slate-50 border-l-4 border-slate-400 p-6 mb-8">
            <p className="text-slate-700">
              <strong>Time required:</strong> Approximately 5-7 minutes
            </p>
            <p className="text-slate-700 mt-2">
              <strong>Instructions:</strong> For each dimension, select the maturity level that best describes your organisation's current state.
            </p>
          </div>
          <button
            onClick={() => setCurrentStep('assessment')}
            className="bg-slate-800 text-white px-8 py-3 rounded hover:bg-slate-700 transition-colors text-lg font-medium"
          >
            Begin Assessment
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 'assessment') {
    const dimension = dimensions[currentDimension];
    const progress = ((currentDimension) / dimensions.length) * 100;

    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-600">
                Dimension {currentDimension + 1} of {dimensions.length}
              </span>
              <span className="text-sm text-slate-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-slate-800 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <div className="mb-6">
              <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm font-medium mb-3">
                {dimension.category}
              </span>
              <h2 className="text-3xl font-light text-slate-800 mb-2">
                {dimension.name}
              </h2>
            </div>

            <p className="text-slate-600 mb-8">
              Select the level that best describes your organisation's current state:
            </p>

            <div className="space-y-4">
              {dimension.levels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => handleLevelSelect(level.level)}
                  className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                    responses[dimension.name] === level.level
                      ? 'border-slate-800 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center font-medium mr-4">
                      {level.level}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-slate-800 mb-2">
                        {level.label}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="text-slate-600 hover:text-slate-800 px-6 py-2 transition-colors"
            >
              ← Back
            </button>
            {responses[dimension.name] !== undefined && (
              <button
                onClick={() => {
                  if (currentDimension < dimensions.length - 1) {
                    setCurrentDimension(currentDimension + 1);
                  } else {
                    setCurrentStep('results');
                  }
                }}
                className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-700 transition-colors"
              >
                {currentDimension < dimensions.length - 1 ? 'Next →' : 'View Results →'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    const radarData = getRadarData();
    const barData = getBarData();

    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <h1 className="text-4xl font-light text-slate-800 mb-2">
              Your AI Maturity Profile
            </h1>
            <p className="text-slate-600 mb-8">
              Assessment completed across all seven dimensions
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Maturity Overview</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#cbd5e1" />
                    <PolarAngleAxis 
                      dataKey="dimension" 
                      tick={{ fill: '#475569', fontSize: 12 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 5]}
                      tick={{ fill: '#64748b' }}
                    />
                    <Radar
                      name="Maturity Level"
                      dataKey="score"
                      stroke="#1e293b"
                      fill="#1e293b"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Dimension Scores</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={barData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis type="number" domain={[0, 5]} tick={{ fill: '#64748b' }} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={150}
                      tick={{ fill: '#475569', fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px'
                      }}
                    />
                    <Bar dataKey="level" fill="#1e293b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-xl font-medium text-slate-800 mb-6">Detailed Results</h3>
              <div className="space-y-6">
                {dimensions.map(dim => {
                  const selectedLevel = responses[dim.name];
                  const levelInfo = dim.levels.find(l => l.level === selectedLevel);
                  return (
                    <div key={dim.name} className="flex items-start p-4 bg-slate-50 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-medium mr-4">
                        {selectedLevel}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h4 className="text-lg font-medium text-slate-800 mr-3">
                            {dim.name}
                          </h4>
                          <span className="text-sm text-slate-600">
                            ({dim.category})
                          </span>
                        </div>
                        <p className="text-slate-700">
                          <span className="font-medium">{levelInfo.label}:</span> {levelInfo.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <button
                onClick={handleRestart}
                className="bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 transition-colors"
              >
                Restart Assessment
              </button>
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-6 text-sm text-slate-600">
            <p>
              Based on Hansen, H.F., Lillesund, E., Mikalef, P. et al. Understanding Artificial Intelligence Diffusion through an AI Capability Maturity Model. <em>Inf Syst Front</em> 26, 2147–2163 (2024). 
              <a 
                href="https://doi.org/10.1007/s10796-024-10528-4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-800 hover:underline ml-1"
              >
                https://doi.org/10.1007/s10796-024-10528-4
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default AIMaturityAssessment;