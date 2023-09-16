model = undefined;
async function loadModel() {
  model = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/TheSolom/Water_Tasks/main/2.2%20Water%20leaks%20Detection/Hydrophone/Looped/model/model.json"
  );
  console.log("model loaded");
}
loadModel();

function make_prediction() {
  let a, b, c, d, e, f, g, h, i, j, k, l, output;

  try {
    a = Number(document.getElementById("value1").value);
    b = Number(document.getElementById("value2").value);
    c = Number(document.getElementById("value3").value);
    d = Number(document.getElementById("value4").value);
    e = Number(document.getElementById("value5").value);
    f = Number(document.getElementById("value6").value);
    g = Number(document.getElementById("value7").value);
    h = Number(document.getElementById("value8").value);
    i = Number(document.getElementById("value9").value);
    j = Number(document.getElementById("value10").value);
    k = Number(document.getElementById("value11").value);
    l = Number(document.getElementById("value12").value);

    const input = tf.tensor([a, b, c, d, e, f, g, h, i, j, k, l], [1, 12]);
    output = model.predict(input);
    const outputData = output.dataSync();
    document.getElementById("answer").value = outputData[0];
  } catch (err) {
    console.log(err);
  }
}
