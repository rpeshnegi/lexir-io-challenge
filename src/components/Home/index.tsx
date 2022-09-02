import ProductCard from "@components/Product/ProductCard";
import styles from "@styles/Home.module.css";
import { TProduct } from "src/_types/product";
import Description from "./Description";

interface IHomeProps {
  bottles: TProduct[]
}
const Home = ({ bottles }: IHomeProps) => {
  return (
    <div className="container-xl mx-auto">
      <div className="mt-10 flex px-8">
        <Description />
        <div className="w-2/3 flex flex-col">
          <div className="flex justify-between pl-4 flex-wrap">
            {bottles.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
