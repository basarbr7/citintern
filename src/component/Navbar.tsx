
import Container from "../layer/Container"
import Header from "./Header"
import Flex from "../layer/Flex"
import { hindSili } from "../Font"

import Header2 from "./Header2"
import Button from "./Button"
import { BiBookOpen } from "react-icons/bi"


const menuItem = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Sucess Story",
  },
  {
    id: 4,
    name: "Diploma",
  },
  {
    id: 5,
    name: "About",
  },
  {
    id: 6,
    name: "Contact",
  }
]


const Navbar = () => {
  return (
    <>
      <Header/>
      <Container className={`${hindSili.className} py-4`}>
         <Flex className="justify-between items-center">
           <img src="/images/South-Asia.png" alt="" />
            <ul className="flex gap-x-10 items-center text-lg font-semibold">
            {menuItem.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
            <Button className=" py-2.5 px-4 leading-normal text-base font-semibold text-white flex items-center gap-x-1 ">
              <BiBookOpen className="py-1" />
              <h3>Browse Course</h3>
            </Button>
         </Flex>
      </Container>
      <Header2/>
    </>
  )
}

export default Navbar