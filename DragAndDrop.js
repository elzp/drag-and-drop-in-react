import React from 'react';
import Arcicle from './Article.js';
import './style.css';

function DragAndDrop({ name }) {
  const dataForArticles = [
    { name: '1Article', date: '10.09.2022', content: '1Article' },
    { name: '2Article', date: '10.09.2022', content: '2Article' },
    { name: '3Article', date: '10.09.2022', content: '3Article' },
    { name: '4Article', date: '10.09.2022', content: '4Article' },
  ];

  return (
    <div className="flex justify-center items-top">
      <div
        className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col"
        draggable="false">
        <h2 className="text-4xl p-5 text-center" draggable="false">
          Drafts
        </h2>
        <main className="p-10 bg-gray-300 flex-1" draggable="false">
          {dataForArticles.map((it) => (
            <Arcicle draggable="false" key={it.name} props={it} />
          ))}
        </main>
      </div>

      <div
        className="bg-white overflow-hidden rounded-md p-30 max-w-xs flex-1 flex flex-col"
        draggable="false">
        <h2 className="text-4xl p-5 text-center" draggable="false">
          Published
        </h2>
        <main className="p-10 bg-gray-300 flex-1" draggable="false"></main>
      </div>
    </div>
  );
}

export default DragAndDrop;
