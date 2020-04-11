window.onload = function () {
  const generateModal = (function generateModal() {
    const modalGeneralClass = "modal-generator";
    const checkClickedInsideElement = (selector, targetElm) => {
      return targetElm.closest(selector);
    };

    const removeModal = () => {
      document.querySelector(`.${modalGeneralClass}`) &&
        document.body.removeChild(document.querySelector(`.${modalGeneralClass}`));
    };

    const defaultStyle = `.${modalGeneralClass} {
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
                .${modalGeneralClass} > header {
                    font-size: 1.2rem;
                    color: rgba(0,0,0,0.87);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .${modalGeneralClass} > .main-section {
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
    const style = document.createElement("style");
    style.innerHTML = defaultStyle;
    style.id = "style-container";
    document.body.appendChild(style);

    return function ({
      modalHeight = 150,
      modalWidth = 300,
      heading = '',
      cssStr = '',
      content = '',
      allowedSelectorsClick,
      closeOnOutsideClick = false,
      cssClass = [],
      useHover = false
    }) {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const popUpHeight = modalHeight;
      const popUpWidth = modalWidth;
      const additionalMargin = 20;
      document.querySelector('#style-container').innerHTML = defaultStyle + cssStr;

      function handleModalGenerator(evt) {
        if (checkClickedInsideElement(`.${modalGeneralClass}`, evt.target)) {
          checkClickedInsideElement('.close', evt.target) && removeModal();
          return;
        }
        if (allowedSelectorsClick && allowedSelectorsClick.filter(x => checkClickedInsideElement(x, evt.target)).length) {
          removeModal();
          evt.preventDefault();
          evt.stopPropagation();
          const sectionContent = evt.target.tagName.toLowerCase() === 'a' ? `<iframe style="height: 100%; width: 100%;" src='${evt.target.href}'> </iframe>` : content;
          const div = document.createElement("div");
          cssClass.unshift(modalGeneralClass);
          div.classList.add(...cssClass);
          div.style.height = `${popUpHeight}px`;
          div.style.width = `${popUpWidth}px`;
          div.style.position = "absolute";
          const evtClickedCoordinate = evt.pageY;
          div.style.left = `${
            evt.clientX + popUpWidth > windowWidth
              ? evt.clientX - popUpWidth - additionalMargin
              : evt.clientX + additionalMargin
            }px`;
          div.style.top = `${
            evtClickedCoordinate + popUpHeight > windowHeight
              ? evtClickedCoordinate - popUpHeight
              : evtClickedCoordinate
            }px`;

          const headingTag = heading ? `<header><span>${heading}</span> <span class="close"> </span> </header>` : '';
          div.innerHTML = ` ${headingTag}
    <section class="main-section">
    ${sectionContent || content}
    </section>`;
          document.body.appendChild(div);
          return;
        };
      }

      document.addEventListener("click", handleModalGenerator);
      // useHover && document.addEventListener("mouseover", handleModalGenerator);
      // document.addEventListener("dblclick", handleModalGenerator);
    };
  })();

  generateModal({
    // modalHeight: 400,
    // modalWidth: 400,
    heading: "Types of actions",
    content: `Dialogs should contain a maximum of two actions.
If a single action is provided, it must be an acknowledgement action.
If two actions are provided, one must be a confirming action, and the other a dismissing action.
Providing a third action such as “Learn more” is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished`,
    cssClass: ["myClass", "test-classing"],
    allowedSelectorsClick: ['.allow', '.second-allow', 'a'],
    closeOnOutsideClick: true,
    // cssStr: `.myClass {
    //     background-color: #ececec;
    // }`,
  });


  generateModal({
    modalHeight: 200,
    modalWidth: 200,
    heading: "Another Modal",
    content: `Dialogs should contain a maximum of two actions.`,
    cssClass: ["myClass", "test-other-modal-container-class"],
    allowedSelectorsClick: ['.other-modal'],
    closeOnOutsideClick: true,
    // cssStr: `.myClass {
    //     background-color: #ececec;
    // }`,
  });

  generateModal({
    modalHeight: 50,
    modalWidth: 250,
    content: `Dialogs should contain a maximum of two actions. Can be shown the title or large text`,
    cssClass: ["myClass", "third-class-modal"],
    allowedSelectorsClick: ['.third-section'],
    closeOnOutsideClick: true,
    useHover: true,
    cssStr: `.third-class-modal {
        padding: 10px;
        background-color: #79aeb5;
    }`,
  });

};
