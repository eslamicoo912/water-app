async function loadModel() {
  model = undefined;
  model = await tf.loadLayersModel("");
  console.log("model loaded");
}
loadModel();

function make_prediction() {
  let a, b, c, output;

  a = Number(document.getElementById("VAR").value);
  b = Number(document.getElementById("Country").value);
  c = Number(document.getElementById("Year").value);

  const input = tf.tensor([a, b, c], [1, 1, 1]);
  output = model.predict(input);
  const outputData = output.dataSync();
  document.getElementById("answer").value = outputData[0];
}
