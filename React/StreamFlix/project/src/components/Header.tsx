import React from 'react';
import { Moon, Sun, Languages, Film, Home, Tv, BookmarkCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { icon: Home, label: t('nav.home') },
    { icon: Film, label: t('nav.movies') },
    { icon: Tv, label: t('nav.series') },
    { icon: BookmarkCheck, label: t('nav.myList') },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
              {t('title')}
            </h1>
            <div className="flex items-center space-x-4 sm:hidden">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Languages className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'light' ? (
                  <Moon className="w-6 h-6 text-gray-600" />
                ) : (
                  <Sun className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
          
          <nav className="flex items-center justify-between sm:justify-center flex-1 sm:flex-none sm:ml-8">
            <ul className="flex space-x-1 sm:space-x-2 w-full sm:w-auto justify-between sm:justify-start">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <item.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Languages className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6 text-gray-600" />
              ) : (
                <Sun className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}