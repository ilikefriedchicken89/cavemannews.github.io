import { useState } from 'react';
import './App.css';

const cavemanify = (text) => {
  // Simple mock: replace common news words
  return text
    .replace(/\bIsrael\b/gi, 'Israel tribe')
    .replace(/\bIDF\b/gi, 'big army')
    .replace(/\bstrike(s)?\b/gi, 'drop boom')
    .replace(/\bkill(s|ed|ing)?\b/gi, 'make die')
    .replace(/Palestinian(s)?/gi, 'Gaza people')
    .replace(/\bcivilian(s)?\b/gi, 'people')
    .replace(/\bmilitant(s)?\b/gi, 'war people')
    .replace(/\b\d+\b/g, (number) => number)
    .replace(/\band\b/gi, 'and')
    .replace(/\bthe\b/gi, '')
    .replace(/\. */g, '. ')
    .replace(/, */g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
};

export default function App() {
  const [headline, setHeadline] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="container">
      <header>
        <h1>Caveman News</h1>
        <img
          src="https://cavemannews.github.io/logo.png"
          alt="Caveman News Logo"
          className="header-img"
        />
      </header>

      <div className="input-area">
        <label>Paste Headline:</label>
        <input
          value={headline}
          onChange={e => setHeadline(e.target.value)}
          placeholder="Enter headline..."
        />
        <label>Paste Paragraph:</label>
        <textarea
          value={paragraph}
          onChange={e => setParagraph(e.target.value)}
          rows={5}
          placeholder="Enter news paragraph..."
        />
      </div>

      <div className="output-area">
        <h2>{headline ? cavemanify(headline) : 'Caveman Headline...'}</h2>
        <div className="cave-paragraph-row">
          <p className="caveman-paragraph">{paragraph ? cavemanify(paragraph) : 'Caveman paragraph...'}</p>
          <div className="info-circle"
               onClick={() => setShowInfo(!showInfo)}
               title="Show normal paragraph">
            i
          </div>
        </div>
        {showInfo && (
          <div className="info-tooltip">
            {paragraph || 'Paste a paragraph to see normal version.'}
          </div>
        )}
      </div>
    </div>
  );
}