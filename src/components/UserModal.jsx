"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';

const UserModal = ({ user, onClose }) => {
    if (!user) return null;

    const formattedDob = new Date(user.dob.date).toLocaleDateString("en-US", {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Generate consistent gradient based on user's name
    const fullName = `${user.name.first} ${user.name.last}`;
    const gradients = [
        'from-purple-400 via-pink-500 to-red-500',
        'from-blue-400 via-purple-500 to-pink-500',
        'from-green-400 via-blue-500 to-purple-600',
        'from-yellow-400 via-orange-500 to-red-500',
        'from-indigo-400 via-purple-500 to-pink-500',
        'from-teal-400 via-cyan-500 to-blue-500',
        'from-rose-400 via-pink-500 to-purple-500',
        'from-emerald-400 via-teal-500 to-cyan-500'
    ];
    
    const gradientIndex = fullName.length % gradients.length;
    const selectedGradient = gradients[gradientIndex];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex justify-center items-center"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: -20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full max-w-md m-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Gradient border wrapper */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${selectedGradient} rounded-2xl p-1`}>
                        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[15px]" />
                    </div>
                    
                    {/* Main modal content */}
                    <div className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Header with gradient background */}
                        <div className={`bg-gradient-to-r ${selectedGradient} p-6 text-center relative overflow-hidden`}>
                            {/* Animated background elements */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full animate-pulse" />
                            <div className="absolute -bottom-5 -left-5 w-15 h-15 bg-white/15 rounded-full animate-pulse delay-300" />
                            
                            <div className="relative z-10">
                                {/* Enhanced profile image */}
                                <div className="relative inline-block mb-4">
                                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                                    <img 
                                        src={user.picture.large} 
                                        alt="" 
                                        className="relative w-24 h-24 rounded-full border-4 border-white/50 shadow-xl object-cover"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                                    {fullName}
                                </h2>
                                <p className="text-white/90 font-medium drop-shadow">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        {/* Content section */}
                        <div className="p-6 space-y-4">
                            {/* Info items with colorful accents */}
                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedGradient}`} />
                                <div>
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Gender:</span>
                                    <span className="ml-2 capitalize text-gray-900 dark:text-white">{user.gender}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedGradient}`} />
                                <div>
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Phone:</span>
                                    <span className="ml-2 text-gray-900 dark:text-white">{user.phone}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedGradient}`} />
                                <div>
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Date of Birth:</span>
                                    <span className="ml-2 text-gray-900 dark:text-white">{formattedDob}</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedGradient} mt-1`} />
                                <div>
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Location:</span>
                                    <span className="ml-2 text-gray-900 dark:text-white">
                                        {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Footer with enhanced close button */}
                        <div className="p-6 pt-0 flex justify-end">
                            <button 
                                onClick={onClose} 
                                className={`px-6 py-3 bg-gradient-to-r ${selectedGradient} text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800`}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    
                    {/* Ambient glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${selectedGradient} opacity-20 blur-2xl -z-10`} />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default UserModal;