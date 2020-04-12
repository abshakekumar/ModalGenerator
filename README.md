# ModalGenerator

Pop Up Creator on Click. Pass allowed selectors and whenever clicked on the
specified selector a pop-up is generated at the cursor point. It can be used for showing tool tip on a click of some container, section.

## Demo

- [CodeSandBox Demo](https://www.google.com)
- [Stackblitz Demo](https://www.google.com)

# Installation

`npm i modal-generator --save`

Then, we can use as the following

```
import { ModalGenerator } from "modal-generator";

ModalGenerator({
      modalHeight: 400,
      modalWidth: 400,
      heading: "Types of actions",
      content: `Dialog content`,
      cssClass: ["myClass", "test-class-to-be-applied"],
      allowedSelectorsClick: [".typography-demo", ".only-open-modal-on-click-of-these-selector"],
      cssStr: `.myClass {
          background-color: #ececec;
      }`,
    });
```

Detailed usage of the `model-generator` can be seen via the demo examples.

## Options

| Option                | Description                                                                                    | Default Value |
| --------------------- | ---------------------------------------------------------------------------------------------- | ------------- |
| modalHeight           | height of the modal                                                                            | 150           |
| modalWidth            | width of the modal                                                                             | 300           |
| heading               | heading for the modal, if heading is specified a cross icon is generated for closing the modal | ''            |
| content               | content of the modal, can accept HTML provided as string                                       | ''            |
| cssClass              | array of css class that will applied to the modal container                                    | []            |
| allowedSelectorsClick | array specifying only these selector to open modal when clicked inside.                        | []            |
| cssStr                | additional css can also be passed as string that will be applied on the modal html structure   | ''            |
