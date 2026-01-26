import React, { useState } from 'react';
import { reviewsData } from '../data/mockData';

interface Review {
  id: string;
  product: string;
  customer: string;
  rating: number;
  date: string;
  comment: string;
  status: 'published' | 'pending' | 'hidden';
}

const RatesReviews: React.FC = () => {
  const [reviews] = useState<Review[]>(reviewsData);
  const [filter, setFilter] = useState<'all' | 'published' | 'pending' | 'hidden'>('all');
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  const filteredReviews = reviews.filter(review => {
    const matchesStatus = filter === 'all' || review.status === filter;
    const matchesRating = ratingFilter === 0 || review.rating === ratingFilter;
    return matchesStatus && matchesRating;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'hidden': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`material-icons-outlined text-sm ${
              star <= rating ? 'text-yellow-500' : 'text-slate-300 dark:text-slate-600'
            }`}
          >
            star
          </span>
        ))}
        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
          ({rating}.0)
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Overall Rating */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:border dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Overall Rating</h3>
            <div className="flex items-center gap-4 mt-2">
              <div className="text-4xl font-bold text-slate-800 dark:text-white">4.2</div>
              <div>
                {renderStars(4)}
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Based on 128 reviews
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <div className="text-sm text-slate-600 dark:text-slate-400 w-6">{rating} star</div>
                <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 rounded-full"
                    style={{ width: `${(rating === 5 ? 60 : rating === 4 ? 25 : rating === 3 ? 10 : rating === 2 ? 3 : 2)}%` }}
                  />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 w-10">
                  {rating === 5 ? '60%' : rating === 4 ? '25%' : rating === 3 ? '10%' : rating === 2 ? '3%' : '2%'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:border dark:border-slate-700 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Customer Reviews</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage and moderate customer reviews</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {[0, 5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setRatingFilter(rating)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      ratingFilter === rating
                        ? 'bg-primary text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {rating === 0 ? 'All' : `${rating}★`}
                  </button>
                ))}
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm py-2 px-3 focus:ring-2 focus:ring-primary dark:text-white"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="pending">Pending</option>
                <option value="hidden">Hidden</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Product & Customer</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Rating</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Date</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredReviews.map((review) => (
                <tr key={review.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-3 px-4 md:px-6">
                    <div>
                      <div className="text-sm font-medium text-slate-800 dark:text-white">
                        {review.product}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        by {review.customer}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                        {review.comment}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    {renderStars(review.rating)}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-sm text-slate-600 dark:text-slate-300">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      {review.status === 'pending' && (
                        <>
                          <button className="p-1 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors">
                            <span className="material-icons-outlined text-lg">check</span>
                          </button>
                          <button className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
                            <span className="material-icons-outlined text-lg">close</span>
                          </button>
                        </>
                      )}
                      <button className="p-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
                        <span className="material-icons-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
                        <span className="material-icons-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RatesReviews;