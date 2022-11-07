import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen justify-center items-center bg-[#090B1A]">
      <div className="container w-3/4 flex flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 bg-[#AE4EE9] lg:rounded-r-lg lg:rounded-none rounded-t-lg">
          <picture>
            <source
              media="(min-width: 900px)"
              srcset="images/image-header-desktop.jpg"
            />
            <img
              src="images/image-header-mobile.jpg"
              alt="Imagen mobile"
              className="h-full w-full lg:rounded-r-lg rounded-t-lg lg:rounded-none opacity-60"
            />
          </picture>
        </div>
        <div className="text-center p-5 bg-[#15123F] lg:w-1/2 lg:text-left lg:px-14 lg:rounded-l-lg rounded-b-lg lg:rounded-none">
          <h1 className="font-bold text-3xl text-white lg:text-4xl lg:pt-8">
            Get <span className="text-purple-600">insights</span> that help your
            business grow.
          </h1>
          <p className="text-[#BFBFBF] pt-5 text-base lg:text-lg lg:pt-10 2xl:text-xl">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="py-5 lg:flex lg:justify-between lg:pt-20 xl:pr-14 2xl:pt-60">
            <div>
              <p className="text-white text-xl font-bold">10k+</p>
              <p className="uppercase text-[#999999] text-sm pb-5">companies</p>
            </div>
            <div>
              <p className="text-white text-xl font-bold">314</p>
              <p className="uppercase text-[#999999] text-sm pb-5">templates</p>
            </div>
            <div>
              <p className="text-white text-xl font-bold">12M+</p>
              <p className="uppercase text-[#999999] text-sm">queries</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
/* #AE4EE9 accent */
