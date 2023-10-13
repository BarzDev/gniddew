import Music from "./navbar-music";

const Navbar = ({ homeRef, locRef, galeryRef }) => {
  const homeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const locClick = () => {
    locRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const galeryClick = () => {
    galeryRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="drawer patrick">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col font-bold text-sky-800 ">
        {/* Navbar */}
        <div
          className="w-full navbar backdrop-blur-sm  "
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4) " }}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2  text-2xl">Barz Wedding</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-lg">
              {/* Navbar menu content here */}
              <li>
                <a onClick={homeClick}>Home</a>
              </li>
              <li>
                <a onClick={locClick}>Location</a>
              </li>
              <li>
                <a onClick={galeryClick}>Galery</a>
              </li>
              <li>
                <div>
                  <Music />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-lg">
          {/* Sidebar content here */}
          <li>
            <a onClick={homeClick}>Home</a>
          </li>
          <li>
            <a onClick={locClick}>Location</a>
          </li>
          <li>
            <a onClick={galeryClick}>Galery</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
