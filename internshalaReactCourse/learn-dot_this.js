const waitSome = (timeOut) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Resolve kardia NO tension");
      } else {
        reject(new Error("Reject hogya bhai sorry"));
      }
    }, timeOut);
  });
};

waitSome(1000)
  .then((val) => {
    console.log(1000 / 1000, " seconds passed");
    return { pako: "lady perman" };
  })
  .then((val) => {
    console.log("yeah we came here with value =", val);
  })
  .catch((err) => {
    console.log("ye error aya", err);
  });
