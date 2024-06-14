let buttons = document.getElementById("container").children;



async function startGame() {
    buttons[1].style.backgroundColor = "green"
    await pause(1000);
    buttons[1].style.backgroundColor = ""
}

function pause(time) {
  return new Promise(
    (resolve) => {
        setTimeout(resolve, time);
    }
  );


}