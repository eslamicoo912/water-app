async function loadModel() {
  model = undefined;
  model = await tf.loadLayersModel(
    "https://raw.githubusercontent.com/TheSolom/Water_Tasks/79bec223efbaa26347e022030c5f6a328318c576/1.1%20Water%20Portability%20Prediction/model/model.json"
  );
  console.log("model loaded");
}
loadModel();

function make_prediction() {
  let a, b, c, d, e, f, g, h, i, output;
  try {
    a = Number(document.getElementById("ph").value);
    b = Number(document.getElementById("hardness").value);
    c = Number(document.getElementById("solids").value);
    d = Number(document.getElementById("chloramines").value);
    e = Number(document.getElementById("sulfate").value);
    f = Number(document.getElementById("conductivity").value);
    g = Number(document.getElementById("organic_carbon").value);
    h = Number(document.getElementById("trihalomethanes").value);
    i = Number(document.getElementById("turbidity").value);

    const input = tf.tensor([[a, b, c, d, e, f, g, h, i]]);
    output = model.predict(input);
    const outputData = output.dataSync();
    document.getElementById("answer").value = outputData[0];
  } catch (err) {
    console.log(err);
  }
}
