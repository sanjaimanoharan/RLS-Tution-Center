export function BrandedLoader() {
  return (
    <div className="opening-sequence" aria-hidden="true">
      <div className="opening-brand">
        <svg className="opening-book" viewBox="0 0 100 76" fill="none">
          <path
            className="book-outline"
            d="M50 18C37 7 21 9 8 13v48c15-4 29-3 42 7 13-10 27-11 42-7V13C79 9 63 7 50 18Zm0 0v50"
          />
          <g className="book-lines">
            <path d="M19 25c8-2 16-1 23 3M19 35c8-2 16-1 23 3M19 45c8-2 16-1 23 3M58 28c7-4 15-5 23-3M58 38c7-4 15-5 23-3M58 48c7-4 15-5 23-3" />
          </g>
          <path
            className="book-turn"
            d="M50 18C63 7 79 9 92 13v48c-15-4-29-3-42 7Z"
          />
        </svg>
        <div className="opening-name">
          <span>R</span>
          <span>L</span>
          <span>S</span>
          <span>.</span>
        </div>
        <p className="opening-subtitle">TUITION CENTER</p>
        <div className="opening-rule">
          <span />
        </div>
        <p className="opening-caption">A new chapter in learning.</p>
      </div>
    </div>
  );
}
