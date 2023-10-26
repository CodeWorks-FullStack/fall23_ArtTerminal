export class Project {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.coverImg = data.coverImg;
    this.projectImgs = data.projectImgs;
    this.creator = data.creator;
  }
}

const project = {
  _id: "64b961cdeb84f17d842ec4f9",
  title: "FASTEST CARS IN THE UNIVERSE",
  coverImg:
    "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  creatorId: "649b15df024908ebc1ffe602",
  projectImgs: [
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
    "https://media.tenor.com/EgMfjYtMD3oAAAAM/car-jump.gif",
  ],
  createdAt: "2023-07-20T16:33:17.085Z",
  updatedAt: "2023-07-20T16:33:17.085Z",
  __v: 0,
  creator: {
    _id: "649b15df024908ebc1ffe602",
    subs: ["auth0|649b15dfeca66e8683e55ea8"],
    email: "liljeremy@lil.jeremy",
    name: "LIL JEREMY 🐀",
    picture: "https://64.media.tumblr.com/tumblr_m0ai0nrErM1r03kk7o1_500.jpg",
    bio: "The raddest dude. Also the littlest dude.",
    coverImg: "https://i.gifer.com/9ZNS.gif",
    github: "",
    linkedin: "https://www.youtube.com/watch?v=c9eipcOFEhY",
    resume: "",
    class: "",
    graduated: true,
    createdAt: "2023-06-27T17:01:48.349Z",
    updatedAt: "2023-07-20T17:29:12.030Z",
    __v: 0,
    id: "649b15df024908ebc1ffe602",
  },
  id: "64b961cdeb84f17d842ec4f9",
};
