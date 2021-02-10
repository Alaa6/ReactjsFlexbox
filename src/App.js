import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="first">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <div className="second">
        <div>
          <div>1 </div>
          <div>2 </div>
        </div>
        <div>
          <div className="divs4-container1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div className="divs4-container2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
