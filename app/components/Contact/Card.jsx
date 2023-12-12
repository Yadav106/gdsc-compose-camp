import cardData from "./data";

const Card = () => {
  return (
    <>
      {cardData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex flex-col mt-4 items-center justify-between">
            <img className="w-[160px]" src={data.img} alt="lead-img" />
            <div className="my-4 text-center">
              <h1>{data.name}</h1>
              <p className="text-gray-500 text-xs">{data.pos}</p>
            </div>
            <div className="socials flex gap-4">
              {data.socials.map((link, index) => {
                return (
                  <a key={index} target="_blank" href={link.socialUrl}>
                    <img src={link.imgUrl}></img>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
