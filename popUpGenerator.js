window.onload = function () {
  const generatePopUpHandler = (function generatePopUpHandler() {
    const defaultStyle = `.modal-generator {
            background-color: white;
            z-index: 999;
            flex-direction: column;
            display: flex;
            border-radius: 8px;
            padding: 20px;
            box-sizing: border-box;
            transform: translate3d(0, 10px, 0);
            animation: come-in 0.4s ease forwards;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
                }
                .modal-generator > header {
                    font-size: 1.2rem;
                    color: rgba(0,0,0,0.87);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .modal-generator > .main-section {
                    flex: 1;
                    color: rgba(0,0,0,0.37);
                    overflow: auto;
                    font-size: 0.8rem;
                }

                @keyframes come-in {
                    to { transform: translate3d(0, 0, 0); }
                }

                .close {
                    width: 32px;
                    height: 32px;
                    opacity: 0.3;
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    }
                    .close:hover {
                    opacity: 1;
                    cursor: pointer;
                    }
                    .close:before, .close:after {
                    position: absolute;
                    content: ' ';
                    height: 16px;
                    width: 2px;
                    background-color: #333;
                    }
                    .close:before {
                    transform: rotate(45deg);
                    }
                    .close:after {
                    transform: rotate(-45deg);
                    }

            `;

    return function ({
      modalHeight,
      modalWidth,
      heading,
      cssStr,
      content,
      cssClass = [],
    }) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const popUpHeight = modalHeight || 300;
      const popUpWidth = modalWidth || 300;
      const additionalMargin = 20;
      const style = document.createElement("style");
      style.innerHTML = defaultStyle + cssStr;
      style.id = "style-container";
      document.body.appendChild(style);

      document.addEventListener("click", function (evt) {
        document.querySelector(".modal-generator") &&
          document.body.removeChild(document.querySelector(".modal-generator"));
        // document.getElementById('style-container') && document.body.removeChild(document.getElementById('style-container'))
        const div = document.createElement("div");
        cssClass.push("modal-generator");
        div.classList.add(...cssClass);
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
    <header>${heading} <span class="close" onClick="console.log('cross clicked')"> </span> </header>
    <section class="main-section">
    ${content}
    </section>`;
        document.body.appendChild(div);
      });
    };
  })();

  generatePopUpHandler({
    modalHeight: 200,
    modalWidth: 300,
    heading: "Modal Heading",
    content: `<p>
      sdsadsdsd as
      dasssdsdsd sd asd asdsadsds <span>hasjhdjksad kasdkasd</span> 
      asd as
      dasd</p>`,
    cssClass: ["myClass", "test-classing"],
    cssStr: `.myClass {
        background-color: 'red';
    }`,
  });
};
// export default generatePopUpHandler;
