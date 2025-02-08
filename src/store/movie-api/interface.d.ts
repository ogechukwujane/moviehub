interface IMovie {
  category: string;
  description: string;
  favorite: string;
  id: string;
  image: string;
  likes: string;
  new: true;
  share: string;
  title: string;
  video: string;
}

interface IUpdateMovie {
  favorite: string;
  likes: string;
  share: string;
  id:string
}
