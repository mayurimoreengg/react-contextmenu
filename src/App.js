import React from 'react';
import './style.css';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

function handleClick(e, data) {
  console.log(`You clicked ${data.act}`);
  alert(`You clicked ${data.act}`);
}

export default function App() {
  return (
    <div>
      <div>
        {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
        {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}

        <ContextMenuTrigger id="my-context-menu">
          <div className="well">Right click to see the menu</div>
        </ContextMenuTrigger>

        <ContextMenu id="my-context-menu">
          <MenuItem
            data={{ act: 'copy' }}
            onClick={e => handleClick(e, { act: 'copy' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
            Copy
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            data={{ act: 'rename' }}
            onClick={e => handleClick(e, { act: 'rename' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Rename
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            data={{ act: 'delete' }}
            onClick={e => handleClick(e, { act: 'delete' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </MenuItem>
        </ContextMenu>

        <p>Context menu end here</p>
      </div>
    </div>
  );
}
