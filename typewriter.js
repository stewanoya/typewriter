const sentence = "hello there from lighthouse labs\n";

let typewriter = () => {
  let timer = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(`${char}`);
    }, timer);
    timer += 50;
  }
};

typewriter(sentence);
