import dotenv from 'dotenv'
dotenv.config()

export const IS_PREVIEW = process.env.NEXT_PUBLIC_IS_PREVIEW || '';
export const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
export const CONTENTFUL_PREVIEW_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN || '';
export const CONTENTFUL_DELIVERY_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN || '';