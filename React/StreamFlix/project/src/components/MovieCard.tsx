import React from 'react';
import { Star } from 'lucide-react';
import type { Movie } from '../types';
import { useTranslation } from 'react-i18next';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {movie.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{movie.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-1" />
            <span className="text-gray-700 dark:text-gray-200">
              {movie.rating}
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-200">
            ${movie.price.toFixed(2)}
          </span>
        </div>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
          {t('rentNow')}
        </button>
      </div>
    </div>
  );
}