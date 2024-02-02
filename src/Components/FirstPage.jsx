

function FirstPage() {
  return (
    <div className="flex flex-col items-center mx-auto w-full text-xs font-semibold bg-[#F0F1F7]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ae90676d536a915992d1d4e1aba4760f9e0ad96c4628ee328a95d20087bcc?apiKey=b473cf2f29bb4c68a9e2cda7c2c7e894&"className="self-stretch w-full aspect-[0.88] fill-red-500 lg:hidden"
      />
      <header className="mt-20 w-64 text-4xl leading-10 text-center text-[#0e2368]">
        <span className="font-bold">Discover the </span>
        <br />
        <span className="font-bold text-red-500">Best</span>{" "}
        <span className="font-bold text-[#0e2368]">Food and Drinks</span>
      </header>
      <div className="mt-7 leading-5 text-center font-open_sans font-normal text-gray-700 w-[249px]">
        Naturally made Healthcare Products for the better care & support of your
        body.
      </div>
      <button
        className="justify-center px-5 py-1 mt-8 text-xs font-bold tracking-normal leading-8 text-white whitespace-nowrap bg-red-500 rounded-[30px]"
        role="button"
      >
        <a href="#" aria-label="Explore Now">
          Explore Now!
        </a>
      </button>
      <form className="flex flex-col items-center self-stretch px-12 py-12 mt-16 w-full">
        <h2 className="mt-24 text-2xl leading-9 text-center font-poppins whitespace-nowrap text-[#0E2368]">
          About Us
        </h2>
        <div className="self-stretch mt-9 leading-5 text-center font-open_sans font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. t has survived not
          only five centuries.
        </div>{" "}
        <button
          className="justify-center px-6 mt-8 mb-16 tracking-wide leading-10 text-white whitespace-nowrap bg-red-500 rounded-3xl"
          role="button"
        >
          <a href="#" aria-label="Read More">
            Read More
          </a>
        </button>
      </form>
    </div>
  );
}

export default FirstPage;