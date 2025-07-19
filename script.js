function rolldice() {

    const number = document.getElementById("val").value;
    const diceresult = document.getElementById("diceresult");
    const diceimg = document.getElementById("img");
    const values = [];
    const images = [];

    for (let i = 0; i < number; i++) {
        const randomnumber = Math.floor(Math.random() * 6) + 1;
        values.push(randomnumber);
        images.push(`<img src="${randomnumber}.png">`);
    }

    diceresult.textContent = `Dice: ${values.join(",")}`;
    diceimg.innerHTML = images.join('');
}