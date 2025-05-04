// // componients/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import "../styles/Navbar.css";
// import logo1 from "../Assets/fullstack-academy-logo-full-color-rgb.jpg.jpeg";
// import ico from "../Assets/ico.svg";
// import ai from "../Assets/ai.svg";
// import cyber from "../Assets/cyber.svg";
// import data from "../Assets/data.svg";
// import { useNavigate } from 'react-router-dom';

// const navItems = ['Programs', 'Courses', 'Resources', 'Tuition & Dates', 'About', 'Enterprise'];

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden'; // prevent scroll
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isMobileMenuOpen]);

//   const handleMouseEnter = (menu) => {
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="navbar" onMouseLeave={handleMouseLeave}>
//         <div className="nav-container">
//           <div className="logo" onClick={() => navigate('/')}>
//             <img src={logo1} alt="Fullstack Academy" style={{ cursor: 'pointer' }} />
//           </div>

//           <div className="nav-links">
//             {navItems.map((item) => (
//               <div
//                 key={item}
//                 className="nav-item"
//                 onMouseEnter={() => handleMouseEnter(item)}
//               >
//                 {item}
//                 {activeMenu === item && (
//                   <div className={submenu submenu-${item.toLowerCase().replace(/ & /, '-').replace(/ /g, '-')}}>
//                     {renderSubmenuContent(item, navigate)}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="nav-buttons">
//             <button className="sign-up" onClick={() => navigate('/signup')}>Sign Up</button>
//             <button className="apply">Apply</button>
//           </div>

//           <div className="hamburger" onClick={toggleMobileMenu}>
//             <span className={isMobileMenuOpen ? 'open' : ''}></span>
//             <span className={isMobileMenuOpen ? 'open' : ''}></span>
//             <span className={isMobileMenuOpen ? 'open' : ''}></span>
//           </div>
//         </div>
//       </nav>

//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <div className="mobile-menu-links">
//             {navItems.map((item) => (
//               <div key={item} className="mobile-item">
//                 <div className="mobile-title" onClick={() => setActiveMenu(activeMenu === item ? null : item)}>
//                   {item}
//                 </div>
//                 {activeMenu === item && (
//                   <div className="mobile-submenu">{renderSubmenuContent(item, navigate)}</div>
//                 )}
//               </div>
//             ))}
//             <div className="mobile-actions">
//               <button className="sign-up" onClick={() => navigate('/signup')}>Sign Up</button>
//               <button className="apply">Apply</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const renderSubmenuContent = (menu, navigate) => {
//   switch (menu) {
//     case 'Programs':
//       return (
//         <div>
//           <div className="submenu-content programs">
//             <div>
//               <h4>CODING</h4>
//               <ul>
//                 <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>FULL-TIME CODING</h4><p>Full-Time Software Engineering Bootcamp</p></div></li>
//                 <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>PART-TIME CODING</h4><p>Part-Time Software Engineering Bootcamp</p></div></li>
//                 <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>ONLINE CODING</h4><p>Online Coding Bootcamp</p></div></li>
//                 <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>WOMEN IN TECH</h4><p>Coding Bootcamp for Women and Non-Binary Students</p></div></li>
//               </ul>
//             </div>
//             <div>
//               <h4>TECH BOOTCAMPS</h4>
//               <ul>
//                 <li><div className='ico-img'><img src={ai} alt="ico" /></div><div><h4>ARTIFICIAL INTELLIGENCE</h4><p> AI & Machine Learning Bootcamp</p></div></li>
//                 <li><div className='ico-img'><img src={cyber} alt="ico" /></div><div><h4>CYBER</h4><p> Cybersecurity Bootcamp</p></div></li>
//                 <li><div className='ico-img'><img src={data} alt="ico" /></div><div><h4>DATA</h4><p> Data Analytics Bootcamp</p></div></li>
//               </ul>
//             </div>
//           </div>
//           <div className="but"><button className="apply">Apply</button></div>
//         </div>
//       );

//     case 'Courses':
//       return (
//         <div className="submenu-content courses">
//           <p onClick={() => navigate('/CourseList')}>Full Stack development</p>
//           <p>No-Code AI and Machine Learning Course</p>
//           <h4>CODING</h4>
//           <p>Intro to Coding</p>
//           <p>Bootcamp Prep</p>
//         </div>
//       );

//     case 'Resources':
//       return (
//         <div className="submenu-content resources">
//           <ul>
//             <li>Admissions Process</li>
//             <li>Blog</li>
//             <li>Events</li>
//             <li>FAQs</li>
//             <li>Glossary</li>
//           </ul>
//         </div>
//       );

//     case 'Tuition & Dates':
//       return (
//         <div className="submenu-content tuition-dates">
//           <ul>
//             <li>Tuition & Dates</li>
//             <li>Payment Options</li>
//           </ul>
//         </div>
//       );

//     case 'About':
//       return (
//         <div className="submenu-content about">
//           <ul>
//             <li>About Fullstack Academy</li>
//             <li>Careers</li>
//             <li>Hiring Outcomes</li>
//             <li>Student Stories</li>
//             <li>Reviews</li>
//             <li>Online Experience</li>
//           </ul>
//         </div>
//       );

