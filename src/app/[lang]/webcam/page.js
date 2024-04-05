import ScrollingBanner from "@/components/scrollingBanner/scrollingBanner";
import Webcam from "@/components/webcam/webcam";


export default async function Page () {
    const bannerTexts = [
        'Eleveight RSV8 kite 1.279€',
        'Eleveight WSV7 kite 1.279€',
        'ELEVEIGHT RS+V2 10m 1.510€',
      ];
      return (
        <div>
          <ScrollingBanner title={'Outlet  '} texts={bannerTexts} />
          <div className="flex justify-center">
            <Webcam width={'auto'} height={'auto'} />
          </div>
        </div>
      );
}