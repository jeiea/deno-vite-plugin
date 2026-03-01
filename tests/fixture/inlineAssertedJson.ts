import data from "./inlineAssertedJson.json" with { type: "json" };

if (data.message === "it works") {
  console.log("it works");
}
