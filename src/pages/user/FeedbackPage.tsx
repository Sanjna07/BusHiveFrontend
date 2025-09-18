import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Star, Send, ThumbsUp, AlertTriangle } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<'general' | 'bus' | 'driver'>('general');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({ feedbackType, rating, feedback });
    alert('Thank you for your feedback!');
    setFeedback('');
    setRating(0);
  };

  const feedbackCategories = [
    { id: 'general', label: 'General Feedback', icon: MessageSquare, color: 'text-blue-600 bg-blue-100' },
    { id: 'bus', label: 'Bus Service', icon: ThumbsUp, color: 'text-green-600 bg-green-100' },
    { id: 'driver', label: 'Driver/Staff', icon: Star, color: 'text-orange-600 bg-orange-100' }
  ];

  const recentFeedback = [
    {
      id: 1,
      type: 'Bus Service',
      message: 'Bus was clean and on time. Great service!',
      date: '2024-01-15',
      status: 'Resolved'
    },
    {
      id: 2,
      type: 'Driver/Staff',
      message: 'Driver was very helpful and courteous.',
      date: '2024-01-12',
      status: 'Acknowledged'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/user/dashboard"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Feedback Form */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-orange-600" />
                Share Your Feedback
              </h1>
              <p className="text-gray-600 mt-2">Help us improve our service</p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Feedback Category</label>
                  <div className="grid grid-cols-1 gap-3">
                    {feedbackCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setFeedbackType(category.id as any)}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                          feedbackType === category.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`p-2 rounded-full ${category.color}`}>
                          <category.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-800">{category.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Overall Rating</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`w-8 h-8 ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {rating > 0 ? `${rating}/5` : 'No rating'}
                    </span>
                  </div>
                </div>

                {/* Feedback Message */}
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your experience..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Feedback</span>
                </button>
              </form>
            </div>
          </div>

          {/* Recent Feedback & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Report */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Quick Report</h2>
                <p className="text-sm text-gray-600">Report issues immediately</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  <button className="flex items-center space-x-3 p-4 rounded-lg border hover:shadow-md transition-all text-left">
                    <div className="p-2 rounded-full bg-red-100 text-red-600">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Report Safety Issue</p>
                      <p className="text-xs text-gray-500">Immediate attention required</p>
                    </div>
                  </button>
                  <button className="flex items-center space-x-3 p-4 rounded-lg border hover:shadow-md transition-all text-left">
                    <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Service Complaint</p>
                      <p className="text-xs text-gray-500">Report service issues</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Your Recent Feedback</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {recentFeedback.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-800">{item.type}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'Resolved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.message}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;