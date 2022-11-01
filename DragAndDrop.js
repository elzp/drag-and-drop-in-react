import React from 'react';
import Arcicle from './Article.js';
import './style.css';

function DragAndDrop() {
  const defaultdataForArticles = [
    {
      name: '1Article',
      date: '10.09.2022',
      content: '1Article',
      parent: 'drafts',
      top: 0,
    },
    {
      name: '2Article',
      date: '10.09.2022',
      content: '2Article',
      parent: 'drafts',
      top: 0,
    },
    {
      name: '3Article',
      date: '10.09.2022',
      content: '3Article',
      parent: 'drafts',
      top: 0,
    },
    {
      name: '4Article',
      date: '10.09.2022',
      content: '4Article',
      parent: 'published',
      top: 0,
    },
  ];
  const parents = ['drafts', 'published'];
  const [dataForArticles, setdataForArticles] = React.useState(
    defaultdataForArticles
  );

  function updatePosition(position, name) {
    setdataForArticles((prev) => {
      const newprop = prev.map((it) => {
        if (it.name === name) {
          return { ...it, top: position };
        } else {
          return it;
        }
      });
      return newprop;
    });
  }
  function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.target.classList.remove('drag-over');
  }

  function drop(e) {
    e.preventDefault();

    e.target.classList.remove('drag-over');
    const idOfDraggedElement = e.dataTransfer.getData('text/plain');
    const yPositionofMouseOnDrop = e.clientY + window.scrollY;

    setdataForArticles((prev) => {
      let newprop = prev.map((it) => {
        if (it.name === idOfDraggedElement) {
          return {
            ...it,
            top: yPositionofMouseOnDrop,
            parent: e.target.id, 
          };
        } else {
          return it;
        }
      });

      return newprop;
    });
  }

  function sortBy(array, nameOfKey) {
    const baseOfArray = [...array];
    const result = baseOfArray.sort((a, b) => {
      return a[nameOfKey] - b[nameOfKey];
    });
    return result;
  }

  return (
    <div className="flex justify-center items-top">
      <div
        className="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col"
        draggable="false"
      >
        <h2 className="text-4xl p-5 text-center" draggable="false">
          Drafts
        </h2>
        <main
          className="p-10 bg-gray-300 flex-1"
          draggable="false"
          onDragStart={dragStart}
          onDragEnter={dragEnter}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDrop={drop}
          id="drafts"
        >
          {sortBy(
            dataForArticles.filter((it) => it.parent === 'drafts'),
            'top'
          ).map((it) => (
            <Arcicle
              draggable="false"
              key={it.name}
              props={it}
              updatePosition={updatePosition}
              top={it.top}
            />
          ))}
        </main>
      </div>

      <div
        className="bg-white overflow-hidden rounded-md p-30 max-w-xs flex-1 flex flex-col"
        draggable="false"
      >
        <h2 className="text-4xl p-5 text-center" draggable="false">
          Published
        </h2>
        <main
          className="p-10 bg-gray-300 flex-1"
          draggable="false"
          onDragStart={dragStart}
          onDragEnter={dragEnter}
          onDragOver={dragOver}
          onDragLeave={dragLeave}
          onDrop={drop}
          id="published"
        >
          {sortBy(
            dataForArticles.filter((it) => it.parent === 'published'),
            'top'
          ).map((it) => (
            <Arcicle
              draggable="false"
              key={it.name}
              props={it}
              updatePosition={updatePosition}
              // tobeDropped={tobeDropped}
              top={it.top}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default DragAndDrop;
