import "./Pagination.css";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
  const handlePageChange = (p: number) => {
    onChange(p);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (page > 3) pages.push("...");

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };
  const pages = getPages();

  return (
    <div className="pagination">
      <button
        className="arrow"
        onClick={() => handlePageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
      >
        <img src="/icons/arrow-pagination-left.svg" alt="Previous" />
      </button>

      {pages.map((p, i) => {
        if (typeof p === "string") {
          return (
            <span key={`dots-${i}`} className="dots">
              {p}
            </span>
          );
        }

        return (
          <button
            key={p}
            className={`page-number ${page === p ? "active" : ""}`}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </button>
        );
      })}

      <button
        className="arrow"
        onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
      >
        <img src="/icons/arrow-pagination-right.svg" alt="Next" />
      </button>
    </div>
  );
};
