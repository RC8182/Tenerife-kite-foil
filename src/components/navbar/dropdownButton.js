import { Dropdowntabs } from "./dropdowntaps";

export const DropdownButton = ({tabs, openTab, setOpenTab}) => {
  const title=tabs.title
  const dropTabs=tabs.drop
  const isOpen = openTab === title;

  return (
    <li onMouseEnter={()=>{setOpenTab(title)}}>
    <div className="relative">
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
      >
        {title}
        <svg className={`w-2.5 h-2.5 ms-2.5 transform ${isOpen ? '' : 'rotate-90'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      
      {isOpen && (
        <div 
          id="dropdownNavbar" className="z-10 absolute top-6 lefth-0 font-normal bg-white divide-y   divide-blue-100 rounded-lg shadow w-44"
            onMouseLeave={()=>{setOpenTab(null)}}>
            <ul className="py-2 text-sm text-blue-700" aria-labelledby="dropdownLargeButton">
            {dropTabs.map((e,i) => (
                <div key={i}>
                  <Dropdowntabs title={e.title} link={e.link}/>
                </div>
              ))} 
            </ul>  
        </div>
      )}
    </div>
    </li>
  );
};
