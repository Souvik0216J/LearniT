import Card from "@/components/card"
import Head from "next/head";
export default function HeroSection() {
    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero1.png')" }}>

            <div className="relative min-h-screen overflow-hidden">

                <div className="relative flex flex-col items-center justify-center">
                    <div className="relative top-32 max-w-3xl font-Manrope">
                        <h1 className="text-5xl font-extrabold sm:text-5xl lg:text-6xl">
                            Empowering Learning, Simplifying Choices..
                        </h1>
                        <p className="my-4 font-medium">
                            Discover a smarter way to learn with our AI-driven platform that brings all your educational resources together, personalized just for you. Save time, reduce stress, and focus on what truly matters—your growth and success.
                        </p>
                        <div>
                                <a href="#course" className="mx-1 rounded-xl  bg-[#FF00E5] px-16 py-3 hover:bg-[#d818d2f9] transition duration-500">
                                    Courses
                                </a>

                            {/* <button className="mx-1 rounded-xl  bg-[#f3eff3] px-16 py-3 hover:bg-[#b7b6b7f9] transition duration-500">
                                About us
                            </button> */}
                        </div>
                    </div>
                </div>
                {/* <div className="relative   top-[10vh] max-w-full sm:top-0 ">
                <div className="absolute w-full object-contain">
                <img src="circle.png" alt="" className="relative  object-fill" />
                </div>
                </div> */}

            </div>
            <div>
                <div id="course" className="flex justify-center items-center flex-wrap p-10 gap-4">
                    <Card img="/4.png" title="Python full course" channel="Code With Harry" views="4.5M" href="https://www.youtube.com/watch?v=UrsmFxEIp5k&t=6052s" />
                    <Card img="/1.png" title="Data science using python" channel="Simplilearn" views="334kK" href="https://www.youtube.com/watch?v=mkv5mxYu0Wk" />
                    <Card img="/6.png" title="Mern stack full course" channel="Chai Our Code" views="159K" href="https://www.udemy.com/course/web-dev-master/?couponCode=ST21MT121624" />
                    <Card img="/5.png" title="Javascript full course" channel="Apna College" views="6.23M" href="https://www.youtube.com/watch?v=VlPiVmYuoqw&t=28035s" />
                    <Card img="/2.png" title="Web dev from scratch" channel="Chai Our Code" views="159K" href="https://www.udemy.com/course/web-dev-master/?couponCode=ST21MT121624" />
                    <Card img="/3.png" title="Echical hacking full course" channel="Zaid Sabih" views="100K" href="https://www.udemy.com/course/learn-ethical-hacking-from-scratch/" />
                    <Card img="/8.png" title="Flutter full course" channel="Dr. Angela Yu" views="981K" href="https://www.udemy.com/course/flutter-bootcamp-with-dart/?couponCode=ST21MT121624" />
                    <Card img="/7.png" title="MongoDB full course" channel="Code With Harry" views="1M" href="https://www.youtube.com/watch?v=J6mDkcqU_ZE" />
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <p>&copy; {"2024"} Edemy. All rights reserved.</p>
                </div>
            </footer>

        </div >
    );
}