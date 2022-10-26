import React from 'react';
import './style.css';

export default (props) => (
  <article class="bg-white rounded-md overflow-hidden my-10">
    <a href="#">
      <img
        alt="Placeholder"
        class="block h-auto w-full"
        src="https://img.youtube.com/vi/svgI-V_BBOs/maxresdefault.jpg"
      />
    </a>
    <header class="pt-5 px-5 flex justify-between">
      <h1 class="text-lg">
        <a href="#">{props.props.name}</a>
      </h1>
      <div>{props.props.date}</div>
    </header>
    <footer class="px-5 py-3 flex items-center text-sm">
      <img
        alt="Placeholder"
        class="w-6 block rounded-full"
        src="https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg"
      />
      <p class="ml-2 text-sm">{props.props.content}</p>
    </footer>
  </article>
);
