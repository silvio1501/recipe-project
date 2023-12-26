import React from "react";
import { useCategoryContext } from "../../context";
import { Link } from "gatsby";

const Paginator = () => {
  const { slug, numOfPages, currentPage } = useCategoryContext();
  const hasNextPage = currentPage < numOfPages;
  return (
    <section className="w-[90%] mx-auto my-[30px]">
      <div
        className="flex items-center"
        style={{
          justifyContent:
            currentPage > 1 && hasNextPage
              ? "space-between"
              : currentPage === 1 && hasNextPage
              ? "flex-end"
              : "flex-start",
        }}
      >
        {currentPage > 1 ? (
          <Link
            to={currentPage <= 2 ? `/${slug}/` : `/${slug}/${currentPage - 1}`}
          >
            <div>
              <button className="px-5 py-1 bg-orange-400 text-white rounded-lg">
                PrevPage
              </button>
            </div>
          </Link>
        ) : null}
        {hasNextPage ? (
          <Link to={`/${slug}/${currentPage + 1}/`}>
            <div>
              <button className="px-5 py-1 bg-orange-400 text-white rounded-lg">
                NextPage
              </button>
            </div>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default Paginator;
