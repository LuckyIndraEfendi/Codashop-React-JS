const CheckOutSkeletonLoading = () => {
  return (
    <>
      <div className="grid md:grid-cols-5 gap-5 relative">
        <div className="md:col-span-2 h-[80vh] opacity-70 bg-slate-400 rounded-lg w-full bg-skeleton-shine bg-shine-width bg-no-repeat animate-shine_loading"></div>
        <div className="md:col-span-3 flex flex-col gap-5 ">
          <div className="flex-col gap-5 h-[30vh] opacity-70 bg-slate-400 rounded-lg w-full bg-skeleton-shine bg-shine-width bg-no-repeat animate-shine_loading"></div>
          <div className="flex-col gap-5 h-[47vh] opacity-70  bg-slate-400 rounded-lg w-full bg-skeleton-shine bg-shine-width bg-no-repeat animate-shine_loading"></div>
        </div>
      </div>
    </>
  );
};

export default CheckOutSkeletonLoading;
