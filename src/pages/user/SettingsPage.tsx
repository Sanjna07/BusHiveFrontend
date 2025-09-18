import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, User, Bell, Shield, MapPin, Smartphone } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState({
    busUpdates: true,
    delays: true,
    promotions: false,
    weeklyReport: true
  });

  const [preferences, setPreferences] = useState({
    defaultLocation: 'Tech Park',
    language: 'English',
    theme: 'Light'
  });

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

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

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-orange-600" />
              Settings
            </h1>
            <p className="text-gray-600 mt-2">Manage your account and preferences</p>
          </div>

          <div className="divide-y divide-gray-200">
            {/* Profile Settings */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-600" />
                Profile Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                    defaultValue="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Update Profile
              </button>
            </div>

            {/* Notification Settings */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-gray-600" />
                Notifications
              </h2>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {key === 'busUpdates' && 'Bus Updates'}
                        {key === 'delays' && 'Delay Notifications'}
                        {key === 'promotions' && 'Promotions & Offers'}
                        {key === 'weeklyReport' && 'Weekly Travel Report'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {key === 'busUpdates' && 'Get notified about bus arrivals and departures'}
                        {key === 'delays' && 'Receive alerts about delays and route changes'}
                        {key === 'promotions' && 'Stay updated with latest offers and discounts'}
                        {key === 'weeklyReport' && 'Get weekly summary of your travel patterns'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? 'bg-orange-500' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* App Preferences */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-gray-600" />
                App Preferences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Location</label>
                  <select
                    value={preferences.defaultLocation}
                    onChange={(e) => setPreferences(prev => ({ ...prev, defaultLocation: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option>Tech Park</option>
                    <option>City Mall</option>
                    <option>Railway Station</option>
                    <option>Airport</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={preferences.language}
                    onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Malayalam</option>
                    <option>Tamil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                  <select
                    value={preferences.theme}
                    onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-gray-600" />
                Privacy & Security
              </h2>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border rounded-lg hover:shadow-md transition-all">
                  <h3 className="font-medium text-gray-800">Change Password</h3>
                  <p className="text-sm text-gray-600">Update your account password</p>
                </button>
                <button className="w-full text-left p-4 border rounded-lg hover:shadow-md transition-all">
                  <h3 className="font-medium text-gray-800">Privacy Settings</h3>
                  <p className="text-sm text-gray-600">Manage your data and privacy preferences</p>
                </button>
                <button className="w-full text-left p-4 border rounded-lg hover:shadow-md transition-all">
                  <h3 className="font-medium text-gray-800">Download My Data</h3>
                  <p className="text-sm text-gray-600">Get a copy of your account data</p>
                </button>
              </div>
            </div>

            {/* Account Actions */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Actions</h2>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Save Changes
                </button>
                <button className="border border-red-300 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;