const sentence = "Hello there from Lighthouse Labs";
let speed = 50;


for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, speed);
  speed += 50;
}
