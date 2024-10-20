import { Home, Search, Flame, Heart, User } from 'lucide-react';
import { useState } from 'react';

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'liked', label: 'Liked', icon: Heart },
    { id: 'user', label: 'User', icon: User },
  ];

  return (
    // Hidden on desktop (md), fixed at bottom on mobile
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <Icon
              className={`w-6 h-6 mb-1 ${
                activeTab === id ? 'text-orange-500' : 'text-gray-500'
              }`}
            />
            <span
              className={`text-xs ${
                activeTab === id ? 'text-orange-500' : 'text-gray-500'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;