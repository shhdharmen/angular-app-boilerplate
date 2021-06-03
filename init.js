const fs = require("fs");

/** @type string[] */
var myArgs = process.argv.slice(2);

function updateReleaseYAML() {
  const filePath = "./.github/workflows/release.yaml";
  /** @type string */
  let buff = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

  buff = buff.replace("Mr. Dharmen's Bot", myArgs[0]);
  buff = buff.replace("shhdharmen@gmail.com", myArgs[1]);

  fs.writeFileSync(filePath, buff, {
    encoding: "utf-8",
  });
}

function updateLicense() {
  const filePath = "./LICENSE";
  /** @type string */
  let buff = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

  buff = buff.replace("Dharmen Shah", myArgs[2]);

  fs.writeFileSync(filePath, buff, {
    encoding: "utf-8",
  });
}

function updateCodeOfConduct() {
  const filePath = "./CODE_OF_CONDUCT.md";
  /** @type string */
  let buff = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

  buff = buff.replace("shhdharmen@gmail.com", myArgs[1]);

  fs.writeFileSync(filePath, buff, {
    encoding: "utf-8",
  });
}

function updatePackageJSON() {
  const filePath = "./package.json";
  /** @type string */
  let buff = fs.readFileSync(filePath, {
    encoding: "utf-8",
  });

  buff = buff.replace("1.0.0", "0.0.0");

  fs.writeFileSync(filePath, buff, {
    encoding: "utf-8",
  });
}

updateReleaseYAML();
updateLicense();
updateCodeOfConduct();
updatePackageJSON();

fs.unlinkSync("./init.js");
