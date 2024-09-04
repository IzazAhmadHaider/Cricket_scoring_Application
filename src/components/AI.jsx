import React, { useEffect, useState } from 'react';

const AIThreat = () => {
  const codeSnippet = `function futureDeveloper() {
  const skills = ['AI', 'Machine Learning', 'Automation'];
  return skills.map(skill => \`Mastering \${skill}\`);
}

console.log(futureDeveloper());`;

  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-green-400">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-red-500 text-center">
          ⚠️ AI is Coding in Real-Time ⚠️
        </h1>
        <pre className="bg-gray-900 p-4 rounded-md shadow-inner text-left whitespace-pre-wrap">
          <code>{displayedCode}</code>
        </pre>
        <p className="text-center mt-4 text-gray-400">
          Is this the future of development? Will AI take over?
        </p>
      </div>
    </div>
  );
};

export default AIThreat;
