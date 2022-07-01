import trophy from "../../assets/ico-trophy.png";
export default function TeamCrads({ team }) {
  const {
    Team_Id,
    Team_Name,
    Team_Short_Code,
    Team_logo,
    Stadium,
    Winning_year,
  } = team;
  return (
    <>
      <div className="bg-gradient-to-t from-violet-900 to-blue-700 text-white p-4 rounded-lg  h-72 md:h-96 shadow-lg shadow-slate-600 relative mt-4 hover:scale-110 transition delay-100 duration-200 hover:bg-gradient-to-r bg-slate-700-500 ">
        <div className="flex justify-center">
          <img src={Team_logo} alt="" />
        </div>
        <div className="text-center ">
          <div className=" mt-0 md:mt-10">
            <h3 className="text-2xl font-bold">{Team_Name}</h3>
            <h5 className="text-sm font- mt-4">{Stadium}</h5>
          </div>
          {Winning_year && (
            <div className="flex justify-center absolute p-4 bottom-0 right-0 left-0">
              <div className="mt-5">
                <div className="flex items-center justify-center bg-white p-3   rounded-full ">
                  <img className="h-4 inline-block" src={trophy} alt="" />
                  <span className="text-orange-600 text-xs ml-2 font-bold">
                    {Winning_year}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
