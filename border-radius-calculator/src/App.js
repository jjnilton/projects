import { useEffect, useRef, useState } from "react";
import Main from "./components/Main";

const App = () => {
  const [borderRadius, setBorderRadius] = useState([
    75, 5, 50, 50, 50, 5, 75, 50,
  ]);
  const [active, setActive] = useState(false);
  const codeRef = useRef();
  const [copied, setCopied] = useState(false);

  const handleBorderRadiusTopLeft = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[0] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusTopRight = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[1] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusBottomRight = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[2] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusBottomLeft = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[3] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusTopLeftAdd = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[4] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusTopRightAdd = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[5] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusBottomRightAdd = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[6] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleBorderRadiusBottomLeftAdd = (event) => {
    setActive(true);
    setBorderRadius((prevBorderRadius) => {
      const updatedBorderRadius = [...prevBorderRadius];
      updatedBorderRadius[7] = event.target.value;
      return updatedBorderRadius;
    });
  };

  const handleMouseUp = event => {
    setActive(false);
  }

  const handleCopyToClipboard = async (event) => {
    await navigator.clipboard.writeText(codeRef.current.textContent);
    setCopied(true)
  }

  const borderRadiusArray = borderRadius.map((item) => `${item}%`);
  borderRadiusArray.splice(4, 0, "/");
  const borderRadiusString = borderRadiusArray.join(" ");

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false)
      }, 3000)
    }
    return () => {
      clearTimeout(timer);
    }
  }, [copied])

  return (
    <>
      <Main radius={borderRadiusString}>
        <div className="container">
          <div className="bordered"></div>
        </div>
        <div className="css-code">
          <code className={active ? "active" : undefined} ref={codeRef}>
            border-radius: {borderRadiusString};
          </code>
          <button onClick={handleCopyToClipboard}>{copied ? "Copied" : "Copy to Clipboard"}</button>
        </div>
        <div className="left">
          <div className="top-left option">
            <label htmlFor="top-left">Top Left</label>
            <input
              type="range"
              onChange={handleBorderRadiusTopLeft}
              value={borderRadius[0]}
              onMouseUp={handleMouseUp}
            />
            <label htmlFor="top-left-add">Top Left</label>
            <input
              type="range"
              onChange={handleBorderRadiusTopLeftAdd}
              value={borderRadius[4]}
              onMouseUp={handleMouseUp}
            />
          </div>
          <div className="bottom-left option">
            <label htmlFor="bottom-left">Bottom Left</label>
            <input
              type="range"
              onChange={handleBorderRadiusBottomLeft}
              value={borderRadius[3]}
              onMouseUp={handleMouseUp}
            />
            <label htmlFor="bottom-left-add">Bottom Left</label>
            <input
              type="range"
              onChange={handleBorderRadiusBottomLeftAdd}
              value={borderRadius[7]}
              onMouseUp={handleMouseUp}
            />
          </div>
        </div>
        <div className="right">
          <div className="top-right option">
            <label htmlFor="top-right">Top Right</label>
            <input
              type="range"
              onChange={handleBorderRadiusTopRight}
              value={borderRadius[1]}
              onMouseUp={handleMouseUp}
            />
            <label htmlFor="top-right-add">Top Right</label>
            <input
              type="range"
              onChange={handleBorderRadiusTopRightAdd}
              value={borderRadius[5]}
              onMouseUp={handleMouseUp}
            />
          </div>
          <div className="bottom-right option">
            <label htmlFor="bottom-right">Bottom Right</label>
            <input
              type="range"
              onChange={handleBorderRadiusBottomRight}
              value={borderRadius[2]}
              onMouseUp={handleMouseUp}
            />
            <label htmlFor="bottom-right-add">Bottom Right</label>
            <input
              type="range"
              onChange={handleBorderRadiusBottomRightAdd}
              value={borderRadius[6]}
              onMouseUp={handleMouseUp}
            />
          </div>
        </div>
      </Main>
    </>
  );
};

export default App;
