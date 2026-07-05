import { FaFire } from "react-icons/fa";

export default function RachaCard() {

    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-[30px] shadow-xl p-8 text-white">
            <div className="flex justify-between items-start">
                <div>
                    <p className="opacity-80">
                        Racha actual
                    </p>

                    <h2 className="text-5xl font-bold mt-2">
                        18
                    </h2>

                    <p className="mt-1">
                        días consecutivos
                    </p>
                </div>
                <FaFire size={65}/>
            </div>

            <div className="mt-8">
                <div className="flex justify-between text-sm mb-2">
                    <span>
                        Meta mensual
                    </span>
                    <span>
                        18 / 30
                    </span>
                </div>

                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-white rounded-full"></div>
                </div>
            </div>

            <div className="mt-8 bg-white/15 rounded-2xl p-4">
                <p className="text-sm">
                    Mantén tu constancia para acelerar la recuperación.
                </p>
            </div>
        </div>
    );
}