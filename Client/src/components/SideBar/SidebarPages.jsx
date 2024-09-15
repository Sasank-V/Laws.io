import HomeIcon from '../../assets/HomeIcon.png';
import FileIcon from '../../assets/FileIcon.png';
import FourCircles from '../../assets/FourCircles.png';
import Hat from '../../assets/Hat.png';

import { Link } from 'react-router-dom';

const SidebarPages = ({ navOpen, pageNumber, setPageNumber, isHamburg }) => {
  return !isHamburg ? (
    <div className="flex flex-col gap-3">
      <Link
        to="/"
        className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`}
        onClick={() => setPageNumber(0)}
      >
        <img
          src={HomeIcon}
          alt=""
          className={`${pageNumber == 0 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
          Home
        </span>
      </Link>
      <Link
        to="/LOTD"
        className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`}
        onClick={() => setPageNumber(1)}
      >
        <img
          src={FileIcon}
          alt=""
          className={`${pageNumber == 1 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
          Read Up
        </span>
      </Link>
      <Link
        to="/Quiz"
        className={`size-[35px] flex items-center gap-2 cursor-pointer w-full`}
        onClick={() => setPageNumber(2)}
      >
        <img
          src={FourCircles}
          alt=""
          className={`${pageNumber == 2 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
          MCQ's
        </span>
      </Link>
      <Link
        to="/Case"
        className={`size-[35px] flex items-center gap-2 mb-5 cursor-pointer w-full`}
        onClick={() => setPageNumber(3)}
      >
        <img
          src={Hat}
          alt=""
          className={`${pageNumber == 3 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className={`${navOpen ? 'visible' : 'hidden'} text-sm`}>
          Case Study
        </span>
      </Link>
    </div>
  ) : (
    <div className="flex flex-col gap-3">
      <Link
        to="/"
        className="size-[35px] flex items-center gap-2 cursor-pointer w-full"
        onClick={() => setPageNumber(0)}
      >
        <img
          src={HomeIcon}
          alt=""
          className={`${pageNumber == 0 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className="text-sm">Home</span>
      </Link>
      <Link
        to="/LOTD"
        className="size-[35px] flex items-center gap-2 cursor-pointer w-full"
        onClick={() => setPageNumber(1)}
      >
        <img
          src={FileIcon}
          alt=""
          className={`${pageNumber == 1 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className="text-sm">Read Up</span>
      </Link>
      <Link
        to="/Quiz"
        className="size-[35px] flex items-center gap-2 cursor-pointer w-full"
        onClick={() => setPageNumber(2)}
      >
        <img
          src={FourCircles}
          alt=""
          className={`${pageNumber == 2 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className="text-sm">MCQ's</span>
      </Link>
      <Link
        to="/Case"
        className="size-[35px] flex items-center gap-2 cursor-pointer w-full"
        onClick={() => setPageNumber(3)}
      >
        <img
          src={Hat}
          alt=""
          className={`${pageNumber == 3 ? 'invert bg-black rounded-lg' : 'invert-0'
            } size-[35px]`}
        />
        <span className="text-sm">Case Study</span>
      </Link>
    </div>
  );
};
export default SidebarPages;
