import React, { useEffect, useState } from "react";
import { IndividualPlaceCard } from "./IndividualPlaceCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const PlaceCard = () => {
  const hotels = useSelector((state) => state.hotelFeature.hotels);
  const isFreeCancellable = useSelector(
    (state) => state.filterFeature.is_free_cancellable
  );
  const hasFreeParking = useSelector(
    (state) => state.filterFeature.has_free_parking
  );
  let lowToHigh = useSelector((state) => state.filterFeature.lowToHigh);

  let hotel1 = hotels.map((obj1) => {
    return obj1;
  });
  let hotel2 = hotels.map((obj1) => {
    return obj1;
  });

  const loading = useSelector((state) => state.hotelFeature.loading);
  const error = useSelector((state) => state.hotelFeature.error);

  const [allHotels, setAllHotels] = useState([]);
  const [lowToHighHotels, setlowToHighHotels] = useState([]);
  const [highToLowHotels, sethighToLowHotels] = useState([]);
  const [finalHoteList, setfinalHoteList] = useState([]);
  const [DescHowItisSorted, setDescHowItisSorted] = useState(null);
  const [TextisFreeCancellable, setTextisFreeCancellable] = useState(false);
  const [TexthasFreeParking, setTexthasFreeParking] = useState(false);

  console.log("Hotel 1 : "); //for testing purpose only
  hotel1.map((hotel) => {
    // if (
    // TextisFreeCancellable === hotel.is_free_cancellable ||
    // TexthasFreeParking === hotel.has_free_parking

    // )
    // console.log(TextisFreeCancellable)
    console.log(Boolean(hotel.is_free_cancellable) == TextisFreeCancellable);
  });
  console.log("Hotel 2 : "); //for testing purpose only
  hotel2.map((hotel) => {
    if (
      TextisFreeCancellable === hotel.is_free_cancellable ||
      TexthasFreeParking === hotel.has_free_parking
    )
      console.log(hotel);
  });

  // let newhotel1 = hotel1.filter(
  //   (hotel) =>
  //     TextisFreeCancellable === hotel.is_free_cancellable ||
  //     TexthasFreeParking === hotel.has_free_parking
  // );

  // let newhotel2 = hotel2.filter(
  //   (hotel) =>
  //     Boolean(TextisFreeCancellable) === hotel.is_free_cancellable ||
  //     Boolean(TexthasFreeParking) === hotel.has_free_parking
  // );
  hotel1.sort(
    (a, b) =>
      a.price_breakdown.all_inclusive_price -
      b.price_breakdown.all_inclusive_price
  );
  hotel2.sort(
    (a, b) =>
      b.price_breakdown.all_inclusive_price -
      a.price_breakdown.all_inclusive_price
  );
  console.log("hotel1 : ", hotel1);
  useEffect(() => {
    setAllHotels(hotels);

    // sethighToLowHotels(newhotel1);
    // setlowToHighHotels(newhotel2);

    console.log("---------------------------");
    // console.log("newHotel1 : ", newhotel1);
    // console.log("newHotel2 : ", newhotel2);
    setfinalHoteList(lowToHigh === false ? hotel2 : hotel1);
    setDescHowItisSorted(lowToHigh === false ? "High to Low" : "Low to High");
    setTexthasFreeParking(hasFreeParking === false ? "false" : "true");
    setTextisFreeCancellable(isFreeCancellable === false ? "false" : "true");
    console.log(`hasFreeParking :${hasFreeParking}`);
    console.log(`isFreeCancellable :${isFreeCancellable}`);
    console.log("---------------------------");
  }, [
    hotels,
    loading,
    error,
    lowToHigh,
    isFreeCancellable,
    hasFreeParking,
    TexthasFreeParking,
    TextisFreeCancellable,
  ]);

  return (
    <div className=" w-full ml-2 h-full">
      <div className="w-full ">
        {loading && (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Loading the Hotel Info 🔃....
          </div>
        )}
        {!loading && error && (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Error in loading the data 🥹....
          </div>
        )}
        {hotels.length > 0 && (
          <div className="text-3xl w-full  rounded-lg my-2  flex justify-center items-center text-bold">
            {DescHowItisSorted} 📃....
            <br />
            TextisFreeCancellable: {TextisFreeCancellable}
            <br />
            TexthasFreeParking :{TexthasFreeParking}
          </div>
        )}

        {loading === false && !error && hotels.length === 0 ? (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            Fill the form above to load hotel info 🛎️🏩....
          </div>
        ) : (
          // TODO : country_trans should be == "India"

          finalHoteList.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  hotel_id={hotel.hotel_id}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={hotel.price_breakdown.all_inclusive_price}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
