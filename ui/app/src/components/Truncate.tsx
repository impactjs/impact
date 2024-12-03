import { useState, useRef, useEffect, type ReactNode } from "react";

function TruncatedSection({
  children,
  maxHeight = 100,
}: { children: ReactNode; maxHeight?: number }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        setIsOverflowing(contentRef.current.scrollHeight > maxHeight);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [maxHeight]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <>
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? "none" : `${maxHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
      {isOverflowing && (
        <button
          type="button"
          onClick={toggleExpand}
          style={{ marginTop: "8px", cursor: "pointer" }}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </>
  );
}

export default TruncatedSection;
