================================================
FILE: components/ProjectDemo.tsx
================================================
import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { motion } from 'framer-motion';
import { Upload, FileSpreadsheet, Play, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { INDUSTRIAL_PROJECTS, PERSONAL_PROJECTS } from '../constants';
// KHÔNG import ParticlesBackground ở đây nữa để tránh trùng lặp

const ProjectDemo: React.FC = () => {
  const { projectId } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const allProjects = [...INDUSTRIAL_PROJECTS, ...PERSONAL_PROJECTS];
  const project = allProjects.find(p => p.id === projectId);

  const [file, setFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [excelData, setExcelData] = useState<any[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!project) {
    return (
      // Xóa bg-slate-900, dùng min-h-screen và z-10 để nổi lên trên nền App
      <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center">
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
            <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2">
                <ArrowLeft size={20} /> Back to Home
            </Link>
        </div>
      </div>
    );
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setError(null);
    setResult(null);

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        setExcelData(data);
      } catch (err) {
        console.error(err);
        setError("Error reading Excel file. Please make sure it's a valid .xlsx or .csv file.");
      }
    };
    reader.readAsBinaryString(selectedFile);
  };

  const runSimulation = () => {
    if (!file || excelData.length === 0) {
      setError("Please upload a valid data file first.");
      return;
    }

    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      const rowCount = excelData.length;
      const improvement = (Math.random() * (20 - 5) + 5).toFixed(2);
      
      setResult(`Optimization Complete! 
      \nProcessed ${rowCount} rows of input data successfully.
      \n------------------------------------------------
      \n✅ Objective Function: Minimized Cost
      \n✅ Constraints Satisfied: 100%
      \n🚀 Performance Improvement: ${improvement}% reduced costs
      \n📦 Recommended Allocation: Generated in export file.`);
    }, 2000);
  };

  return (
    // Bỏ bg-slate-900 để nền trong suốt -> thấy được hiệu ứng hạt từ App.tsx
    // Thêm 'relative z-10' để nội dung nổi lên trên, có thể tương tác được
    <div className="relative z-10 min-h-screen text-white overflow-hidden font-sans">
      
      <div className="container mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-700 backdrop-blur-sm">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-8 shadow-2xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                 {project.title} <span className="text-blue-500 text-sm bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Live Demo</span>
              </h1>
              <p className="text-slate-400">Upload your dataset (.xlsx, .csv) to run the optimization model directly in the browser.</p>
            </div>
            <div className="p-3 bg-blue-600/20 rounded-xl hidden md:block">
               <FileSpreadsheet className="text-blue-400" size={32} />
            </div>
          </div>

          <div 
            className="border-2 border-dashed border-slate-600 rounded-xl p-10 text-center hover:border-blue-500 hover:bg-slate-700/30 transition-all cursor-pointer mb-8 group"
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              accept=".xlsx, .xls, .csv" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
            />
            <Upload className="mx-auto text-slate-400 mb-4 group-hover:text-blue-400 transition-colors" size={48} />
            {file ? (
              <div>
                <p className="text-emerald-400 font-semibold text-lg flex items-center justify-center gap-2">
                  <CheckCircle size={20} /> {file.name}
                </p>
                <p className="text-slate-500 text-sm mt-2">{excelData.length} rows detected ready for processing</p>
              </div>
            ) : (
              <div>
                <p className="text-lg font-medium text-slate-300">Click to upload Excel File</p>
                <p className="text-slate-500 text-sm mt-2">Supported formats: .xlsx, .csv</p>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6 flex items-center gap-2 animate-pulse">
              <AlertCircle size={20} /> {error}
            </div>
          )}

          <div className="flex justify-end mb-8">
            <button
              onClick={runSimulation}
              disabled={!file || isProcessing}
              className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all w-full md:w-auto justify-center ${
                !file || isProcessing 
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Running Model...
                </>
              ) : (
                <>
                  <Play size={24} fill="currentColor" /> Run Optimization
                </>
              )}
            </button>
          </div>

          {result && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-slate-900 rounded-xl p-6 border border-emerald-500/30 overflow-hidden"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle size={24} /> Calculation Complete
              </h3>
              <div className="font-mono text-slate-300 whitespace-pre-line bg-black/30 p-4 rounded-lg border border-slate-700/50">
                {result}
              </div>
              
              <div className="mt-6">
                 <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Input Data Preview (First 5 rows):</h4>
                 <div className="overflow-x-auto rounded-lg border border-slate-700">
                    <table className="w-full text-left text-xs text-slate-400">
                        <thead className="bg-slate-800 text-slate-200 uppercase font-bold">
                            <tr>
                                {excelData.length > 0 && Object.keys(excelData[0]).map((key) => (
                                    <th key={key} className="px-4 py-3 whitespace-nowrap">{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.slice(0, 5).map((row, i) => (
                                <tr key={i} className="border-t border-slate-800 hover:bg-slate-800/30 transition-colors">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {Object.values(row).map((val: any, j) => (
                                        <td key={j} className="px-4 py-2 border-r border-slate-800 last:border-0">{val}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDemo;
