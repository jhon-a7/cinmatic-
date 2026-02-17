/**
 * Cloudinary server-side config (API key/secret must stay server-side only).
 * Used for uploads, admin API, and signed URLs.
 */
export function getCloudinaryConfig() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  return {
    cloudName: cloudName || '',
    apiKey: apiKey || '',
    apiSecret: apiSecret || '',
    isConfigured: Boolean(cloudName && apiKey && apiSecret),
  }
}

/** Base URL for Cloudinary delivery (no secret needed, safe for client) */
export function getCloudinaryBaseUrl() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  if (!cloudName) return ''
  return `https://res.cloudinary.com/${cloudName}`
}

/** Build a Cloudinary image URL with optional transformations */
export function getCloudinaryImageUrl(
  publicId: string,
  options?: { width?: number; height?: number; crop?: string; quality?: string }
) {
  const base = getCloudinaryBaseUrl()
  if (!base) return ''
  const opts = options || {}
  const transforms: string[] = []
  if (opts.width) transforms.push(`w_${opts.width}`)
  if (opts.height) transforms.push(`h_${opts.height}`)
  if (opts.crop) transforms.push(`c_${opts.crop}`)
  if (opts.quality) transforms.push(`q_${opts.quality}`)
  const tr = transforms.length ? transforms.join(',') + '/' : ''
  return `${base}/image/upload/${tr}${publicId}`
}
