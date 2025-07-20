import { Link } from "react-router";
import "./style.css";
import * as _ from "lodash";

function Menu() {
  const a = new Array(100).fill(0);

  _.each(a, (v, i) => {
    console.log(i, v);
  });

  return (
    <div className="menu">
      <Link to="/">
        <h3>Page 1</h3>
      </Link>
      <Link to="/page2">
        <h3>Page 2</h3>
      </Link>
      <Link to="/page3">
        <h3>Page 3</h3>
      </Link>
      <Link to="/page4">
        <h3>Page 4</h3>
      </Link>
      <Link to="/page5">
        <h3>Page 5</h3>
      </Link>
      <Link to="/page6">
        <h3>Page 6</h3>
      </Link>
      <Link to="/page7">
        <h3>Page 7</h3>
      </Link>
      <Link to="/page8">
        <h3>Page 8</h3>
      </Link>
      <Link to="/page9">
        <h3>Page 9</h3>
      </Link>
      <Link to="/page10">
        <h3>Page 10</h3>
      </Link>
    </div>
  );
}

export default Menu;
