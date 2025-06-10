// import { Flex, VStack, Heading, HStack } from "@chakra-ui/react";
import "./App.scss";
// import Sidebar from "./components/Sidebar";
// import SettingSection from "./components/Setting";
// import FeedbackSection from "./components/Feedback";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Aside />
        <Main />
      </div>
    </div>
  );
}


function Header() {
  return (
    <header className='header'>
      <WebsiteLogo />
      <Nav />
      <Search />
      <Settings />
    </header>
  )
}

function WebsiteLogo() {
  return (
    <div>
      <h1>FreelanceHub</h1>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Clients</li>
      </ul>
    </nav>
  )
}

function Search() {
  return (
    <form action="#" className='search'>
      <input type='text' placeholder='search...' className="search__input" />
      <button type='submit' className="search__button">Search</button>
    </form>
  )
}

function Settings() {
  return (
    <div className='setting_box'>
      <button className='round_circle theme'></button>
      <button className='round_circle alert'></button>
      <button className='round_circle profile'></button>
    </div>
  );
}


function Aside() {
  return (
    <nav className='nav'>
      <a href='#2' className='nav_list'><span>Profile Details</span></a>
      <a href='#2' className='nav_list'><span>Projects</span></a>
      <a href='#2' className='nav_list'><span>Feedback</span></a>
      <a href='#2' className='nav_list'><span>Earnings</span></a>
      <a href='#2' className='nav_list'><span>Setting</span></a>
    </nav>
  )
}

function Main() {
  return (
    <main className='main'>
      <Projects />
    </main>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="">
        <input placeholder="search..." />
        <button>All</button>
        <button>In Progress</button>
        <button>Ended</button>
      </div>
      <div className="projects">
        <Project projectTitle="Website Design" amt="3,500" status="Completed" />
        <Project projectTitle="Logo Creation" amt="1,200" status="In Progress" />
        <Project projectTitle="Social Campaign" amt="2,800" status="Pending Review" />
        <Project projectTitle="App Development" amt="4,500" status="Delivered" />
      </div>
      <div>

      </div>
    </div>
  )
}

function Project({projectTitle, amt, status}) {
  return (
    <div className="project--box">
      <div className="project--content">
        <h3>{projectTitle}</h3>
        <p>Earnings: <span>${amt}</span></p>
        <p>Status: <span>{status}</span></p>
        <button className="btn">View Details</button>
      </div>
      <div className="project--image">
        <img src="img_placeholder.png" alt="placeholder-image" />
      </div>
    </div>
  )
}