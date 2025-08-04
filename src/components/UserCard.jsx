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

const UserCard = ({ user, onCardClick }) => {
  const fullName = `${user.name.first} ${user.name.last}`;
  const location = `${user.location.city}, ${user.location.country}`;

  // Generate a random gradient for each card based on user's name
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
    <Card className="group cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border-0 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Gradient background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${selectedGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Animated border gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${selectedGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
           style={{ padding: '2px', borderRadius: '12px' }}>
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[10px]" />
      </div>
      
      <div onClick={() => onCardClick(user)} className="relative z-10">
        <CardHeader className="pb-4">
          <div className="flex items-start space-x-4">
            {/* Enhanced profile image with gradient ring */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedGradient} rounded-full p-1 group-hover:animate-pulse`}>
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full" />
              </div>
              <img 
                className="relative w-16 h-16 rounded-full object-cover z-10" 
                src={user.picture.large} 
                alt={`Profile of ${fullName}`} 
              />
            </div>
            
            <div className="flex-grow">
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                {fullName}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                <a 
                  href={`mailto:${user.email}`} 
                  onClick={(e) => e.stopPropagation()} 
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 hover:underline"
                >
                  {user.email}
                </a>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex items-center space-x-2">
            {/* Location icon */}
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedGradient} group-hover:animate-pulse`} />
            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
              {location}
            </p>
          </div>
        </CardContent>
        
        {/* Subtle glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r ${selectedGradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-20`} />
      </div>
    </Card>
  );
};

export default UserCard;