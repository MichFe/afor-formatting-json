const jsonData = {
  x: ["A", "B", "C"],
  real: [0.7, 5, 20],
  predicted: [0.8, 4.9, 22],
  average: 4,
  lift: 28.6,
};

const { x: lables, real, predicted } = jsonData;

const dataset = lables.map((lable, i) => ({
  category: lable,
  real: real[i],
  predicted: predicted[i],
}));

console.log(dataset);
