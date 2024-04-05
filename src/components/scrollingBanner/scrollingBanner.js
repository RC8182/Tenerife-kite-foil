// ScrollingBanner.js

const ScrollingBanner = ({title, texts }) => {
    const allTexts = texts.join('  - ');
    return (
        <div className="overflow-hidden bg-gray-900">
          <div className="p-4 mx-auto">
            <div className="marquee" style={{ animation: `marquee 25s linear infinite`}}>
            <span className="text-orange-500 text-3xl text-center">
                {title}
              </span>
              <span className="text-white">
                {allTexts}
              </span>
            </div>
          </div>
        </div>
      );
  };
  
  export default ScrollingBanner;