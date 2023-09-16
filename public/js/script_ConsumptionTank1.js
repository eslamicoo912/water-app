async function loadModel() {
  model = undefined;
  model = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/TheSolom/Water_Tasks/main/3%20Predict%20Water%20Consumption/model/Tank%201/model.json"
  );
  console.log("model loaded");
}
loadModel();

function make_prediction() {
  let a, b, c, d, e, f, output;

  a = Number(document.getElementById("entry_id").value);
  b = Number(document.getElementById("year").value);
  c = Number(document.getElementById("month").value);
  d = Number(document.getElementById("day").value);
  e = Number(document.getElementById("hour").value);
  f = Number(document.getElementById("minute").value);
  const input = tf.tensor([[[a, b, c, d, e, f]]]);
  output = model.predict(input);
  const outputData = output.dataSync();
  document.getElementById("answer").value = outputData[0];
}
