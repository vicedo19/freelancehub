import { VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { GoProjectSymlink } from "react-icons/go";
import { MdFeedback } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";
import "./App.scss";
import {Profile} from "./Profile";
// import Setting from "@/Setting";

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
      <VStack spacing={6} align="start">
        <Link as={RouterLink} to="/profile" className="links">
          <LiaSignOutAltSolid /> Profile Details
        </Link>
        <Link as={RouterLink} to="/projects" className="links">
          <GoProjectSymlink /> Projects
        </Link>
        <Link as={RouterLink} to="/feedback" className="links">
          <MdFeedback /> Feedback
        </Link>
        <Link as={RouterLink} to="/earnings" className="links">
          <LiaSignOutAltSolid /> Earnings
        </Link>
        <Link as={RouterLink} to="/settings" className="links">
          <RiSettings3Fill /> Settings
        </Link>
      </VStack>
    </nav>
  );
}

function Main() {
  return (
    <main className='main'>
      <Profile />
      <Projects />
      <Earnings />
      {/* <Setting /> */}
    </main>
  );
}

function Projects() {
  return (
    <div className="project__section">
      <div className="mb-1 project--heading">
        <h2>Projects</h2>
        <button className="btn">View All</button>
      </div>
      <div className="project--filters">
        <InputBox />
        <button className="btn">All</button>
        <button className="btn">In Progress</button>
        <button className="btn">Ended</button>
      </div>
      <div className="project--list">
        <Project projectTitle="Website Design" amt="3,500" status="Completed" />
        <Project projectTitle="Logo Creation" amt="1,200" status="In Progress" />
        <Project projectTitle="Social Campaign" amt="2,800" status="Pending Review" />
        <Project projectTitle="App Development" amt="4,500" status="Delivered" />
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


function Earnings() {
  return (
    <div className="earnings">
      <h2>Earnings</h2>
      <div className="earnings--box">
        <div className="earnings--text-box">
          <p>Total Earnings</p>
          <p>$6,350</p>
        </div>
        <div className="earnings--text-box">
          <p>Available Balance</p>
          <p>$2,500</p>
        </div>
        <div className="earnings--text-box">
          <p>Withdrawal Amount</p>
          <p>$3,800</p>
        </div>
      </div>
    </div>
  )
}


function InputBox() {
  return (
    <form>
      <input type="text" placeholder="search..." className="search__filter" />
    </form>
  )
}