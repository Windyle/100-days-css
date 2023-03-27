for (let i = 1; i <= 7; i++) {
  //Red Line
  document.getElementById(`rd${i}`).addEventListener(`mouseover`, (event) => {
    console.log(event);
    document.getElementById(`rt${i}`).classList.add(`hover`);
  });

  document.getElementById(`rd${i}`).addEventListener(`mouseleave`, (event) => {
    console.log(event);
    document.getElementById(`rt${i}`).classList.remove(`hover`);
  });

  //Blue Line
  document.getElementById(`bd${i}`).addEventListener(`mouseover`, (event) => {
    console.log(event);
    document.getElementById(`bt${i}`).classList.add(`hover`);
  });

  document.getElementById(`bd${i}`).addEventListener(`mouseleave`, (event) => {
    console.log(event);
    document.getElementById(`bt${i}`).classList.remove(`hover`);
  });
}
