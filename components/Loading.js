import { Circle } from "better-react-spinkit";

const loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://imgs.search.brave.com/veKebSEPmOQywtiQ1yoRRraPWHi5Y2gbs424aZB74zs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9taXNz/aW5ndHJpY2tzLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNS93aGF0c2Fw/cC1sb2dvLWljb25l/LnBuZw"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBc28" size={60} />
      </div>
    </center>
  );
};

export default loading;
