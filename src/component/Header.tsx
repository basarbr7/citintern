import { hindSili } from "../Font"
import Flex from "../layer/Flex"

const Header = () => {
  return (
    <Flex className="bg-linear-to-r from-[#292F99] to-[#0E1033] text-[#ffffff] pt-11 pb-5 justify-center items-center  ">
        <h2 className={`${hindSili.className} text-base leading-normal font-medium `}>Banner of the Campaign - আমাদের এই কোর্সে এখন ঈদ অফার চলছে।  অফারটি জানতে এখানে ক্লিক করুন Button will be here।</h2>
    </Flex>
  )
}

export default Header