model = undefined;
async function loadModel() {
  model = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/TheSolom/Water_Tasks/main/2.1%20Water%20level%20prediction/model/model.json"
  );
  console.log("model loaded");
}
loadModel();

function make_prediction() {
  let a, output;

  a = Number(document.getElementById("Hour").value);
  const input = tf.tensor([a], [1, 1, 1]);
  output = model.predict(input);
  const outputData = output.dataSync();
  document.getElementById("answer").value = outputData[0];
}

// tf.model
//   .load(
//     "https://github.com/TheSolom/Water_Tasks/blob/88e2089b04e7eefc27c64303b878502a7bdc91bd/3%20Predict%20Water%20Consumption/model/Tank%201/model.json"
//   )
//   .then((model) => {
//     model.summary();
//     let input = tf.tensor2d([[44.0, 1980 - 0o1 - 0o1]]);
//     let output = model.predict(input);

//     output.print();
//   })
//   .catch((err) => console.log(err));