//     case 'Enterprise':
//       return (
//         <div className="submenu-content enterprise">
//           <ul>
//             <li>Team Training</li>
//             <li>For Employee Partners</li>
//             <li>For University Partners</li>
//           </ul>
//         </div>
//       );

//     default:
//       return <div className="submenu-content default">Coming Soon...</div>;
//   }
// };

// export default Navbar;



// componients/Navbar.jsx
import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";
import logo1 from "../Assets/fullstack-academy-logo-full-color-rgb.jpg.jpeg";
import ico from "../Assets/ico.svg";
import ai from "../Assets/ai.svg";
import cyber from "../Assets/cyber.svg";
import data from "../Assets/data.svg";
import { useNavigate } from 'react-router-dom';

const navItems = ['Programs', 'Courses', 'Resources', 'Tuition & Dates', 'About', 'Enterprise'];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // prevent scroll
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar" onMouseLeave={handleMouseLeave}>
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>
            <img src={logo1} alt="Fullstack Academy" style={{ cursor: 'pointer' }} />
          </div>

          <div className="nav-links">
            {navItems.map((item) => (
              <div
                key={item}
                className="nav-item"
                onMouseEnter={() => handleMouseEnter(item)}
              >
                {item}
                {activeMenu === item && (
                  <div className={`submenu submenu-${item.toLowerCase().replace(/ & /, '-').replace(/ /g, '-')}`}>
                    {renderSubmenuContent(item, navigate)}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-buttons">
            <button className="sign-up" onClick={() => navigate('/signup')}>Sign Up</button>
            <button className="apply">Apply</button>
          </div>

          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <div key={item} className="mobile-item">
                <div className="mobile-title" onClick={() => setActiveMenu(activeMenu === item ? null : item)}>
                  {item}
                </div>
                {activeMenu === item && (
                  <div className="mobile-submenu">{renderSubmenuContent(item, navigate)}</div>
                )}
              </div>
            ))}
            <div className="mobile-actions">
              <button className="sign-up" onClick={() => navigate('/signup')}>Sign Up</button>
              <button className="apply">Apply</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const renderSubmenuContent = (menu, navigate) => {
  switch (menu) {
    case 'Programs':
      return (
        <div>
          <div className="submenu-content programs">
            <div>
              <h4>CODING</h4>
              <ul>
                <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>FULL-TIME CODING</h4><p>Full-Time Software Engineering Bootcamp</p></div></li>
                <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>PART-TIME CODING</h4><p>Part-Time Software Engineering Bootcamp</p></div></li>
                <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>ONLINE CODING</h4><p>Online Coding Bootcamp</p></div></li>
                <li><div className='ico-img'><img src={ico} alt="ico" /></div><div><h4>WOMEN IN TECH</h4><p>Coding Bootcamp for Women and Non-Binary Students</p></div></li>
              </ul>
            </div>
            <div>
              <h4>TECH BOOTCAMPS</h4>
              <ul>
                <li><div className='ico-img'><img src={ai} alt="ico" /></div><div><h4>ARTIFICIAL INTELLIGENCE</h4><p> AI & Machine Learning Bootcamp</p></div></li>
                <li><div className='ico-img'><img src={cyber} alt="ico" /></div><div><h4>CYBER</h4><p> Cybersecurity Bootcamp</p></div></li>
                <li><div className='ico-img'><img src={data} alt="ico" /></div><div><h4>DATA</h4><p> Data Analytics Bootcamp</p></div></li>
              </ul>
            </div>
          </div>
          <div className="but"><button className="apply">Apply</button></div>
        </div>
      );

    case 'Courses':
      return (
        <div className="submenu-content courses">
          <p onClick={() => navigate('/CourseList')}>Full Stack development</p>
          <p>No-Code AI and Machine Learning Course</p>
          <h4>CODING</h4>
          <p>Intro to Coding</p>
          <p>Bootcamp Prep</p>
        </div>
      );

    case 'Resources':
      return (
        <div className="submenu-content resources">
          <ul>
            <li>Admissions Process</li>
            <li>Blog</li>
            <li>Events</li>
            <li>FAQs</li>
            <li>Glossary</li>
          </ul>
        </div>
      );

    case 'Tuition & Dates':
      return (
        <div className="submenu-content tuition-dates">
          <ul>
            <li>Tuition & Dates</li>
            <li>Payment Options</li>
          </ul>
        </div>
      );

    case 'About':
      return (
        <div className="submenu-content about">
          <ul>
            <li>About Fullstack Academy</li>
            <li>Careers</li>
            <li>Hiring Outcomes</li>
            <li>Student Stories</li>
            <li>Reviews</li>
            <li>Online Experience</li>
          </ul>
        </div>
      );

    case 'Enterprise':
      return (
        <div className="submenu-content enterprise">
          <ul>
            <li>Team Training</li>
            <li>For Employee Partners</li>
            <li>For University Partners</li>
          </ul>
        </div>
      );

    default:
      return <div className="submenu-content default">Coming Soon...</div>;
  }
};

export default Navbar;