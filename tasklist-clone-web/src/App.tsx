import React from 'react';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <div>
      <header className="flex items-center bg-gray-100 border-b border-gray-300 box-border fixed top-0 left-0 right-0 m-0 p-0 h-12 z-8000">
      <div className="p-2 flex border-r border-gray-300 bg-gray-100 hover:cursor-pointer">
        <div className="px-2">icon</div>
        <a href='/' className="px-2 font-semibold">Tasklist</a>
      </div>
      <ul className="px-2 flex text-base">
      <li >
        <a className="m-1 p-3 hover:bg-gray-200 hover:cursor-pointer text-gray-500" href="/">Tasks</a>
      </li>
      <li >
        <a className="p-3 m-1 hover:bg-gray-200 hover:cursor-pointer text-gray-500" href="/processes">Processes</a>
      </li>
      </ul>
      </header>
      
      <AppRoutes/>
    </div>
  );
}

export default App;
