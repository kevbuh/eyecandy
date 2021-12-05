import * as mi from "@magenta/image";

const model = new mi.ArbitraryStyleTransferNetwork();
const contentImg = document.getElementById("content") as HTMLImageElement;
const styleImg = document.getElementById("style") as HTMLImageElement;
const stylizedCanvas = document.getElementById("stylized") as HTMLCanvasElement;

function stylize() {
  model.stylize(contentImg, styleImg).then((imageData) => {
    stylizedCanvas.getContext("2d").putImageData(imageData, 0, 0);
  });
}

model.initialize().then(stylize);

// // import "@tensorflow/tfjs-node";
// import React from "react";
// import Image from "next/image";

// import * as mi from '@magenta/image';
// const model = new mi.ArbitraryStyleTransferNetwork();
// const canvas = () => <HTMLCanvasElement>document.getElementById("stylized");
// // @ts-ignore: I don't care that it might not be a HTML Canvas Element
// const ctx = () => canvas.getContext("2d");
// const contentImg = () => document.getElementById("content");
// const styleImg = () => document.getElementById("style");
// const loading = () => document.getElementById("loading");
// const notLoading = () => document.getElementById("ready");

// setupDemo();

// function setupDemo() {
//   model.initialize().then(() => {
//     stylize();
//   });
// }

// async function clearCanvas() {
//   // Don't block painting until we've reset the state.
//   await mi.tf.nextFrame();
//   // window.requestAnimationFrame(draw().bind(null, ctx));
// // @ts-ignore: I don't care that it might not be a HTML Canvas Element

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   await mi.tf.nextFrame();
// }

// async function stylize() {
//   await clearCanvas();

//   // Resize the canvas to be the same size as the source image.
// // @ts-ignore: I don't care that it might not be a HTML Canvas Element

//   canvas.width = contentImg.width;
// // @ts-ignore: I don't care that it might not be a HTML Canvas Element

//   canvas.height = contentImg.height;

//   // This does all the work!
//   model.stylize(contentImg, styleImg).then((imageData) => {
//     stopLoading();
//     ctx.putImageData(imageData, 0, 0);
//   });
// }

// function loadImage(event, imgElement) {
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     imgElement.src = e.target.result;
//     startLoading();
//     stylize();
//   };
//   reader.readAsDataURL(event.target.files[0]);
// }

// function loadContent(event) {
//   loadImage(event, contentImg);
// }

// function loadStyle(event) {
//   loadImage(event, styleImg);
// }

// function startLoading() {
//   loading.hidden = false;
//   notLoading.hidden = true;
//   canvas.style.opacity = 0;
// }

// function stopLoading() {
//   loading.hidden = true;
//   notLoading.hidden = false;
//   canvas.style.opacity = 1;
// }

// function Test() {
//   // if (process.env.NODE_ENV !== "production") {
//   //   // Don't actually send the errors to Sentry
//   //   sentryOptions.beforeSend = () => null;

//   //   // Instead, dump the errors to the console
//   //   sentryOptions.integrations = [
//   //     new SentryIntegrations.Debug({
//   //       // Trigger DevTools debugger instead of using console.log
//   //       debugger: false,
//   //     }),
//   //   ];
//   // }

//   // Sentry.init(sentryOptions);

//   return (
//     <main>
//       <h1>
//         <b>Arbitrary</b> Style Transfer with{" "}
//         <a href="https://www.npmjs.com/package/@magenta/image">magenta.js</a>
//       </h1>

//       <div>
//         <div>
//           <h2>
//             Step 1.{" "}
//             <label>
//               upload photo <input type="file" onChange="loadContent(event)" />
//             </label>
//           </h2>
//           <Image
//             width="1000vw"
//             alt={"hello1"}
//             height={300}
//             layout="responsive"
//             objectFit="contain"
//             id="content"
//             class="image"
//             crossorigin="anonymous"
//             src="/public/donda2.jpg"
//           />
//         </div>
//         <div>
//           <div>
//             <h2>
//               Step 2.{" "}
//               <label>
//                 upload style <input type="file" onChange="loadStyle(event)" />
//               </label>
//             </h2>
//             <Image
//               width="1000vw"
//               // alt={image.name}
//               alt={"hello2"}
//               height={300}
//               layout="responsive"
//               objectFit="contain"
//               id="style"
//               // className="image"
//               crossOrigin="anonymous"
//               // src="https://cdn.glitch.com/93893683-46da-4058-829c-a05792722f2b%2Fstyle.jpg?1545163447216"
//               src="/public/nahnahnah.jpg"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <h2>
//           Step 3. <span id="loading">Transmogrifying ...</span>
//           <span id="ready" hidden>
//             Profit!
//           </span>
//         </h2>
//         <canvas id="stylized" height="250px"></canvas>
//       </div>

//       <div></div>
//       {/* <script src="https://button.glitch.me/button.js"></script> */}
//     </main>
//   );
// }

// export default Test;
