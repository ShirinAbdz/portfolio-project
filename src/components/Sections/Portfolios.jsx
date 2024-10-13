import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Finance",
  },
  {
    id: 3,
    name: "Clone",
  },
  {
    id: 4,
    name: "Mini-project",
  },
  // {
  //   id: 5,
  //   name: "Art",
  // },
];

const allData = [
  {
    id: 1,
    name: "Crypto Chain",
    category: ["Finance"],
    image: "images/portfolio/1.jpg",
    path:"https://crypto-chain-one.vercel.app/"
    // slug: "",
  },
  {
    id: 2,
    name: "Twitter Clone",
    category: ["Clone"],
    image: "images/portfolio/2.jpg",
    path:"https://twitter-clone-nextjs-mu.vercel.app/"
    // slug: "apple-usb",
  },
  {
    id: 3,
    name: "Calculator",
    category: ["Mini-project"],
    image: "images/portfolio/3.jpg",
    path:"https://num-master.vercel.app/"
    // slug: "work-space",
  },
  {
    id: 4,
    name: "Contact App",
    category: ["Mini-project"],
    image: "images/portfolio/4.jpg",
    path:"https://contact-app-two-wheat.vercel.app/"
    // slug: "creative-bulb",
  },
  // {
  //   id: 5,
  //   name: "Iphone 8",
  //   category: ["branding", "art"],
  //   image: "images/portfolio/5.jpg",
  //   slug: "iphone-8",
  // },
  // {
  //   id: 6,
  //   name: "Minimal Art",
  //   category: ["design", "creative"],
  //   image: "images/portfolio/6.jpg",
  //   slug: "minimal-art",
  // },
  // {
  //   id: 7,
  //   name: "Creative Art",
  //   category: ["creative"],
  //   image: "images/portfolio/1.jpg",
  //   slug: "creative-art",
  // },
  // {
  //   id: 8,
  //   name: "Apple USB",
  //   category: ["creative", "design"],
  //   image: "images/portfolio/2.jpg",
  //   slug: "apple-usb",
  // },
  // {
  //   id: 9,
  //   name: "Work Space",
  //   category: ["branding"],
  //   image: "images/portfolio/3.jpg",
  //   slug: "work-space",
  // },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;

    if (targetFilter === filters[0].name.toLowerCase()) {
      // Show all items up to dataVisibleCount
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      // Filter based on active category
      tempData = getAllItems.filter((data) => {
        // Check if the category array includes the target filter (case insensitive)
        return (
          data.category.some(
            (category) => category.toLowerCase() === targetFilter
          ) && data.id <= dataVisibleCount
        );
      });
    }

    setVisibleItems(tempData); // Update visible items
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {/* {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )} */}
    </>
  );
}

export default Portfolios;
