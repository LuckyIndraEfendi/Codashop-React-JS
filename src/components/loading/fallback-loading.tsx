const FallBackLoading = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
        <div className="flex flex-col items-center">
          <img src="/diamond.png" alt="" width={100} height={100} />
          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-[#2f54d8] rounded-full animate-pulse"
              style={{ animation: "progress 1s infinite alternate" }}
            ></div>
          </div>
          <p className="mt-4 text-white text-lg">Memuat...</p>
        </div>
      </div>
    </>
  );
};

export default FallBackLoading;
