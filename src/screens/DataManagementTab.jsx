import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../assets/api';
import { Plus, Edit, Trash2, Save, X, Building2, Briefcase, Send, Search } from 'lucide-react';

const DataManagementTab = ({ usersData }) => {
  const [activeSubTab, setActiveSubTab] = useState('companies');
  
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states
  const [compForm, setCompForm] = useState({ name: '', easyTopics: '', mediumTopics: '', hardTopics: '' });
  const [jobForm, setJobForm] = useState({ title: '' });
  const [roadmapSteps, setRoadmapSteps] = useState([]);
  const [newStep, setNewStep] = useState('');
  
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [cRes, jRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/data/companies`, { headers }),
        fetch(`${API_BASE_URL}/api/data/jobs`, { headers })
      ]);
      const cData = await cRes.json();
      const jData = await jRes.json();
      if (cData.success) setCompanies(cData.data);
      if (jData.success) setJobs(jData.data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const handleAddCompany = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/data/companies`, {
        method: 'POST',
        headers,
        body: JSON.stringify(compForm)
      });
      if (res.ok) {
        setCompForm({ name: '', easyTopics: '', mediumTopics: '', hardTopics: '' });
        fetchData();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteCompany = async (id) => {
    if (!window.confirm("Delete this company?")) return;
    try {
      await fetch(`${API_BASE_URL}/api/admin/data/companies/${id}`, { method: 'DELETE', headers });
      fetchData();
    } catch (err) { console.error(err); }
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/data/jobs`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ ...jobForm, roadmap: roadmapSteps })
      });
      if (res.ok) {
        setJobForm({ title: '' });
        setRoadmapSteps([]);
        fetchData();
      }
    } catch (err) { console.error(err); }
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    try {
      await fetch(`${API_BASE_URL}/api/admin/data/jobs/${id}`, { method: 'DELETE', headers });
      fetchData();
    } catch (err) { console.error(err); }
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center gap-2">Data Management</h2>
      </div>

      <div className="flex gap-4 border-b border-border pb-2">
        <button 
          onClick={() => setActiveSubTab('companies')} 
          className={`px-4 py-2 font-medium rounded-t-lg transition ${activeSubTab === 'companies' ? 'bg-primary/10 text-primary border-b-2 border-primary' : 'text-secondary hover:text-textMain'}`}
        >
          <Building2 size={16} className="inline mr-2" />
          Target Companies
        </button>
        <button 
          onClick={() => setActiveSubTab('jobs')} 
          className={`px-4 py-2 font-medium rounded-t-lg transition ${activeSubTab === 'jobs' ? 'bg-primary/10 text-primary border-b-2 border-primary' : 'text-secondary hover:text-textMain'}`}
        >
          <Briefcase size={16} className="inline mr-2" />
          Evergreen Jobs
        </button>
      </div>

      {isLoading && <p>Loading data...</p>}

      {/* Companies Manager */}
      {!isLoading && activeSubTab === 'companies' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-4">Add New Company</h3>
              <form onSubmit={handleAddCompany} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Company Name</label>
                  <input required type="text" className="form-input w-full" value={compForm.name} onChange={e => setCompForm({...compForm, name: e.target.value})} placeholder="e.g. Netflix" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Easy Topics (Comma separated)</label>
                  <input type="text" className="form-input w-full" value={compForm.easyTopics} onChange={e => setCompForm({...compForm, easyTopics: e.target.value})} placeholder="Arrays, Strings, Two Pointers" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Medium Topics (Comma separated)</label>
                  <input type="text" className="form-input w-full" value={compForm.mediumTopics} onChange={e => setCompForm({...compForm, mediumTopics: e.target.value})} placeholder="Trees, DP, Sliding Window" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Hard Topics (Comma separated)</label>
                  <input type="text" className="form-input w-full" value={compForm.hardTopics} onChange={e => setCompForm({...compForm, hardTopics: e.target.value})} placeholder="Advanced Graphs, Segment Trees" />
                </div>
                <button type="submit" className="btn-primary w-full flex justify-center items-center gap-2"><Plus size={16}/> Add Company</button>
              </form>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold mb-4">Existing Companies ({companies.length})</h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {companies.map(c => (
                <div key={c._id} className="flex justify-between items-center p-3 border border-border rounded-lg hover:bg-border/30 transition">
                  <div>
                    <p className="font-bold">{c.name}</p>
                    <p className="text-xs text-secondary">{c.domain}</p>
                  </div>
                  <button onClick={() => handleDeleteCompany(c._id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded transition"><Trash2 size={16}/></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Jobs Manager */}
      {!isLoading && activeSubTab === 'jobs' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-4">Add New Job Role</h3>
              <form onSubmit={handleAddJob} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Job Title</label>
                  <input required type="text" className="form-input w-full" value={jobForm.title} onChange={e => setJobForm({...jobForm, title: e.target.value})} placeholder="e.g. Frontend Developer" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Roadmap Steps</label>
                  <div className="flex gap-2 mb-3">
                    <input type="text" className="form-input flex-1" value={newStep} onChange={e => setNewStep(e.target.value)} placeholder="e.g. Learn React" onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (newStep.trim()) { setRoadmapSteps([...roadmapSteps, newStep.trim()]); setNewStep(''); }
                      }
                    }}/>
                    <button type="button" onClick={() => { if(newStep.trim()) { setRoadmapSteps([...roadmapSteps, newStep.trim()]); setNewStep(''); } }} className="px-3 py-2 bg-secondary/20 hover:bg-secondary/40 rounded transition"><Plus size={16}/></button>
                  </div>
                  {roadmapSteps.length > 0 && (
                    <div className="space-y-2 mb-4 bg-slate-900/50 p-3 rounded-lg border border-border">
                      {roadmapSteps.map((step, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="flex items-center gap-2"><span className="text-secondary w-5">{idx+1}.</span> {step}</span>
                          <button type="button" onClick={() => setRoadmapSteps(roadmapSteps.filter((_, i) => i !== idx))} className="text-red-400 hover:text-red-500"><X size={14}/></button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full flex justify-center items-center gap-2"><Plus size={16}/> Add Job Role</button>
              </form>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold mb-4">Existing Jobs ({jobs.length})</h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {jobs.map(j => (
                <div key={j._id} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-[15px]" style={{color: j.color}}>{j.title}</h4>
                    <button onClick={() => handleDeleteJob(j._id)} className="text-red-500 hover:bg-red-500/10 p-1 rounded"><Trash2 size={14}/></button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {j.roadmap.slice(0, 3).map((r, idx) => <span key={idx} className="text-[10px] bg-border px-2 py-0.5 rounded-full text-secondary">{r}</span>)}
                    {j.roadmap.length > 3 && <span className="text-[10px] text-secondary">+{j.roadmap.length - 3} more</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DataManagementTab;
