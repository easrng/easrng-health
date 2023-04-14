import { render, h } from "https://esm.sh/preact@10.13.0";
import {
  useState,
  useRef,
  useEffect,
} from "https://esm.sh/preact@10.13.0/hooks";
import htm from "https://esm.sh/htm@3.1.1";
const html = htm.bind(h);
const pathLengths = [1162.43115234375, 911.0974731445312, 659.7589721679688];
function Rings({
  types,
  setTypes,
  goals,
  setGoals,
  progress,
  setProgress,
  editing,
  svgRef,
  imgRef,
}) {
  return html` <svg
    viewBox="0 0 800 600"
    width="800"
    height="600"
    style="line-height: 1.25;"
    font-family="Roboto"
    ref=${svgRef}
  >
    <clipPath id="round">
      <rect width="800" height="600" rx="20" />
    </clipPath>
    <g clip-path=${editing ? "url(#round)" : ""}>
      <rect width="800" height="600" fill="#111111" />
      <rect width="800" height="120" fill="#1a1a1a" />
      <g fill="#fff" font-size="53" font-weight="400">
        <text
          x="747"
          y="80"
          fill="#fff"
          style="text-align: end"
          text-anchor="end"
        >
          ${new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString(
            "en-US",
            { day: "numeric", month: "short" }
          )}
        </text>
        <text x="40" y="80">easrng health</text>
      </g>
      <g
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="30"
      >
        <g opacity=".5">
          <rect
            width="370"
            height="370"
            x="55"
            y="175"
            stroke="#00f086"
            ry="185"
          />
          <rect
            width="290"
            height="290"
            x="95"
            y="215"
            stroke="#02d2ff"
            ry="145"
          />
          <rect
            width="210"
            height="210"
            x="135"
            y="255"
            stroke="#ff3da8"
            ry="105"
          />
        </g>
        <g>
          <rect
            width="370"
            height="370"
            x="55"
            y="175"
            stroke="#00f086"
            stroke-dasharray=${(progress[0] / goals[0]) * pathLengths[0] +
            " 2000"}
            ry="185"
          />
          <rect
            width="290"
            height="290"
            x="95"
            y="215"
            stroke="#02d2ff"
            stroke-dasharray=${(progress[1] / goals[1]) * pathLengths[1] +
            " 2000"}
            ry="145"
          />
          <rect
            width="210"
            height="210"
            x="135"
            y="255"
            stroke="#ff3da8"
            stroke-dasharray=${(progress[2] / goals[2]) * pathLengths[2] +
            " 2000"}
            ry="105"
          />
        </g>
      </g>
      ${editing
        ? html`
          <foreignObject x="0" y="0" width="800" height="600">
          <img ref=${imgRef} style="display: block;width: 100%;height: 100%;opacity: 0;">
          </foreignObject>
          </foreignObject>
              <foreignObject x="480" y="160" width="285" height="400">
              <div
                class="name"
                style="color:#00f086; font-size:40px; font-weight:400;"
              >
                <input
                  type="text"
                  value=${types[0]}
                  onInput=${(e) =>
                    setTypes([e.target.value, types[1], types[2]])}
                />
              </div>
              <div
                class="value"
                style="color:#fff; font-size:53px; font-weight:500;"
              >
                <input
                  type="number"
                  value=${progress[0]}
                  onInput=${(e) =>
                    setProgress([e.target.value, progress[1], progress[2]])}
                />
                /
                <input
                  type="number"
                  value=${goals[0]}
                  onInput=${(e) =>
                    setGoals([e.target.value, goals[1], goals[2]])}
                />
              </div>
              <div
                class="name"
                style="color:#02d2ff; font-size:40px; font-weight:400;"
              >
                <input
                  type="text"
                  value=${types[1]}
                  onInput=${(e) =>
                    setTypes([types[0], e.target.value, types[2]])}
                />
              </div>
              <div
                class="value"
                style="color:#fff; font-size:53px; font-weight:500;"
              >
                <input
                  type="number"
                  value=${progress[1]}
                  onInput=${(e) =>
                    setProgress([progress[0], e.target.value, progress[2]])}
                />
                /
                <input
                  type="number"
                  value=${goals[1]}
                  onInput=${(e) =>
                    setGoals([goals[0], e.target.value, goals[2]])}
                />
              </div>
              <div
                class="name"
                style="color:#ff3da8; font-size:40px; font-weight:400;"
              >
                <input
                  type="text"
                  value=${types[2]}
                  onInput=${(e) =>
                    setTypes([types[0], types[1], e.target.value])}
                />
              </div>
              <div
                class="value"
                style="color:#fff; font-size:53px; font-weight:500;"
              >
                <input
                  type="number"
                  value=${progress[2]}
                  onInput=${(e) =>
                    setProgress([progress[0], progress[1], e.target.value])}
                />
                /
                <input
                  type="number"
                  value=${goals[2]}
                  onInput=${(e) =>
                    setGoals([goals[0], goals[1], e.target.value])}
                />
              </div>
              </foreignObject>
            `
        : html`<foreignObject x="480" y="160" width="285" height="400"
            ><div style="color:#00f086; font-size:40px; font-weight:400;">
              ${types[0]}
            </div>
            <div style="color:#fff; font-size:53px; font-weight:500;">
              ${progress[0]} / ${goals[0]}
            </div>
            <div style="color:#02d2ff; font-size:40px; font-weight:400;">
              ${types[1]}
            </div>
            <div style="color:#fff; font-size:53px; font-weight:500;">
              ${progress[1]} / ${goals[1]}
            </div>
            <div style="color:#ff3da8; font-size:40px; font-weight:400;">
              ${types[2]}
            </div>
            <div style="color:#fff; font-size:53px; font-weight:500;">
              ${progress[2]} / ${goals[2]}
            </div></foreignObject
          >`}
    </g>
  </svg>`;
}
import pDebounce from "https://esm.sh/p-debounce@4.0.0";
const convertSvgToPng = pDebounce(async function (svgTag, imgTag) {
  const svgData = new XMLSerializer().serializeToString(svgTag);

  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    imgTag.src = canvas.toDataURL("image/png");
  };

  img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
}, 200);

function Render({ types, goals, progress, imgRef }) {
  const svgRef = useRef();
  useEffect(async () => {
    convertSvgToPng(svgRef.current, imgRef.current);
  }, [types, goals, progress]);
  return html`<div style="display:none">
      <${Rings} ...${{ types, goals, progress, editing: false, svgRef }} />
    </div>
    <div class="howto">right click the card to copy</div>`;
}
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      console.warn("failed to read localStorage", e);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("failed to write localStorage", e);
    }
  };

  return [storedValue, setValue];
}
function App() {
  const [types, setTypes] = useLocalStorage("types", [
    "Steps",
    "Intensity Mins.",
    "Active Cals.",
  ]);
  const [goals, setGoals] = useLocalStorage("goals", [5000, 30, 500]);
  const [progress, setProgress] = useLocalStorage("progress", [10, 10, 10]);
  const imgRef = useRef();

  return html`<${Rings}
      ...${{
        types,
        setTypes,
        goals,
        setGoals,
        progress,
        setProgress,
        editing: true,
        imgRef,
      }}
    /><${Render} ...${{ types, goals, progress, imgRef }} />`;
}

render(html`<${App} />`, document.body);
