import { CogIcon, MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import {useRouter} from "next/router"
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header({defaults}){
    const router=useRouter();
    const searchInputRef=useRef(null);
    const search=(e)=>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
    return(
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6">
            <Image
            src='/logo.png'
            height={40}
            width={140}
            className="cursor-pointer"
            onClick={()=> router.push('/')}
            />
            <form className=" flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl">
                <input value={defaults} ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text"></input>
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={()=>(searchInputRef.current.value="")}
                />
                <MicrophoneIcon className=" mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                <SearchIcon onClick={search}  className="h-6 text-blue-500 hidden sm:inline-flex hover:cursor-pointer"/>
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
            <CogIcon className="ml-auto h-10 mt-2 p-1 hover:cursor-pointer"/>
            <Avatar className=" h-10 mt-2 ml-2" url="https://avatars.githubusercontent.com/u/62892079?v=4"/>
            </div>
            <HeaderOptions/>
        </header>
    )
}
export default Header;