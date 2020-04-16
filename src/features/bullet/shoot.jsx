import store from "../../config/store";

export default function shoot(world) {
  function handleClick(event) {
    var rect = elem.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const mousePosition = [x, y];
    store.dispatch({
      type: "BULLET-FIRED",
      payload: mousePosition,
    });
  }
  var elem = document.getElementsByClassName("player-div")[0];
  console.log(elem);
  // elem.addEventListener("click", handleClick);
  return world;
}
