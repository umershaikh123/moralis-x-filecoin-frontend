/** @format */

import { NFTStorage } from "nft.storage";

// read the API key from an environment variable. You'll need to set this before running the example!
const API_KEY = process.env.NFT_STORAGE_API_KEY;

// For example's sake, we'll fetch an image from an HTTP URL.
// In most cases, you'll want to use files provided by a user instead.

async function storeExampleNFT() {
  const NFT_Image = document.getElementById("NFT"); // image inputed in a form

  // use custom metaData
  const nft = {
    // image, // use image Blob as `image` field
    image: NFT_Image,

    name: "Storing the World's Most Valuable Virtual Assets with NFT.Storage",
    description: "The metaverse is here. Where is it all being stored?",
  };

  const client = new NFTStorage({ token: API_KEY });
  const metadata = await client.store(nft);

  console.log("NFT data stored!");
  console.log("Metadata URI: ", metadata.url);
}

storeExampleNFT();

// store
// get ipfs uri
// mint

// properties: {
//   origins: {
//     http: "https://blog.nft.storage/blog/post/2021-11-30-hello-world-nft-storage/",
//     ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/",
//   },
// },
/** @format */

// // Import the NFTStorage class and File constructor from the 'nft.storage' package
// import { NFTStorage, File } from "nft.storage";

// // The 'mime' npm package helps us set the correct file type on our File objects
// import mime from "mime";

// // The 'fs' builtin module on Node.js provides access to the file system
// import fs from "fs";

// // The 'path' module provides helpers for manipulating filesystem paths
// import path from "path";

// // Paste your NFT.Storage API key into the quotes:
// const NFT_STORAGE_KEY = "REPLACE_ME_WITH_YOUR_KEY";

// /**
//  * Reads an image file from `imagePath` and stores an NFT with the given name and description.
//  * @param {string} imagePath the path to an image file
//  * @param {string} name a name for the NFT
//  * @param {string} description a text description for the NFT
//  */
// async function storeNFT(imagePath, name, description) {
//   // load the file from disk
//   const image = await fileFromPath(imagePath);

//   // create a new NFTStorage client using our API key
//   const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

//   // call client.store, passing in the image & metadata
//   return nftstorage.store({
//     image,
//     name,
//     description,
//   });
// }

// /**
//  * A helper to read a file from a location on disk and return a File object.
//  * Note that this reads the entire file into memory and should not be used for
//  * very large files.
//  * @param {string} filePath the path to a file to store
//  * @returns {File} a File object containing the file content
//  */
// async function fileFromPath(filePath) {
//   const content = await fs.promises.readFile(filePath);
//   const type = mime.getType(filePath);
//   return new File([content], path.basename(filePath), { type });
// }

// /**
//  * The main entry point for the script that checks the command line arguments and
//  * calls storeNFT.
//  *
//  * To simplify the example, we don't do any fancy command line parsing. Just three
//  * positional arguments for imagePath, name, and description
//  */
// async function main() {
//   const args = process.argv.slice(2);
//   if (args.length !== 3) {
//     console.error(
//       `usage: ${process.argv[0]} ${process.argv[1]} <image-path> <name> <description>`
//     );
//     process.exit(1);
//   }

//   const [imagePath, name, description] = args;
//   const result = await storeNFT(imagePath, name, description);
//   console.log(result);
// }

// // Don't forget to actually call the main function!
// // We can't `await` things at the top level, so this adds
// // a .catch() to grab any errors and print them to the console.
// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });
