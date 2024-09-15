import Profile from '../../assets/Profile.png';
import ExpandIcon from '../../assets/ExpandIcon.png';
import InfoIcon from '../../assets/InfoIcon.png';
import LeaderIcon from '../../assets/LeaderIcon.png';
import ExitIcon from '../../assets/Exit.png';
import SidebarPages from './SidebarPages';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const SidebarDefault = ({
  pageNumber,
  setPageNumber,
  navOpen,
  setNavOpen,
  routeHome,
}) => {
  return (
    <div
      className={`${navOpen ? 'w-[180px]' : 'w-[90px]'
        } transition-all duration-150 ease-in-out`}
    >
      <div
        className={`h-full transition-all duration-150 ease-in-out w-full pl-5 flex flex-col border-2 border-[#FFD700] rounded-r-xl`}
      >
        <div className="relative my-5 flex items-center gap-3 cursor-pointer w-full">
          <img src={Profile} alt="" className="size-[40px]" />
          <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
            Name
          </span>
          <div
            className="absolute size-[25px] p-0.5 transition-all duration-150 ease-in-out right-[-13px] top-[8px] border-[1px] cursor-pointer z-10 border-white rounded-lg bg-[#0F152D]"
            onClick={() => setNavOpen(!navOpen)}
          >
            <img
              src={ExpandIcon}
              className={
                navOpen
                  ? 'rotate-180 ease-in-out duration-750'
                  : 'ease-in-out duration-750'
              }
              alt=""
            />
          </div>
        </div>
        <div
          className={`h-[2px] ${navOpen ? 'w-[85%]' : 'w-[70%]'} bg-white mb-5`}
        ></div>

        <SidebarPages
          navOpen={navOpen}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />

        <div
          className={`h-[2px] ${navOpen ? 'w-[85%]' : 'w-[70%]'} bg-white mb-5`}
        ></div>
        <div className="flex-grow"></div>
        <div className='flex gap-3 items-center mb-3'>
          <GoogleTranslate />
          <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
            Translate
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/leaderboard">
            <div
              className="size-[35px] flex items-center gap-2 cursor-pointer w-full"
              onClick={() => setPageNumber(5)}
            >
              <img
                src={LeaderIcon}
                alt=""
                className={`${pageNumber == 5 ? 'invert bg-black rounded-lg' : 'invert-0'
                  } size-[35px]`}
              />
              <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
                Leaderboard
              </span>
            </div>
          </Link>
          <div
            className="size-[35px] flex items-center gap-2 cursor-pointer w-full"
            onClick={() => setPageNumber(6)}
          >
            <img
              src={InfoIcon}
              alt=""
              className={`${pageNumber == 6 ? 'invert bg-black rounded-lg' : 'invert-0'
                } size-[35px]`}
            />
            <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
              Help
            </span>
          </div>

          <div
            className="size-[35px] flex items-center gap-2 cursor-pointer mb-5 w-full"
            onClick={() => setPageNumber(7)}
          >
            <img src={ExitIcon} alt="" className="size-[35px]" />
            <span
              className={`${navOpen ? 'visible' : 'hidden'
                } text-[#D33543] text-sm`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarDefault;
