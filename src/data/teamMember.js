import allImage from 'data/allImages';
import shortid from 'shortid';

const {
  team: { img1, img2, img3, img4, img5, img6, img7, img8 },
} = allImage;

const member = [
  {
    id: shortid(),
    img: img1,
    name: 'John Doe',
    title: 'CEO',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img2,
    name: 'Jessica Doe',
    title: 'Marketing',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img3,
    name: 'Rick Edward Doe',
    title: 'Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img4,
    name: 'Melinda Doe',
    title: 'Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img5,
    name: 'Robert Doe',
    title: 'Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img6,
    name: 'Melissa Doe',
    title: 'Marketing',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img7,
    name: 'Janice Doe',
    title: 'Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    img: img8,
    name: 'Jenny Doe',
    title: 'Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac ligula mi, non suscipitaccumsan',
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
];

export default member;
