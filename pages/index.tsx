import { ProductCard } from '@/src/components/ProductCard';
import { Header } from '@/src/components/header';

export default function Home() {
  return (
    <>
      <Header />

      <button>
        <ProductCard
          img="/image/car.png"
          title="Car"
          desc="Lorem ipsum dolor sit amet, consectetur adip"
          imageProfile="/image/profile.png"
          nameProfile="Diego"
          km="10"
          age="2022"
          price="R$10000"
        />
      </button>
    </>
  );
}
