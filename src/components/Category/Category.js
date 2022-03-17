import React from 'react'
import { Link } from 'wouter';

export default function Category({name, options = []}) {
  return (
    <section>
      <div className="container p-3 border-top mt-5">
        <h3 className="App-title">{name}</h3>
        </div>
      <ul className="App-list list-group list-group-horizontal-sm px-4 pb-4">
        {options.map((opcion) => (
          <li key={opcion}>
            <Link
              className="App-link list-group-item"
              to={`/search/${opcion}`}
            >
              {opcion}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
