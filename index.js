import METAPLEX, { keypair_secret } from "./connections/connections.js";
import { uploadMetadata } from "./uploads/uploadMetadata.js";

const main = async () => {
  console.log(
    "Public Key of Metadata uploader: ",
    keypair_secret.publicKey.toBase58()
  );
  const image_url =
    "https://shdw-drive.genesysgo.net/5yKkQ5sbDnSMSr4tZwkwcqwDztWLJup5EGN5afcd4hHc/4073.png";

  const METADATA_CONFIG = {
    name: "MEME BOT",
    symbol: "MBOT",
    desciption: "MEME BOT Deployment is gonna rock it",
    image: image_url,
    external_url: "www.memebot.com",
    seller_fee_basis_points: 0,
  };
  const tokenId = 0;
  const metadatauri = await uploadMetadata(METAPLEX, tokenId, METADATA_CONFIG);
  console.log(`Metadata URI : ${metadatauri}`);
};
main();
