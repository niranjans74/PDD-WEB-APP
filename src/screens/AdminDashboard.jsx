import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, User, BarChart3, PieChart, Bookmark, Activity, LogOut,
  Search, Filter, X, ChevronRight, CheckCircle, Clock, Calendar, Mail, GraduationCap, Building2, TrendingUp, AlertCircle, Shield, ShieldOff, Megaphone, Send, Database, Menu
} from 'lucide-react';
import DataManagementTab from './DataManagementTab';
import { API_BASE_URL } from '../assets/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data States
  const [dashboardData, setDashboardData] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [readinessData, setReadinessData] = useState(null);
  const [bookmarkData, setBookmarkData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [announcementsData, setAnnouncementsData] = useState([]);
  
  // Announcement Form State
  const [annMessage, setAnnMessage] = useState('');
  const [annTarget, setAnnTarget] = useState('all');
  const [annUser, setAnnUser] = useState('');
  const [annUserSearch, setAnnUserSearch] = useState('');
  
  // UI States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [readinessModalRange, setReadinessModalRange] = useState(null);

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (!token || !userStr) {
      navigate('/login');
      return;
    }
    
    try {
      const user = JSON.parse(userStr);
      if (user.role !== 'admin') {
        navigate('/home');
        return;
      }
    } catch (e) {
      navigate('/login');
      return;
    }

    fetchTabContent(activeTab);
  }, [activeTab, navigate]);

  const fetchWithAuth = async (endpoint) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        localStorage.clear();
        navigate('/login');
        throw new Error('Unauthorized');
      }
      throw new Error(`HTTP Error ${res.status}`);
    }
    return res.json();
  };

  const fetchTabContent = async (tab) => {
    setIsLoading(true);
    setError('');
    try {
      if (tab === 'dashboard') {
        const res = await fetchWithAuth('/api/admin/dashboard');
        setDashboardData(res.data);
      } else if (tab === 'users') {
        const res = await fetchWithAuth('/api/admin/users');
        setUsersData(res.data);
      } else if (tab === 'companies') {
        const res = await fetchWithAuth('/api/admin/analytics/companies');
        setCompanyData(res.data);
      } else if (tab === 'readiness') {
        const res = await fetchWithAuth('/api/admin/analytics/readiness');
        setReadinessData(res.data);
      } else if (tab === 'bookmarks') {
        const res = await fetchWithAuth('/api/admin/analytics/bookmarks');
        setBookmarkData(res.data);
      } else if (tab === 'activity') {
        const res = await fetchWithAuth('/api/admin/activity');
        setActivityData(res.data);
      } else if (tab === 'announcements') {
        const res = await fetchWithAuth('/api/admin/announcements');
        setAnnouncementsData(res.data);
        if (usersData.length === 0) {
            const usersRes = await fetchWithAuth('/api/admin/users');
            setUsersData(usersRes.data);
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  const openUserDetails = async (userId) => {
    setSelectedUser(userId);
    setIsLoading(true);
    try {
      const res = await fetchWithAuth(`/api/admin/users/${userId}`);
      setUserDetails(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load user details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlockUser = async (userId, currentStatus) => {
    if (!window.confirm(`Are you sure you want to ${currentStatus ? 'unblock' : 'block'} this user?`)) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/admin/users/${userId}/block`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        alert(`User successfully ${currentStatus ? 'unblocked' : 'blocked'}.`);
        fetchTabContent('users');
        if (userDetails && userDetails._id === userId) {
            setUserDetails({...userDetails, isBlocked: !currentStatus});
        }
      }
    } catch (error) {
      alert("Failed to block/unblock user.");
    }
  };

  const handlePromoteUser = async (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'student' : 'admin';
    if (!window.confirm(`Are you sure you want to change this user's role to ${newRole}?`)) return;
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/admin/users/${userId}/role`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) {
        alert(`User is now an ${newRole}.`);
        fetchTabContent('users');
        if (userDetails && userDetails._id === userId) {
            setUserDetails({...userDetails, role: newRole});
        }
      }
    } catch (error) {
      alert("Failed to change user role.");
    }
  };

  const handlePostAnnouncement = async (e) => {
    e.preventDefault();
    if (annMessage.length > 120) return alert("Message too long");
    if (annTarget === 'specific' && !annUser) return alert("Please select a user");

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/api/admin/announcements`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          message: annMessage,
          targetType: annTarget,
          targetUserId: annTarget === 'specific' ? annUser : undefined
        })
      });
      if (res.ok) {
        setAnnMessage('');
        alert("Announcement posted successfully!");
        fetchTabContent('announcements');
      } else {
        const data = await res.json();
        alert(data.message || "Failed to post announcement");
      }
    } catch (err) {
      alert("Error posting announcement");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  // --- Render Functions for Tabs ---

  const renderDashboard = () => {
    if (!dashboardData) return null;
    return (
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold">Platform Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-500"><Users size={24} /></div>
              <h3 className="text-lg font-semibold text-secondary">Total Users</h3>
            </div>
            <p className="text-4xl font-bold">{dashboardData.totalUsers}</p>
            <p className="text-sm text-secondary mt-2"><span className="text-green-500 font-medium">{dashboardData.activeUsers}</span> active this week</p>
          </div>

          <div className="card p-6 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-green-500/20 rounded-lg text-green-500"><TrendingUp size={24} /></div>
              <h3 className="text-lg font-semibold text-secondary">Avg Readiness</h3>
            </div>
            <p className="text-4xl font-bold">{dashboardData.avgReadiness}%</p>
            <div className="w-full bg-border/50 h-2 mt-3 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full" style={{ width: `${dashboardData.avgReadiness}%` }}></div>
            </div>
          </div>

          <div className="card p-6 bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-500"><Building2 size={24} /></div>
              <h3 className="text-lg font-semibold text-secondary">Target Companies</h3>
            </div>
            <p className="text-4xl font-bold">{dashboardData.totalTargetCompanies}</p>
            <p className="text-sm text-secondary mt-2">Selections made by students</p>
          </div>
        </div>
      </div>
    );
  };

  const renderUsers = () => {
    const filteredUsers = usersData.filter(u => 
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      u.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="space-y-6 animate-fadeInUp">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-bold">User Management</h2>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="form-input pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bgMain border-b border-border text-secondary text-sm">
                  <th className="p-4 font-semibold">Student</th>
                  <th className="p-4 font-semibold">Academics</th>
                  <th className="p-4 font-semibold">Readiness</th>
                  <th className="p-4 font-semibold">Target Companies</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr><td colSpan="5" className="p-8 text-center text-secondary">No users found.</td></tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user._id} className="border-b border-border hover:bg-bgMain/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {user.profilePic ? (
                            <img src={user.profilePic} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                              {user.name?.charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-textMain">{user.name}</p>
                            <p className="text-xs text-secondary">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-sm">{user.college || 'N/A'}</p>
                        <p className="text-xs text-secondary">{user.department} • Year {user.year}</p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-border rounded-full overflow-hidden">
                            <div className={`h-full ${user.readiness > 70 ? 'bg-green-500' : user.readiness > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${user.readiness || 0}%` }}></div>
                          </div>
                          <span className="text-xs font-bold">{user.readiness || 0}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {(user.targetCompanies || []).slice(0, 2).map((c, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 bg-border rounded text-textMain">{c}</span>
                          ))}
                          {(user.targetCompanies?.length > 2) && <span className="text-[10px] px-2 py-1 bg-border rounded text-secondary">+{user.targetCompanies.length - 2}</span>}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <span className="flex items-center justify-end gap-3">
                          {user.isBlocked && <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-1 rounded-full font-bold">BLOCKED</span>}
                          {user.role === 'admin' && <span className="text-[10px] bg-purple-500/10 text-purple-500 px-2 py-1 rounded-full font-bold">ADMIN</span>}
                          <button onClick={() => openUserDetails(user._id)} className="text-primary hover:underline text-sm font-medium">View Details</button>
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderCompanyAnalytics = () => {
    if (!companyData || companyData.length === 0) return <p className="text-secondary p-8 text-center">No company data available yet.</p>;
    
    return (
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold">Company Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Top Selected Companies</h3>
            <div className="space-y-4">
              {companyData.slice(0, 8).map((company, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-bgMain flex items-center justify-center font-bold text-sm border border-border">
                      {idx + 1}
                    </div>
                    <span className="font-medium">{company.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary">{company.count} Students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card p-6 bg-primary/10 border-primary/20">
              <h3 className="text-sm text-primary font-semibold mb-1">Most Popular Company</h3>
              <p className="text-3xl font-bold">{companyData[0].name}</p>
              <p className="text-sm text-secondary mt-1">{companyData[0].count} students are preparing for this.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-sm text-secondary font-semibold mb-1">Total Unique Companies</h3>
              <p className="text-3xl font-bold">{companyData.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderReadinessAnalytics = () => {
    if (!readinessData) return null;
    
    return (
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold">Readiness Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(readinessData).map(([range, count]) => (
            <button key={range} onClick={() => setReadinessModalRange(range)} className="card p-6 text-center hover:bg-border/30 transition-colors border border-transparent hover:border-primary/50 text-left">
              <h3 className="text-sm text-secondary font-semibold mb-2">Readiness {range}</h3>
              <p className="text-4xl font-bold text-primary">{count}</p>
              <p className="text-xs text-secondary mt-2">Students</p>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderBookmarks = () => {
    return (
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold">Most Bookmarked Topics</h2>
        <div className="card p-6">
          {bookmarkData.length === 0 ? (
            <p className="text-center text-secondary">No bookmarks found.</p>
          ) : (
            <div className="space-y-4">
              {bookmarkData.map((b, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 hover:bg-bgMain rounded-lg border border-transparent hover:border-border transition-colors">
                  <div className="flex items-center gap-3">
                    <Bookmark size={18} className="text-primary" />
                    <span className="font-medium">{b.title}</span>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">{b.count} Saves</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderActivity = () => {
    return (
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold">Activity Monitor</h2>
        <div className="card p-6">
          <div className="space-y-6 border-l-2 border-border ml-3 pl-6">
            {activityData.length === 0 ? (
              <p className="text-secondary">No recent activity.</p>
            ) : (
              activityData.map((act, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-bgMain"></div>
                  <p className="font-semibold text-textMain">{act.user}</p>
                  <p className="text-sm text-secondary">{act.action}</p>
                  <p className="text-xs text-secondary/60 mt-1">{new Date(act.timestamp).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAnnouncements = () => {
    return (
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl font-bold flex items-center gap-2"><Megaphone size={24}/> Announcements</h2>
        
        <div className="card p-6 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
          <h3 className="text-lg font-bold mb-4">Post New Announcement</h3>
          <form onSubmit={handlePostAnnouncement} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Message (Max 120 chars)</label>
              <textarea 
                className="w-full form-input resize-none" 
                rows="3" 
                maxLength="120"
                value={annMessage}
                onChange={(e) => setAnnMessage(e.target.value)}
                placeholder="Write an alert or update..."
                required
              ></textarea>
              <div className="text-right text-xs text-secondary mt-1">{annMessage.length}/120</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">Target Audience</label>
                <select className="form-input w-full" value={annTarget} onChange={(e) => setAnnTarget(e.target.value)}>
                  <option value="all">All Students (Global)</option>
                  <option value="specific">Specific Student</option>
                </select>
              </div>
              {annTarget === 'specific' && (
                <div className="flex-1 animate-fadeIn relative">
                  <label className="block text-sm font-semibold mb-2">Search & Select Student</label>
                  <div className="relative mb-2">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                    <input 
                      type="text" 
                      className="form-input w-full pl-9" 
                      placeholder="Search by name..." 
                      value={annUserSearch} 
                      onChange={(e) => setAnnUserSearch(e.target.value)}
                    />
                  </div>
                  <select 
                    className="form-input w-full h-32" 
                    value={annUser} 
                    onChange={(e) => setAnnUser(e.target.value)} 
                    required 
                    size="4"
                  >
                    <option value="" disabled>-- Choose User --</option>
                    {usersData
                      .filter(u => u.name?.toLowerCase().includes(annUserSearch.toLowerCase()))
                      .map(u => (
                      <option key={u._id} value={u._id}>{u.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="text-right">
              <button type="submit" className="btn-primary flex items-center gap-2 ml-auto">
                <Send size={16}/> Post Announcement
              </button>
            </div>
          </form>
        </div>

        <div className="card mt-8">
          <div className="p-6 border-b border-border">
            <h3 className="font-bold">Recent Announcements</h3>
          </div>
          <div className="p-6 space-y-4">
            {announcementsData.length === 0 ? (
              <p className="text-secondary text-center py-4">No announcements posted yet.</p>
            ) : (
              announcementsData.map(ann => (
                <div key={ann._id} className="p-4 border border-border rounded-lg flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0"><Megaphone size={20}/></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${ann.targetType === 'all' ? 'bg-green-500/10 text-green-500' : 'bg-purple-500/10 text-purple-500'}`}>
                        {ann.targetType === 'all' ? 'GLOBAL' : `TO: ${ann.targetUserId?.name || 'Unknown User'}`}
                      </span>
                      <span className="text-xs text-secondary">{new Date(ann.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="text-sm font-medium">{ann.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  // --- User Details Modal ---
  const renderUserDetailsModal = () => {
    if (!userDetails) return null;
    const u = userDetails;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
        <div className="bg-bgMain rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
          
          <div className="sticky top-0 bg-bgMain/90 backdrop-blur border-b border-border p-4 flex justify-between items-center z-10">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <User size={20}/> Student Profile 
                {u.isBlocked && <span className="ml-2 text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded-full uppercase tracking-wider">Blocked</span>}
                {u.role === 'admin' && <span className="ml-2 text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded-full uppercase tracking-wider">Admin</span>}
            </h2>
            <div className="flex items-center gap-2">
              <button onClick={() => handlePromoteUser(u._id, u.role)} className="px-3 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 rounded-lg flex items-center gap-2 transition">
                  <Shield size={14} /> {u.role === 'admin' ? 'Demote to Student' : 'Promote to Admin'}
              </button>
              <button onClick={() => handleBlockUser(u._id, u.isBlocked)} className="px-3 py-1.5 text-xs font-semibold bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg flex items-center gap-2 transition">
                  <ShieldOff size={14} /> {u.isBlocked ? 'Unblock User' : 'Block User'}
              </button>
              <button onClick={() => { setUserDetails(null); setSelectedUser(null); }} className="p-2 ml-2 hover:bg-border rounded-full transition">
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-8">
            
            {/* Personal Details */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0">
                {u.profilePic ? (
                  <img src={u.profilePic} alt={u.name} className="w-24 h-24 rounded-2xl object-cover shadow-lg border border-border" />
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-gradient-primary text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                    {u.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">{u.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-secondary mb-4">
                  <span className="flex items-center gap-1"><Mail size={16}/> {u.email}</span>
                  {u.phone && <span className="flex items-center gap-1">📞 {u.phone}</span>}
                </div>
                {u.role !== 'admin' && (
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-border text-xs rounded-full font-medium"><GraduationCap size={14} className="inline mr-1"/> {u.college || 'No College'}</span>
                    <span className="px-3 py-1 bg-border text-xs rounded-full font-medium">{u.department || 'No Dept'} • Year {u.year || 'N/A'}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-bold">CGPA: {u.cgpa || '0.0'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Placement Details */}
            <div>
              <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Placement Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-4 bg-bgMain border border-border">
                  <p className="text-sm text-secondary mb-1">Overall Readiness</p>
                  <p className="text-3xl font-bold text-primary">{u.readiness || 0}%</p>
                </div>
                <div className="card p-4 bg-bgMain border border-border">
                  <p className="text-sm text-secondary mb-2">Target Companies</p>
                  <div className="flex flex-wrap gap-2">
                    {u.targetCompanies && u.targetCompanies.length > 0 ? (
                      u.targetCompanies.map((c, i) => <span key={i} className="px-2 py-1 bg-border rounded text-xs">{c}</span>)
                    ) : <span className="text-xs text-secondary">None selected</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Learning & Task Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Learning Activity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 border border-border rounded-lg">
                    <span className="text-sm flex items-center gap-2"><Bookmark size={16}/> Bookmarks</span>
                    <span className="font-bold">{u.bookmarks?.length || 0}</span>
                  </div>
                  <div className="flex justify-between p-3 border border-border rounded-lg">
                    <span className="text-sm flex items-center gap-2"><CheckCircle size={16}/> Prepared Topics</span>
                    <span className="font-bold">{Object.keys(u.prepProgress || {}).length}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Account Info</h4>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 border border-border rounded-lg">
                    <span className="text-sm flex items-center gap-2"><Calendar size={16}/> Joined</span>
                    <span className="font-medium text-sm">{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between p-3 border border-border rounded-lg">
                    <span className="text-sm flex items-center gap-2"><Clock size={16}/> Last Active</span>
                    <span className="font-medium text-sm">{new Date(u.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  // --- Main Layout ---
  return (
    <div className="flex h-screen bg-bgMain text-textMain overflow-hidden">
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50
        w-64 bg-card border-r border-border shrink-0 flex flex-col h-full 
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold bg-gradient-primary text-transparent bg-clip-text">Admin Panel</h1>
          <p className="text-xs text-secondary mt-1">Placement Dashboard</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { id: 'dashboard', icon: <LayoutDashboard size={20}/>, label: 'Dashboard' },
            { id: 'data-management', icon: <Database size={20}/>, label: 'Data Management' },
            { id: 'users', icon: <Users size={20}/>, label: 'Users' },
            { id: 'companies', icon: <Building2 size={20}/>, label: 'Company Analytics' },
            { id: 'readiness', icon: <BarChart3 size={20}/>, label: 'Readiness Analytics' },
            { id: 'bookmarks', icon: <Bookmark size={20}/>, label: 'Bookmarks Analytics' },
            { id: 'activity', icon: <Activity size={20}/>, label: 'Activity Monitor' },
            { id: 'announcements', icon: <Megaphone size={20}/>, label: 'Announcements' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                activeTab === item.id ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm' : 'text-secondary hover:bg-border/50 hover:text-textMain'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition font-medium"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative bg-bgMain">
        <header className="h-16 border-b border-border flex items-center px-4 md:px-8 shrink-0 bg-card/50 backdrop-blur-sm z-10 gap-4">
          <button 
            className="md:hidden p-2 rounded-lg text-secondary hover:bg-border transition"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div className="text-sm text-secondary font-medium uppercase tracking-wider">
            {activeTab.replace('-', ' ')}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 relative">
          {isLoading && !userDetails ? (
            <div className="absolute inset-0 bg-bgMain/50 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : null}

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-xl mb-6 flex items-center gap-3">
              <AlertCircle size={20} /> {error}
            </div>
          )}

          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'data-management' && <DataManagementTab usersData={usersData} />}
          {activeTab === 'users' && renderUsers()}
          {activeTab === 'companies' && renderCompanyAnalytics()}
          {activeTab === 'readiness' && renderReadinessAnalytics()}
          {activeTab === 'bookmarks' && renderBookmarks()}
          {activeTab === 'activity' && renderActivity()}
          {activeTab === 'announcements' && renderAnnouncements()}

        </div>
      </main>

      {/* Modals */}
      {userDetails && renderUserDetailsModal()}

      {/* Readiness Users Modal */}
      {readinessModalRange && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-bgMain rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-bold">Students with {readinessModalRange} Readiness</h2>
              <button onClick={() => setReadinessModalRange(null)} className="p-2 hover:bg-border rounded-full transition"><X size={20} /></button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
              {usersData.filter(u => {
                if (u.role !== 'student') return false;
                const r = u.readiness || 0;
                if (readinessModalRange === '0-25%') return r <= 25;
                if (readinessModalRange === '26-50%') return r > 25 && r <= 50;
                if (readinessModalRange === '51-75%') return r > 50 && r <= 75;
                if (readinessModalRange === '76-100%') return r > 75;
                return false;
              }).map(u => (
                <div key={u._id} className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-bold">{u.name}</p>
                    <p className="text-xs text-secondary">{u.college || 'No College'} • {u.department || 'No Dept'}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">{u.readiness || 0}%</span>
                </div>
              ))}
              {usersData.filter(u => {
                if (u.role !== 'student') return false;
                const r = u.readiness || 0;
                if (readinessModalRange === '0-25%') return r <= 25;
                if (readinessModalRange === '26-50%') return r > 25 && r <= 50;
                if (readinessModalRange === '51-75%') return r > 50 && r <= 75;
                if (readinessModalRange === '76-100%') return r > 75;
                return false;
              }).length === 0 && (
                <p className="text-secondary text-center">No students in this range.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;