function toTitleCase(str) {
  return str.length > 0 ? str.charAt(0).toUpperCase() + str.substring(1).toLowerCase() : str
}

export { toTitleCase }
