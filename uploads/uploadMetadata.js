export async function uploadMetadata(METAPLEX, tokenId, config) {
  const name = config.name + tokenId;
  const { uri } = await METAPLEX.nfts().uploadMetadata({
    name: name,
    description: config.description,
    symbol: config.symbol,
    image: config.image,
    external_url: config.external_url,
    sellerFeeBasisPoints: config.seller_fee_basis_points,
  });
  return uri;
}
