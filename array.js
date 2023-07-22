const colors = ["blue", "red", "purple", "brown"];
const sports = ["bowling", "basketball", "soccer"];
const temperatures = [13, 78, -3, 98, 50];

function temperature() {
  for (let i = 0; i < temperatures.length; i = i + 1)
    if (temperatures[i] <= 50) {
      console.log("it is cold at " + temperatures[i] + " degrees");
    } else console.log("it is hot at " + temperatures[i] + " degrees");
}
temperature();
