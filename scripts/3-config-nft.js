import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xDF98177d9924D5c7bb1Fa7433aA058F71e5B9d4D",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "DL doggie lover",
        description: "This epic brand new NFT will give you access to DOGGIE_DAO!",
        image: readFileSync("scripts/assets/perrito.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()