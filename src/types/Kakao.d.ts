export interface Kakao {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: {
    createDefaultButton: (options: {
      container: string;
      objectType: string;
      content: {
        title: string;
        description: string;
        imageUrl: string;
        link: {
          webUrl: string;
        };
      };
      social: {
        likeCount: number;
        commentCount: number;
        sharedCount: number;
      };
      buttons: {
        title: string;
        link: {
          webUrl: string;
        };
      }[];
    }) => void;
  };
}

declare global {
  interface Window {
    Kakao: Kakao;
  }
}
