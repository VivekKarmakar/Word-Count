
import React, { useState } from 'react';

const WordCounter = () => {
 const [text, setText] = useState('');
 const [wordCount, setWordCount] = useState(0);

 const handleChange = (e) => {
    setText(e.target.value);
    setWordCount(e.target.value.split(' ').length);
 };

 return (
    <div class="word-counter">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        style={{ width: '99.5%', height: '200px' }}
      />
      <p>Word Count: {wordCount}</p>
    </div>
 );
};

export default WordCounter;