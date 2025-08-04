// "use client";
// import { useState, useEffect, useMemo } from "react";
// import UserCard from "@/components/UserCard";
// import UserCardSkeleton from "@/components/UserCardSkeleton";
// import { useUsers } from "../hooks/useUsers";
// import { motion } from 'framer-motion';
// import UserModal from "@/components/UserModal";

// export default function Home() {
//   const { users, loading, loadingMore, error, loadMoreUsers } = useUsers();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Memoize filtered users to prevent re-calculation on every render
//   const filteredUsers = useMemo(() => {
//     return users.filter((user) =>
//       `${user.name.first} ${user.name.last}`
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );
//   }, [users, searchTerm]);

//   // Set theme colors (in a real app, this would be in a global CSS or layout file)
//   useEffect(() => {
//     document.documentElement.style.setProperty(
//       "--background",
//       "hsl(0 0% 100%)"
//     );
//     document.documentElement.style.setProperty(
//       "--foreground",
//       "hsl(222.2 84% 4.9%)"
//     );
//     document.documentElement.style.setProperty("--card", "hsl(0 0% 100%)");
//     document.documentElement.style.setProperty(
//       "--card-foreground",
//       "hsl(222.2 84% 4.9%)"
//     );
//     document.documentElement.style.setProperty("--muted", "hsl(210 40% 96.1%)");
//     document.documentElement.style.setProperty(
//       "--muted-foreground",
//       "hsl(215.4 16.3% 46.9%)"
//     );
//   }, []);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.05,
//         type: "spring",
//         stiffness: 400,
//         damping: 15,
//       },
//     }),
//   };

//   return (
//     <div className="bg-background min-h-screen font-sans">
//       <div className="container mx-auto px-4 py-8 sm:py-12">
//         <header className="text-center mb-8 sm:mb-12">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
//             User Directory
//           </h1>
//           <p className="text-lg text-muted-foreground mt-2">
//             Search, discover, and learn more about our users.
//           </p>
//         </header>

//         <div className="mb-8 max-w-lg mx-auto">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {error && <div className="text-center text-red-500">{error}</div>}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {loading
//             ? Array.from({ length: 10 }).map((_, index) => (
//                 <UserCardSkeleton key={index} />
//               ))
//             : filteredUsers.map((user, i) => (
//                 <motion.div
//                   key={user.login.uuid}
//                   custom={i}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   layout
//                 >
//                   <UserCard user={user} onCardClick={setSelectedUser} />
//                 </motion.div>
//               ))}
//         </div>

//         {!loading && filteredUsers.length === 0 && searchTerm && (
//           <div className="text-center col-span-full py-12 text-muted-foreground">
//             <h3 className="text-xl font-semibold">No users found</h3>
//             <p>Try adjusting your search term.</p>
//           </div>
//         )}

//         <div className="text-center mt-12">
//           {users.length > 0 && (
//             <button
//               onClick={loadMoreUsers}
//               disabled={loadingMore}
//               className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200"
//             >
//               {loadingMore ? "Loading..." : "Load More"}
//             </button>
//           )}
//         </div>
//       </div>

//       <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
//     </div>
//   );
// }


"use client";
import { useState, useEffect, useMemo } from "react";
import UserCard from "@/components/UserCard";
import UserCardSkeleton from "@/components/UserCardSkeleton";
import { useUsers } from "../hooks/useUsers";
import { motion } from 'framer-motion';
import UserModal from "@/components/UserModal";

export default function Home() {
  const { users, loading, loadingMore, error, loadMoreUsers } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Memoize filtered users to prevent re-calculation on every render
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Set theme colors (in a real app, this would be in a global CSS or layout file)
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      "hsl(0 0% 100%)"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      "hsl(222.2 84% 4.9%)"
    );
    document.documentElement.style.setProperty("--card", "hsl(0 0% 100%)");
    document.documentElement.style.setProperty(
      "--card-foreground",
      "hsl(222.2 84% 4.9%)"
    );
    document.documentElement.style.setProperty("--muted", "hsl(210 40% 96.1%)");
    document.documentElement.style.setProperty(
      "--muted-foreground",
      "hsl(215.4 16.3% 46.9%)"
    );
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="bg-background min-h-screen font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-5 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <motion.header 
          className="text-center mb-8 sm:mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Title with gradient text and animations */}
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x mb-4 relative">
              User Directory
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 animate-[expand_2s_ease-out_forwards] delay-500" />
            </h1>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce delay-300" />
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-bounce delay-700" />
            <div className="absolute -bottom-6 left-1/4 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60 animate-bounce delay-1000" />
          </div>
          
          <motion.p 
            className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Search, discover, and learn more about our amazing community of users.
          </motion.p>
        </motion.header>

        {/* Enhanced Search Input */}
        <motion.div 
          className="mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500 focus:outline-none dark:bg-gray-800 dark:text-white transition-all duration-300 text-lg shadow-lg hover:shadow-xl placeholder:text-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search icon */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div 
            className="text-center text-red-500 mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {error}
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <UserCardSkeleton key={index} />
              ))
            : filteredUsers.map((user, i) => (
                <motion.div
                  key={user.login.uuid}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  layout
                >
                  <UserCard user={user} onCardClick={setSelectedUser} />
                </motion.div>
              ))}
        </div>

        {!loading && filteredUsers.length === 0 && searchTerm && (
          <motion.div 
            className="text-center py-16 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-600 dark:text-gray-400">No users found</h3>
            <p className="text-lg">Try adjusting your search term or browse all users.</p>
          </motion.div>
        )}

        {/* Enhanced Load More Button */}
        <div className="text-center mt-16">
          {users.length > 0 && (
            <motion.button
              onClick={loadMoreUsers}
              disabled={loadingMore}
              className="relative px-8 py-4 font-bold text-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden group disabled:cursor-not-allowed"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* Dynamic gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${loadingMore 
                ? 'from-gray-400 to-gray-500' 
                : 'from-purple-600 via-pink-600 to-blue-600'
              } transition-all duration-300`} />
              
              {/* Animated background shine effect */}
              {!loadingMore && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {loadingMore && (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                <span className="text-lg">
                  {loadingMore ? "Loading more users..." : "Load More Users"}
                </span>
                {!loadingMore && (
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
              </span>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                loadingMore ? '' : 'bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-blue-600/50 blur-xl'
              }`} />
            </motion.button>
          )}
        </div>
      </div>

      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 60%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
