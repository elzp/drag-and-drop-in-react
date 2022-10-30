import React from 'react';
import Arcicle from './Article.js';
import './style.css';

function DragAndDrop({ name }) {
  const defaultdataForArticles = [
    {
      name: '1Article',
      date: '10.09.2022',
      content: '1Article',
      parent: 'drafts',
      hide: false,
    },
    {
      name: '2Article',
      date: '10.09.2022',
      content: '2Article',
      parent: 'drafts',
      hide: false,
    },
    {
      name: '3Article',
      date: '10.09.2022',
      content: '3Article',
      parent: 'drafts',
      hide: false,
    },
    {
      name: '4Article',
      date: '10.09.2022',
      content: '4Article',
      parent: 'published',
      hide: false,
    },
  ];

  const [dataForArticles, setdataForArticles] = React.useState(
    defaultdataForArticles
  );


 

  function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);

    setTimeout(() => {
      e.target.classList.add('hide');
      setdataForArticles((prev) => {
        const newprop = prev.map((it) => {
          if (it.name === e.target.id) {
            // it.hide = true;
            return { ...it, hide: true };
          } else {
            return it;
          }
        });
        return newprop;
      });
    }, 0);
  }
 function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  return (
    <div className="flex justify-center items-top">
      <div
        className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col"
        draggable="false"
        onDragEnter={dragEnter}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
      >
        <h2 className="text-4xl p-5 text-center" draggable="false">
          Drafts
        </h2>
        <main className="p-10 bg-gray-300 flex-1" draggable="false"
        draggable="false"
        onDragEnter={dragEnter}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        id="drafts">
          {dataForArticles
           .filter((it) => it.parent === 'drafts')
           .map((it) => (
            <Arcicle
                draggable="false"
                key={it.name}
                props={it}
                hide={it.hide}
              />
          ))}
        </main>
      </div>

      <div
        className="bg-white overflow-hidden rounded-md p-30 max-w-xs flex-1 flex flex-col"
      >
        <h2 className="text-4xl p-5 text-center" draggable="false">
          Published
        </h2>
        <main className="p-10 bg-gray-300 flex-1" draggable="false"
        draggable="false"
        onDragEnter={dragEnter}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        id="published">
          {dataForArticles
            .filter((it) => it.parent === 'published')
            .map((it) => (
              <Arcicle
                draggable="false"
                key={it.name}
                props={it}
                hide={it.hide}
              />
            ))}
          </main>
      </div>
    </div>
  );
}

export default DragAndDrop;
