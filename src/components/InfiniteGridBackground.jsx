import { useEffect, useRef } from "react";
import "./InfiniteGridBackground.css";
const InfiniteGridBackground = ({ hori = 10, verti = 10, spacing = 50 }) => {
  const horiRef = useRef(null);
  const vertiRef = useRef(null);
  const horiCount = useRef(hori);
  const vertiCount = useRef(verti);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const totalHeight = horiCount.current * spacing;
      const totalWidth = vertiCount.current * spacing;

      if (scrollY + windowHeight > totalHeight) {
        addHorizontalLines();
      }

      if (scrollX + windowWidth > totalWidth) {
        addVerticalLines();
      }
    };

    const addHorizontalLines = () => {
      const newLines = Array.from({ length: hori }, (_, index) => (
        <div
          className="grid-lines-hori"
          key={`hori-${horiCount.current + index}`}
          style={{ top: `${(horiCount.current + index) * spacing}px` }}
        ></div>
      ));
      horiRef.current.append(...newLines);
      horiCount.current += hori;
    };

    const addVerticalLines = () => {
      const newLines = Array.from({ length: verti }, (_, index) => (
        <div
          className="grid-lines-verti"
          key={`verti-${vertiCount.current + index}`}
          style={{ left: `${(vertiCount.current + index) * spacing}px` }}
        ></div>
      ));
      vertiRef.current.append(...newLines);
      vertiCount.current += verti;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hori, verti, spacing]);

  return (
    <div className="bg-container">
      <div className="horizontal-lines" ref={horiRef}>
        {Array.from({ length: hori }, (_, index) => (
          <div
            className="grid-lines-hori"
            key={index}
            style={{ top: `${index * spacing}px` }}
          ></div>
        ))}
      </div>
      <div className="vertical-lines" ref={vertiRef}>
        {Array.from({ length: verti }, (_, index) => (
          <div
            className="grid-lines-verti"
            key={index}
            style={{ left: `${index * spacing}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteGridBackground;
