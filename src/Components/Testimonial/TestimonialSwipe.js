import { TestimonialList } from "./TestimonialList";

const TestimonialSwipe = () => {
  return (
    <div>
      <div className="flex  flex-col lg:flex-row mt-10 pb-10 gap-5 justify-center items-center mx-10 text-gray-400 ">
        {TestimonialList.map((items) => {
          return (
            <div key={items.id}>
              <div className={items.style}>
                <h1 className="text-3xl font-bold  pb-1">{items.name}</h1>
                <p className=" text-xl font-semibold pb-5">{items.Work}</p>

                <p>{items.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSwipe;
