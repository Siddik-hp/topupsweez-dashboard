import React from "react";

const ArenaOfValor = () => {
  return (
    <div className="w-full h-screen items-center flex ">
      <form
        method="POST"
        // onSubmit={InGameSubmit}
        className="lg:w-1/3 w-2/3 p-4 shadow-xl rounded-lg mx-auto"
      >
        <div className=" flex flex-col mb-6 -mt-20">
          <input
            type="number"
            name="voucher"
            placeholder="Voucher"
            autoComplete="off"
            className="p-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col mb-6">
          <input
            type="number"
            name="voucher-offer"
            placeholder="Offer"
            autoComplete="off"
            className="p-2 rounded-lg outline-none"
          />
        </div>
        <div className="flex flex-col mb-6">
          <input
            type="number"
            name="voucher-price"
            placeholder="Price"
            autoComplete="off"
            className="p-2 rounded-lg outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-lg shadow-lg w-full bg-pink-500 text-white  hover:bg-pink-700 border-none outline-none"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ArenaOfValor;
