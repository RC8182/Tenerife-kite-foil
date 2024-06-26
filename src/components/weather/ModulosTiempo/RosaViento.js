import Image from 'next/image';
import rosa from "/public/icons/flecha.png"
import compass from "/public/icons/rosa.png"
export const RosaViento = ({grados}) => {

    const dirViento = 'rotate(' + grados + 'deg)';

    return (
        <div className="relative h-40 w-40">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    className="w-full h-full rounded-full"
                    src={compass}
                    alt="Wind Compass"
                    width={100}
                    height={100}
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    className="w-3/4 h-3/4 rounded-full transform"
                    src={rosa}
                    alt="Wind Compass"
                    width={100}
                    height={100}
                    loading="lazy"
                    style={{ transform: dirViento }}
                />
            </div>
        </div>
    );
};
