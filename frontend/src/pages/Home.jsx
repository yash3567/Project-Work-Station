import Layout from '../components/layouts/Layout';
import logo from '../assets/images-removebg-preview.png'; // Adjust the path as needed
import { motion } from "framer-motion";
import collegeImage from '../assets/college.jpg'; // Adjust the path as needed


const Home = () => {
    return (
        <Layout>
            <div className='border-b border-transparent pb-4 lg:mb-35'>
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 lg:mt-16 lg:ml-16">
                            <div className="flex items-center space-x-4">
                                <motion.img
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: -100 }}
                                    transition={{ duration: 1.5 }}
                                    src={logo}
                                    alt="Logo"
                                    className="h-16 w-16" // Adjust size as needed
                                />
                                <motion.h1
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: -100 }}
                                    transition={{ duration: 1.5 }}
                                    className="text-6xl font-bold tracking-tight lg:text-3xl">
                                    Anjuman College Of Engineering And Technology
                                </motion.h1>
                            </div>
                            <motion.p
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1.5 }}
                                className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam exercitationem, non similique ea sint corporis cumque ducimus in nulla quam libero, perferendis, quisquam voluptate unde odit rerum. Reprehenderit, minima ullam?
                            </motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8 mt-16">
                        <div className="flex justify-center">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                src={collegeImage} alt="ACET" />

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
