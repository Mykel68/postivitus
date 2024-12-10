import React from "react";
import Image from "next/image";

export const ServiceCard = ({
    name,
    sub,
    image: Img,
    bgColor,
    textColor,
    icon: IconComponent,
}: {
    name: string;
    sub: string;
    image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    bgColor: string;
    textColor: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) => {
    return (
        <div
            className=" p-[3rem] flex items-center justify-between rounded-3xl brd-box"
            style={{ backgroundColor: bgColor }}
        >
            <div className="grid col-span-2">
                <div className="flex flex-col space-y-24 items-start justify-between">
                    <div>
                        <div
                            className="p-1 rounded w-fit"
                            style={{ backgroundColor: textColor }}
                        >
                            <p className="font-bold text-2xl leading-normal">{name}</p>
                        </div>
                        <div
                            className="p-1 rounded w-fit"
                            style={{ backgroundColor: textColor }}
                        >
                            <p className="font-bold text-2xl leading-normal">{sub}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center justify-center">
                        <IconComponent />
                        <p className="text-sm text-gray-500 mt-2">Learn More</p>
                    </div>
                </div>
            </div>
            {/* Render the SVG component directly */}
            <Image src={Img as any} alt="service" width={200} height={200} />


        </div>
    );
};
