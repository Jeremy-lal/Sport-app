export class Video {
  video: {
    channelId: string,
    channelName: string,
    description: string,
    lengthText: string,
    publishedTimeText: string,
    thumbnails: Thumbnail[],
    title: string,
    videoId: string,
    viewCountText: string
  }
}

interface Thumbnail {
  height: number,
  url: string,
  width: number
}
