import Image from 'next/image';

const CustomImage = (props: any) => {
  let { src, ...rest } = props;

  if (!src) {
    src = '/img/empty.jpg';
  }

  rest = {
    ...rest,
    style: {
      ...rest.style,
      objectFit: 'contain',
    },
  };

  return <Image src={src} {...rest} />;
};

export default CustomImage;
