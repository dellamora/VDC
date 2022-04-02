export default interface FormInterface {
  name: string;
  tag: string;
  email: string;
  members: {
    twitter: string;
    username: `${string} #${string}`;
  }[];
  cardVariation: number;
  image: string;
}
