import "./Search.css";

import { useState } from "react";

import Vertical_Card from "../../components/ui/cards/vertical-card/Vertical-Card";

import { use_products } from "../../context/Products_Context";

const Search = () => {
  const [query, set_query] = useState("");
  const { categories } = use_products();

  const all_products = categories.flatMap((category) =>
    category.sub_categories.flatMap((line) =>
      line.line.map((product) => ({
        ...product,
        category_name: category.name,
        sub_category_name: line.name,
        category_slug: category.slug,
        sub_category_slug: line.slug,
      }))
    )
  );

  const filtered = query.trim()
    ? all_products.filter((line) =>
        (line.name + " " + line.description)
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : all_products;

  const grouped = filtered.reduce((acc, line) => {
    const key = `${line.category_name} / ${line.sub_category_name}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(line);
    return acc;
  }, {});

  return (
    <>
      <div className="search">
        <input
          className="search-field"
          value={query}
          onChange={(e) => set_query(e.target.value)}
          placeholder="Поиск..."
          type="text"
        />

        <div className="search-repository">
          {query.trim() && filtered.length === 0 && (
            <div className="search-empty">Ничего не найдено</div>
          )}

          {Object.entries(grouped).map(([group_name, items]) => (
            <div key={group_name} className="search-collection">
              <div className="search-collection-label">{group_name}</div>
              <div className="vertical-cards">
                {items.map((line) => (
                  <Vertical_Card short={line} key={line.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;