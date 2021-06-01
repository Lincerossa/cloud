export type TCardProps = {
  image: {
    src: string,
    alt: string,
    description?: string,
  },
  hasShadow?: boolean
  title: string,
  tags: string[],
  subtitles: string[],
  layout?: string,
}