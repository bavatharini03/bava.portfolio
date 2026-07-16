import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button
        onClick={scrollTop}
className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;