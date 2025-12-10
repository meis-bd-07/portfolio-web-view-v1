import { mapMarkers, myUTC, zones } from "@/constants/my-timezone";

const MyTimezone = () => {
    return (
        <div className="border rounded-2xl p-6 shadow-md space-y-6 bg-white/80 mt-10">
            {/* My Timezone Card */}
            <div className="p-5 border rounded-xl shadow-sm hover:shadow-lg transition-all bg-gray-50">
            <div className="text-2xl">🇧🇩</div>
            <div className="font-semibold text-lg">My Timezone — Bangladesh</div>
            <div className="text-sm text-gray-600">UTC+6</div>
            </div>

            <h4 className="text-lg font-semibold">Interested Timezones</h4>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {zones.map((zone) => {
                const diff = zone.utc - myUTC;
                const diffText = diff === 0 ? "Same Timezone" : diff > 0 ? `+${diff} hours` : `${diff} hours`;

                return (
                <div key={zone.country} className="p-4 border rounded-xl hover:shadow-lg transition-all bg-white relative">
                    <div className="text-2xl">{zone.flag}</div>
                    <div className="font-semibold text-lg">{zone.country}</div>
                    <div className="text-sm text-gray-600">UTC {zone.utc >= 0 ? `+${zone.utc}` : zone.utc}</div>
                    <div className="text-xs text-gray-500">Difference: {diffText}</div>
                </div>
                );
            })}
            </div> */}

            {/* World Map */}
            <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg bg-black/10">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
                    className="w-full h-full object-cover opacity-90"
                />

                {mapMarkers.map((loc, i) => {
                    const diff = loc.utc - myUTC;
                    const diffText = diff === 0 ? "Same Timezone" : diff > 0 ? `+${diff} hours` : `${diff} hours`;
                    return (
                        <div
                            key={i}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                            style={{ top: loc.top, left: loc.left }}
                        >
                            <div className="text-2xl cursor-pointer animate-pulse">📍</div>
                            <div className="absolute left-6 top-0 px-3 py-2 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all text-xs whitespace-nowrap flex flex-col gap-1">
                                <span className="mr-1">{loc.flag}</span>
                                <span className="text-xs text-gray-500">{loc.title}</span>
                                <span className="text-xs text-gray-500">Difference: {diffText}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default MyTimezone;