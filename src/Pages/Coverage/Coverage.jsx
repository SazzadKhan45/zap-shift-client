import MyContainer from "../../Components/MyContainer";
import { FaSearch } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
  //
  const position = [23.8103, 90.4125];
  const serviceCenterLOcation = useLoaderData();
  const mapRef = useRef(null);
  //   console.log(serviceCenterLOcation);

  //
  const handleSearch = (e) => {
    e.preventDefault();
    //
    const location = e.target.search.value;

    const district = serviceCenterLOcation.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 12);
      e.target.reset();
    }
  };

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     const location = e.target.search.value;

  //     //
  //     const district = serviceCenterLOcation.find((center) =>
  //       center.district.toLowerCase().includes(location.toLowerCase())
  //     );

  //     //
  //     if (district) {
  //       const coord = [district.latitude, district.longitude];
  //       mapRef.current.flyTo(coord, 12);
  //       e.target.reset();
  //     }
  //   };

  //
  return (
    <div className="bg-gray-100 py-10 px-2 md:px-0">
      <MyContainer>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          We are available in 64 districts
        </h2>
        {/* Search bar */}
        <form onSubmit={handleSearch}>
          <div className="flex items-center w-full max-w-md border border-green-500 rounded-lg overflow-hidden shadow-sm">
            {/* Left icon */}
            <div className="px-3 text-gray-500">
              <FaSearch />
            </div>

            {/* Input */}
            <input
              type="text"
              name="search"
              placeholder="Search..."
              className="grow px-2 py-2 focus:outline-none"
            />

            {/* Search button */}
            <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 duration-300">
              Search
            </button>
          </div>
        </form>
        {/*MapContainer  */}
        <div className=" ">
          <h3 className="text-2xl font-bold py-8">
            We deliver almost all over Bangladesh
          </h3>
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[250px] md:h-[580px] w-full rounded-lg"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Map info */}
            {serviceCenterLOcation.map((center) => (
              <Marker
                key={center.district}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <div>
                    <strong className="text-lg">{center.district}</strong>
                    <p>
                      <span className="font-bold">Service Area:</span>{" "}
                      {center.covered_area.join(",")}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </MyContainer>
    </div>
  );
};

export default Coverage;
