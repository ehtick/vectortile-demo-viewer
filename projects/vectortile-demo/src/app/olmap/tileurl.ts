export type VectorTileUrl = { url: string; extension: string, OGCApi: string | undefined }
export const tileurlBGT: VectorTileUrl = {
  url: 'https://api.pdok.nl/lv/bgt/ogc/v1_0/tiles/NetherlandsRDNewQuad',
  extension: '.pbf',
  OGCApi: "https://api.pdok.nl/lv/bgt/ogc/v1",
}
export const tileurlBAG: VectorTileUrl = {
  url: 'https://api.pdok.nl/lv/bag/ogc/v1_0/tiles/NetherlandsRDNewQuad',
  extension: '.pbf',
  OGCApi: undefined
}

export const tileurlBestuur: VectorTileUrl = {
  url: 'https://api.pdok.nl/kadaster/bestuurlijkegebieden/ogc/v1_0/tiles/NetherlandsRDNewQuad',
  extension: '.pbf',
  OGCApi: undefined
}

export const tileurlTop10: VectorTileUrl = {
  url: 'https://api.pdok.nl/brt/top10nl/ogc/v1-preprod/tiles/NetherlandsRDNewQuad',
  extension: '.pbf',
  OGCApi: "https://api.pdok.nl/brt/top10nl/ogc/v1-preprod"
}


export function getSpriteImageUrl(url: string) {
  const spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1
  const sizeFactor = spriteScale == 0.5 ? '@2x' : ''
  return url + sizeFactor + '.png'
}

export function getSpriteDataUrl(url: string) {
  const spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1
  const sizeFactor = spriteScale == 0.5 ? '@2x' : ''
  return url + sizeFactor + '.json'
}
