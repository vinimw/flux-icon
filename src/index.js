const fluxIcons = (name, size = 16) => {
  try {
    return `./assets/${size}px/${name}-${size}px.svg`
  } catch (e) {
    console.error('File not found')
  }
}

export default fluxIcons
