window.onload = function () {
  const generatePopUpHandler = (function generatePopUpHandler() {
    const properties = `.testing {
    background-color: white;
    z-index: 999;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
        }
        .testing > header {
            height: 30px;
            font-size: 1.2rem;
        }
        .testing > .main-section {
            height: calc(100% - 30px);
            overflow: auto;
            font-size: 0.8rem;
            color: darkred;
        }
            `;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const popUpHeight = 300;
    const popUpWidth = 300;

    const additionalMargin = 20;
    const style = document.createElement("style");
    style.innerHTML = properties;
    style.id = "style-container";
    document.body.appendChild(style);

    document.addEventListener("click", function (evt) {
      document.querySelector(".testing") &&
        document.body.removeChild(document.querySelector(".testing"));
      // document.getElementById('style-container') && document.body.removeChild(document.getElementById('style-container'))
      const div = document.createElement("div");
      div.classList.add("testing");
      div.style.height = `${popUpHeight}px`;
      div.style.width = `${popUpWidth}px`;
      div.style.position = "absolute";
      div.style.left = `${
        evt.clientX + popUpWidth > windowWidth
          ? evt.clientX - popUpWidth - additionalMargin
          : evt.clientX + additionalMargin
      }px`;
      div.style.top = `${
        evt.clientY + popUpHeight > windowHeight
          ? evt.clientY - popUpHeight
          : evt.clientY
      }px`;
      div.innerHTML = `
    <header>Heading</header>
    <section class="main-section">
        <p> asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd</p>
        <div>testing </div>
        <p> asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd
         asdhjkashd skjdhajksd asdhasdkjasd</p>
    </section>`;
      document.body.appendChild(div);
    });
  })();
};
// export default generatePopUpHandler;
