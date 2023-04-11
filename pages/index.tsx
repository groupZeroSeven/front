import { ProductCard } from '@/src/components/ProductCard';

export default function Home() {
  return (
    <ProductCard
      img="/image/car.png"
      title="Product title stays here - max 1 line Product title stays here - max 1 line"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem"
      imageProfile="/image/profile.png"
      nameProfile="Diego Monteiro"
      km="100 KM"
      age="2019"
      price="R$00.000,00"
    />
  );
}
