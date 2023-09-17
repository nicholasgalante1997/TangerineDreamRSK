function formatImportMetaUrl() {
  return import.meta.url // file:///home/.../app/src/tokens/formatImportMetaUrl.mjs
    .replace('file://', '') // /home/.../app/src/tokens/formatImportMetaUrl.mjs
    .split('/') // ['home', ..., 'app', 'src', 'tokens', 'formatImportMetaUrl.mjs']
    .slice(0, -2) // ['home', ..., 'app', 'src']
    .join('/') // /home/.../app/src
}

export { formatImportMetaUrl }
