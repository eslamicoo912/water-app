async function loadModel() {
  model = undefined;
  model = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/TheSolom/Water_Tasks/main/2.2%20Water%20leaks%20Detection/Pressure/Looped/model/model.json"
  );
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

  const input = tf.tensor2d([[a, b, c, d, e, f, g, h]]);
  output = model.predict(input);
  const outputData = output.dataSync();
  document.getElementById("answer").value = outputData[0];
}
