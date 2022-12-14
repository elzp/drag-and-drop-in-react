import React from 'react';

export default ({ name }) => (
  <div class="flex justify-center items-top">
  <div class="bg-white overflow-hidden rounded-md p-30 mx-5 max-w-xs flex-1 flex flex-col">
    <h2 class="text-4xl p-5 text-center">Drafts</h2>    
    <main class="p-10 bg-gray-300 flex-1">
      <article class="bg-white rounded-md overflow-hidden my-10">
        <a href="#">
            <img alt="Placeholder" class="block h-auto w-full" src="https://img.youtube.com/vi/_H1MYbmyupw/maxresdefault.jpg" />
        </a>
        <header class="pt-5 px-5 flex justify-between">
          <h1 class="text-lg text-center"><a href="#">Q&A</a></h1>
          <div>14/2/20</div>
        </header>
        <footer class="px-5 py-3 flex items-center text-sm">
          <img alt="Placeholder" class="w-6 block rounded-full" src="https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg" />
          <p class="ml-2 text-sm">
              Przeprogramowani
          </p>
        </footer>
      </article>
      
      <article class="bg-white rounded-md overflow-hidden my-10">
        <a href="#">
            <img alt="Placeholder" class="block h-auto w-full" src="https://img.youtube.com/vi/svgI-V_BBOs/maxresdefault.jpg" />
        </a>
        <header class="pt-5 px-5 flex justify-between">
          <h1 class="text-lg"><a href="#">Article</a></h1>
          <div>14/2/20</div>
        </header>
        <footer class="px-5 py-3 flex items-center text-sm">
          <img alt="Placeholder" class="w-6 block rounded-full" src="https://www.datocms-assets.com/12596/1561887961-1560597249-przeprogramowanilogo.png?auto=format&fm=jpg" />
          <p class="ml-2 text-sm">
              Przeprogramowani
          </p>
        </footer>
      </article>
    </main>
  </div>

  <div class="bg-white overflow-hidden rounded-md p-30 max-w-xs flex-1 flex flex-col">
    <h2 class="text-4xl p-5 text-center">Published</h2>    
    <main class="p-10 bg-gray-300 flex-1">
      
    </main>
  </div>
  </div>
  );
