import "./Loader.css";

function Loader() {
  return (
    <div className="loader-page">
      <div className="loader-image">
        <div className="mag-glass mag-glass-animation"></div>
      </div>
      <h1 className="loader-text">Loading...</h1>
    </div>
  );
}

export default Loader;
