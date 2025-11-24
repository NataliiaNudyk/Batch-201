import { ProductCard } from "../components/productCard";

const ProductPage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[273px] bg-(--primary-text)"></div>
      <div className="grid grid-cols-[repeat(12,1fr)] gap-x-6 px-10 ">
        <h2
          className="
          col-span-full
          mt-10
          mb-[52px]
          text-[64px] font-bold text-center
          bg-linear-to-r from-(--primary-text) to-(--primary-text-light) bg-clip-text text-transparent"
        >
          Каталог
        </h2>
        <aside className="col-start-1 col-end-3">
          <h2 className="font-bold text-[48px] text-(--primary-text) leading-14">Фільтри</h2>
          <div className="w-full h-px mb-8 bg-(--primary-text)"></div>
          <form>
    <fieldset className="flex flex-col text-(--gray) font-bold">
      <legend className="mb-2 text-[36px]">Колір</legend>
      
      <label className="flex gap-2 text-[24px]">
        <input type="radio" name="color" value="red" />
        Червоний
      </label>

      <label className="flex gap-2 text-[24px]">
        <input type="radio" name="color" value="blue" />
        Синій
      </label>

      <label className="flex gap-2 text-[24px]">
        <input type="radio" name="color" value="green" />
        Зелений
      </label>
    </fieldset>
          </form>
          <div className="w-full h-px mb-8 bg-(--primary-text)"></div>
        </aside>
        <div className="grid grid-cols-3 col-start-4 col-end-13 max-w-full gap-y-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
