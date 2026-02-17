'use client';

import { CldImage, type CldImageProps } from 'next-cloudinary';

/**
 * Optimized Cloudinary image. Uses NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME.
 * Pass `src` as your Cloudinary public_id (e.g. "portfolio/hero" or "folder/image").
 */
export function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
