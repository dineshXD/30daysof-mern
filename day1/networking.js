//u can use https but we are using here localhost so can not use https so
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text-plain" });
  res.end("hello World");
});
server.listen(5000);

///// CALLBACK EXAMPLE
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);
//   https.get(`https://dog.ceo/api/breed/${data}/images/random`, (res) => {
//     res.on("data", (d) => {
//       const data = JSON.parse(d);
//       console.log(data.message);
//       fs.writeFile("dog-img.txt", data.message.toString(), (err) => {
//         console.log("Random dog image saved to file");
//       });
//     });
//   });
// });

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Could not write file");
      resolve("Success");
    });
  });
};
////// PROMISE EXAMPLE
// readFilePro(`${__dirname}/dogrr.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     https.get(`https://dog.ceo/api/breed/${data}/images/random`, (res) => {
//       res.on("data", (d) => {
//         const data = JSON.parse(d);
//         console.log(data.message);
//         writeFilePro("dog-img.txt", data.message.toString()).then(() => {
//           console.log("Random dog image saved to file!");
//         });
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getDogPic = async () => {
  const data = await readFilePro(`${__dirname}/dog.txt`);
  console.log(`Breed: ${data}`);

  await writeFilePro("dog-img.txt", data.message.toString());
  console.log("Random dog image saved to file!");
};
// getDogPic();
