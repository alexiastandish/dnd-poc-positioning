import ShelfBuilderContextProvider from "./example/context/ShelfBuilderContext";
import App from "./example/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      <main className="flex gap-8 row-start-2 items-center sm:items-start ">
        {/* <FormBuilder /> */}
        <ShelfBuilderContextProvider>
          <App />
        </ShelfBuilderContextProvider>
      </main>
    </div>
  );
}
