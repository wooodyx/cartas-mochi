function capture() {
  const elements = document.querySelectorAll("card");

  elements.forEach(async (element, index) => {
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download =
      element.querySelector("span").textContent +
      "-" +
      element.querySelector("p").textContent +
      ".png";
    link.click();
  });
}

/* card {
  width: 400px;
  height: 600px;
  border-radius: 8px;
  border: 10px solid #fff;
  margin: 10px;
  display: grid;
  grid-template-rows: 400px 1fr;
  align-items: center;
  justify-content: center;
  font-family: "SoulBillani", sans-serif;
  text-align: center;
  font-size: 45px;
  img {
    width: 330px;
    filter: drop-shadow(0px 0px 5px white);
    height: 330px;
    margin: auto;
    padding-top: 16px;
  }

  p {
    background: white;
    border-radius: 8px;
    margin: 0 16px;
    padding: 8px;
  }
} */
