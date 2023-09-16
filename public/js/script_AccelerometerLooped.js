model = undefined;
async function loadModel() {
  model = await tf.loadLayersModel("");
  console.log("model loaded");
}
loadModel();

function make_prediction() {
  let a, b, c, d, e, f, g, h, output;

  a = Number(document.getElementById("value1").value);
  b = Number(document.getElementById("value2").value);
  c = Number(document.getElementById("value3").value);
  d = Number(document.getElementById("value4").value);
  e = Number(document.getElementById("value5").value);
  f = Number(document.getElementById("value6").value);
  g = Number(document.getElementById("value7").value);
  h = Number(document.getElementById("value8").value);

  const input = tf.tensor([a, b, c, d, e, f, g, h], [1, 8, 1]);
  output = model.predict(input);
  const outputData = output.dataSync();
  document.getElementById("answer").value = outputData[0];
}
