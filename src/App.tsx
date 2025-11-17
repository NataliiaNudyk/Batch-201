import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { AgeGate } from "./pages/AgeGate";
import { Header } from "./components/header";


export default function App() {
  // const labels = [
  //   { name: 'Batch', value: '7011' },
  //   { name: 'Колір', value: 'Червоне' },
  //   { name: 'Винтаж', value: '1980' },
  //   { name: 'Вид', value: 'Кріплене' },
  //   { name: 'Тип', value: 'Напівсолодке' },
  //   { name: 'Сорт Винограду', value: 'Португальський бленд' },
  //   { name: 'Ємність', value: '750 мл' },
  //   { name: 'Виробник', value: 'Taylor’s Port' },
  //   { name: 'Регіон', value: 'Португалія, Дору' },
  //   { name: 'Варіант упаковки', value: 'Подарунковий тубус' },

  // ];

  const [ageConfirmed, setAgeConfirmed] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("ageConfirmed");
    if (saved === "true") setAgeConfirmed(true);
  }, []);

  

  return (
      <div>
        {ageConfirmed === null && <AgeGate setAgeConfirmed={setAgeConfirmed} />}
          <Header />
        <main className="flex justify-center">
          <Outlet />
        </main>
      </div>
  );
}
