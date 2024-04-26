import React from "react";
import "./style.css";

const magazines = [
  {id: 1, title: 'A', theme: 'arch', isAvailable: true },
  {id: 2 title: 'D', theme: 'arch', isAvailable: true },
  {id: 3 title: 'CA', theme: 'design', isAvailable: false },
];

const book = {
  title: 'AFTA',
  author: 'EH',
  published: '1929',
  image: src/lasersharknew.jpg
  width: '264',
  height: '378',
};

function Bookshelf() {
  return (
    <>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img 
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width
          height: book.height
        }}
        />
      </>
  )
}

function MagicButton () {
  return (
    <>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
