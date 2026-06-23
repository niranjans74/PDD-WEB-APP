import React, { useState, useEffect } from 'react';
import { Bookmark, Search, Filter, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Bookmarks = () => {
  const navigate = useNavigate();
  const [savedBookmarks, setSavedBookmarks] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const loadedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setSavedBookmarks(loadedBookmarks);
  }, []);

  const removeBookmark = (id, e) => {
    e.stopPropagation();
    const newBookmarks = savedBookmarks.filter(b => b.id !== id);
    setSavedBookmarks(newBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    
    setToastMessage('Removed from bookmarks');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="page-container min-h-screen pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Bookmark className="text-primary" size={32} />
          My Bookmarks
        </h1>
        <p className="text-slate-400 text-lg">Quick access to your saved topics and resources.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors bg-primary/20 text-primary border border-primary/30">
            All Saves
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors bg-slate-800/50 border border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
            Topics
          </button>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search size={18} className="text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search bookmarks..." className="form-input pl-10 h-full py-2 bg-slate-800/50" />
          </div>
          <button className="btn-outline px-3 py-2 border-slate-700 hover:bg-slate-800"><Filter size={18} /></button>
        </div>
      </div>

      {savedBookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedBookmarks.map((bookmark, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={bookmark.id} 
              className="bg-slate-800/50 border border-slate-700 hover:border-slate-500 rounded-xl p-5 transition-all hover:shadow-lg group cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold px-2 py-1 bg-slate-700 rounded text-slate-300">{bookmark.category}</span>
                <button onClick={(e) => removeBookmark(bookmark.id, e)} className="focus:outline-none">
                  <Bookmark size={18} className="text-primary fill-primary hover:text-slate-500 hover:fill-transparent transition-colors" />
                </button>
              </div>
              <h3 className="font-bold text-lg text-white mb-4 group-hover:text-primary transition-colors">{bookmark.title}</h3>
              
              <div className="mt-auto flex justify-between items-center text-xs text-slate-400">
                <span>{bookmark.time} read</span>
                <span>Saved on {bookmark.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-12 text-center flex flex-col items-center">
          <div className="bg-slate-800 p-4 rounded-full mb-4">
            <Bookmark size={32} className="text-slate-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Bookmarks Yet</h3>
          <p className="text-slate-400 max-w-md">
            You haven't saved any topics or resources yet. Explore the preparation module and click the bookmark icon to save items here.
          </p>
          <button onClick={() => navigate('/preparation')} className="btn-primary mt-6">Explore Topics</button>
        </div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-3"
          >
            <CheckCircle className="text-green-500" size={20} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bookmarks;
