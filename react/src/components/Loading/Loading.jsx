import "./Loading.css";

function Loading() {
  return (
    <div className="loading-page">
      <div className="loader-wrapper">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>

        <span className="loading-text">Loading Premium Experience</span>
      </div>
    </div>
  );
}

export default Loading;
